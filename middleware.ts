import { updateSession } from "@/lib/supabase/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Update Supabase session
  const response = await updateSession(request)

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const supabase = await import("@/lib/supabase/server").then((m) => m.getSupabaseServerClient())
    const client = await supabase
    const {
      data: { user },
    } = await client.auth.getUser()

    if (!user) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    // Check if user is an admin
    const { data: adminUser } = await client.from("admin_users").select("*").eq("email", user.email).single()

    if (!adminUser) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return response
}

export const config = {
  matcher: ["/admin/:path*", "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
