import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://pfqychsissppihqomnja.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcXljaHNpc3NwcGlocW9tbmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NDkzMTUsImV4cCI6MjAyMTMyNTMxNX0.5Y6mI8a0I6PxWhxqjFWMOW-j-JHQsWpP90GUPoToLpw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
