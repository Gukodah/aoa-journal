import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Layout from "../components/Layout";
import { supabaseAdmin } from "../lib/supabaseAdmin.js";


const TABLE = process.env.SUPABASE_USERS_TABLE || "users";
const PROGRESS_COLUMN = process.env.SUPABASE_PROGRESS_COLUMN || "pogress_data";

export const metadata = {
  title: "Nevermine 2",
  description: "Companion journal for Advent of Ascension (Nevermine 2).",
};

const fetchInitialProgress = async () => {
  try {
    const user = await currentUser();
    const clerkId = user?.id;
    if (!clerkId || !supabaseAdmin) return [];
    const { data, error } = await supabaseAdmin
      .from(TABLE)
      .select(PROGRESS_COLUMN)
      .eq("clerk_user_id", clerkId)
      .maybeSingle();
    if (error) return [];
    const arr = data?.[PROGRESS_COLUMN];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
};

const RootLayout = async ({ children }) => {
  const initialProgress = await fetchInitialProgress();

  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body>
          <Layout initialProgress={initialProgress}>{children}</Layout>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
