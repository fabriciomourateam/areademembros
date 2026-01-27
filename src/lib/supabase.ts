import { createClient } from '@supabase/supabase-js';

// Projeto Supabase fixo desta área de membros
// (se quiser mudar no futuro, basta trocar estas constantes)
const SUPABASE_URL = 'https://tvahklptcxabutfgaquz.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2YWhrbHB0Y3hhYnV0ZmdhcXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NTIxNTIsImV4cCI6MjA3NzQyODE1Mn0.uwS20yO3FfgwRXuReeHJV6dhZ9cKpL1pB8GnbHqpwL8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
