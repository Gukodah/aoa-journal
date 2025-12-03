import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_ROLE_KEY) {
  // Intentionally silent in production; route will return a 500 if called without config
  console.warn("Supabase admin client missing configuration");
}

export const supabaseAdmin = SUPABASE_URL && SUPABASE_ROLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    })
  : null;
