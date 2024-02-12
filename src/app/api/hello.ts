import { NextResponse, NextRequest } from "next/server";


export function hello(req: NextRequest) {
  const response = new NextResponse(JSON.stringify({ message: 'Hello, World!' }));
  response.headers.set('Content-Type', 'application/json');
  return response;
}