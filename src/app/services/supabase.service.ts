import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

const SUPABASE_URL = environment.supabaseUrl;
const SUPABASE_KEY = environment.supabaseKey;

if (!SUPABASE_URL) {
  throw new Error(
    'Supabase URL is missing. Please define it in src/environments/environment.ts.'
  );
}

if (!SUPABASE_KEY) {
  throw new Error(
    'Supabase Key is missing. Please define it in src/environments/environment.ts.'
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
