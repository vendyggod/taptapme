import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pdsdjyvgdjpgjxwquymo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkc2RqeXZnZGpwZ2p4d3F1eW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTEzMzMsImV4cCI6MjA1MjQ2NzMzM30.tA3M6SnhqxXDv3xiWmuTpWBYch_DAfBON2PDCbswuVk';

export const supabase = createClient(supabaseUrl, supabaseKey);
