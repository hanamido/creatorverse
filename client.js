import { createClient } from '@supabase/supabase-js';

const URL = 'https://usdukrbxlmciivpnvymn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzZHVrcmJ4bG1jaWl2cG52eW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxMTAyMjAsImV4cCI6MjAwNDY4NjIyMH0.jcNb-_Urqn3FFUGWY1_4wtBZKHdxmuG2RuQmE_9uBA8';
export const supabase = createClient(URL, API_KEY);