'use server';

import { supabase } from '@/lib/supabase';

export async function verifyCertificate(refNo: string) {
  if (!refNo || refNo.trim() === '') {
    return { error: 'Reference Number is required' };
  }

  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('ref_no', refNo)
      .single();

    if (error) {
      if (error.code === 'PGRST116') { // No rows found
        return { error: 'Invalid Certificate' };
      }
      return { error: error.message };
    }

    return { data };
  } catch (err) {
    return { error: 'An unexpected error occurred' };
  }
}
