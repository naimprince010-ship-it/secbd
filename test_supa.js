const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://plhuvamjwnpgbagixjhy.supabase.co';
// Using the key provided by the subagent
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaHV2YW1qd25wZ2JhZ2l4amhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNDE4NTAsImV4cCI6MjA1NzcxNzg1MH0.0_8-3X8G8b0_8xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9xS9x';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data, error } = await supabase.from('certificates').select('*');
  if (error) {
    console.error('Error:', error.message, error.code);
  } else {
    console.log('Success! Connected. Row count:', data.length);
  }
}

test();
