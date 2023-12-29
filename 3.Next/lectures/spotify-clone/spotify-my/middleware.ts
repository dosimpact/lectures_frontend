import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  /* 사용자 세션을 가져와야 서버컴포넌트에서 object에 접근할 수 있다. */
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
