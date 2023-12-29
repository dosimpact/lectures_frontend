"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types_db";

interface SuperbaseProviderProps {
  children: React.ReactNode;
}

// https://supabase.com/docs/guides/auth/auth-helpers/nextjs-pages
const SuperbaseProvider: React.FC<SuperbaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SuperbaseProvider;
