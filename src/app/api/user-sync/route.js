import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabaseAdmin.js";

const SUPABASE_USERS_TABLE = process.env.SUPABASE_USERS_TABLE || "users";

export async function POST(req) {

  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Supabase credentials not configured" },
      { status: 500 },
    );
  }

  let email = null;
  let clerkId = null;
  try {
    const body = await req.json();
    email = body?.email || null;
    clerkId = body?.clerkId || null;
  } catch {
    // ignore parse errors, leave email as null
  }

  const { error } = await supabaseAdmin
    .from(SUPABASE_USERS_TABLE)
    .upsert(
      { clerk_user_id: clerkId, clerk_user_email: email },
      { onConflict: "clerk_user_id" },
    );

  if (error) {
    return NextResponse.json(
      { error: "Supabase insert failed", details: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
