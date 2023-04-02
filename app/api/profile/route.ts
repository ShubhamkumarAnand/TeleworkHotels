import { NextResponse } from "next/server";

export async function GET(request: Request){
  const res = await fetch('https://dummyjson.com/products/12df',{
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await res.json()
  return NextResponse.json({data})
}