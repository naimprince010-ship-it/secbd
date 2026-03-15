'use server';

import { supabase } from '@/lib/supabase';

export async function addCertificate(formData: any, password?: string) {
  // Simple Password Verification
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'; // fallback for demo/testing
  
  if (password !== undefined && password !== adminPassword) {
    return { error: 'Unauthorized: Invalid Admin Password' };
  }

  const { ref_no, name, passport_no, position, start_date, end_date } = formData;

  if (!ref_no || !name || !passport_no || !position || !start_date || !end_date) {
    return { error: 'All fields are required.' };
  }

  try {
    const { data, error } = await supabase
      .from('certificates')
      .insert([
        {
          ref_no: ref_no.trim(),
          name: name.trim(),
          passport_no: passport_no.trim(),
          position: position.trim(),
          start_date,
          end_date,
          status: 'Active',
          created_by: 'Admin Panel'
        }
      ])
      .select();

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return { error: 'Certificate with this Reference Number already exists.' };
      }
      return { error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    return { error: 'An unexpected error occurred.' };
  }
}

export async function getCertificates() {
  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return { error: error.message };
    return { data };
  } catch (err) {
    return { error: 'An unexpected error occurred.' };
  }
}

export async function deleteCertificate(id: number, password?: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (password !== undefined && password !== adminPassword) {
    return { error: 'Unauthorized: Invalid Admin Password' };
  }

  try {
    const { error } = await supabase
      .from('certificates')
      .delete()
      .eq('id', id);

    if (error) return { error: error.message };
    return { success: true };
  } catch (err) {
    return { error: 'An unexpected error occurred.' };
  }
}

export async function updateCertificate(id: number, formData: any, password?: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (password !== undefined && password !== adminPassword) {
    return { error: 'Unauthorized: Invalid Admin Password' };
  }

  const { ref_no, name, passport_no, position, start_date, end_date, status } = formData;

  if (!ref_no || !name || !passport_no || !position || !start_date || !end_date) {
    return { error: 'All fields are required.' };
  }

  try {
    const { data, error } = await supabase
      .from('certificates')
      .update({
        ref_no: ref_no.trim(),
        name: name.trim(),
        passport_no: passport_no.trim(),
        position: position.trim(),
        start_date,
        end_date,
        status: status || 'Active'
      })
      .eq('id', id)
      .select();

    if (error) return { error: error.message };
    return { success: true, data };
  } catch (err) {
    return { error: 'An unexpected error occurred.' };
  }
}
