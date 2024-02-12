import { NextResponse } from "next/server";


export const GET = () => {
  const response = new NextResponse(JSON.stringify({ 'message': 'Hello, World!' }));

  // response.headers.set('Content-Type', 'application/json');
  return response;
}