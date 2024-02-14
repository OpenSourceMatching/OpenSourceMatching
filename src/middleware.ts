import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// NextJS automatically runs middleware at the edge before serverless functions
// This one function can call others
export async function middleware(req: NextRequest) {


  console.log('req.method: ', req.method);
  // Only run if method is PATCH
  // ** I think if I want more complicated logic here, I can check req.path too
  if (req.method === "PATCH") {

    // 1. Get authenticated user ID (replace with your authentication logic)
    const userIdFromAuth = "65ca8ba68909d19b19420b5c";
  
    // 2. Get userId from request URL
    const userIdFromUrl = req.nextUrl.searchParams.get("userId");
  
    console.log("Hello from middleware");
    // 3. Check if they match
    // if (userIdFromAuth !== userIdFromUrl) {
    //     return NextResponse.redirect(new URL('/unauthorized', req.url));
    // }
  
    // 4. If authorized, allow the request to proceed
    return NextResponse.next();
  }
}

// This is the configuration for the middleware that tells Next.js which routes to apply the middleware to
export const config = {
  matcher: ["/api/profile/:path*"],
};
