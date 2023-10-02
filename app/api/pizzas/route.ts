import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const pizza = await prismadb.pizza.create({
      data: { ...data },
    });

    return NextResponse.json(pizza);
  } catch (error) {
    console.log({ error });
  }
}
