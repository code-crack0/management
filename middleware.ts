// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    // Custom logic can be added here
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // This callback checks if the user is authenticated
    },
  }
);

// Specify the paths where the middleware should be applied
export const config = {
  matcher: ["/","/dashboard/:path*", "/inventory/:path*"], // Apply middleware to these paths
};