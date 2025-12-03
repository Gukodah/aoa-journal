import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { supabaseAdmin } from "../../../lib/supabaseAdmin.js";

const TABLE = process.env.SUPABASE_USERS_TABLE || "users";
const PROGRESS_COLUMN = process.env.SUPABASE_PROGRESS_COLUMN || "pogress_data";

export async function POST(req) {
  const user = await currentUser();
  const userId = user?.id;
  const userEmail = user?.primaryEmailAddress?.emailAddress || null;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Supabase credentials not configured" },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const itemId = body?.itemId;
  const state = body?.state;
  const email = body?.email || userEmail || null;

  if (!itemId || typeof state !== "boolean") {
    return NextResponse.json(
      { error: "Missing itemId or state" },
      { status: 400 },
    );
  }

  // Fetch current array
  const { data: existing, error: fetchError } = await supabaseAdmin
    .from(TABLE)
    .select(PROGRESS_COLUMN)
    .eq("clerk_user_id", userId)
    .maybeSingle();

  if (fetchError) {
    return NextResponse.json(
      { error: "Failed to read progress", details: fetchError.message },
      { status: 500 },
    );
  }

  const current = Array.isArray(existing?.[PROGRESS_COLUMN])
    ? existing[PROGRESS_COLUMN]
    : [];

  const nextSet = new Set(current);
  if (state) {
    nextSet.add(itemId);
  } else {
    nextSet.delete(itemId);
  }
  const nextArray = Array.from(nextSet);

  const { error: upsertError } = await supabaseAdmin
    .from(TABLE)
    .upsert(
      {
        clerk_user_id: userId,
        clerk_user_email: email,
        [PROGRESS_COLUMN]: nextArray,
      },
      { onConflict: "clerk_user_id" },
    );

  if (upsertError) {
    return NextResponse.json(
      { error: "Supabase update failed", details: upsertError.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, data: nextArray });
}

export async function DELETE() {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Supabase credentials not configured" },
      { status: 500 },
    );
  }

  const { error } = await supabaseAdmin
    .from(TABLE)
    .update({ [PROGRESS_COLUMN]: [] })
    .eq("clerk_user_id", userId);

  if (error) {
    return NextResponse.json(
      { error: "Supabase clear failed", details: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, data: [] });
}
