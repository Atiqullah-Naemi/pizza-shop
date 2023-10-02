import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const location = await prismadb.location.create({
      data: { ...data },
    });

    return NextResponse.json(location);
  } catch (error) {
    console.log({ error });
  }
}
