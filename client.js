import { createClient } from '@supabase/supabase-js';

const URL = 'https://juwouhivhewzalrafujs.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1d291aGl2aGV3emFscmFmdWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5ODc4MTMsImV4cCI6MjAwNTU2MzgxM30.CZHZQeRUQNtNHGxmgkoCFzH3FVMnru0MZNztgLDQkxY';
export const supabase = createClient(URL, API_KEY);