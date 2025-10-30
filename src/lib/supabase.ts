import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://egywwpcpheeieczohtrw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneXd3cGNwaGVlaWVjem9odHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MDMwNTQsImV4cCI6MjA3MTk3OTA1NH0.Mkv-Mr8GDo0RIdP3h6xUAJL-MC2io0XsqBlrItnnPVU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
