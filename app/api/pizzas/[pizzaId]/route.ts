import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  { params }: { params: { pizzaId: string } }
) {
  try {
    const body = await req.json();
    const { name, price, ingredients, imageSrc, locationId } = await body;

    if (!params.pizzaId)
      return new NextResponse("pizza id is required", { status: 400 });

    const pizza = await prismadb.pizza.update({
      where: {
        id: params.pizzaId,
      },
      data: { name, price, ingredients, imageSrc, locationId },
    });

    return NextResponse.json(pizza);
  } catch (error) {
    console.error({ error });
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { pizzaId: string } }
) {
  if (!params.pizzaId)
    return new NextResponse("pizza id is required", { status: 400 });

  try {
    const pizza = await prismadb.pizza.delete({
      where: {
        id: params.pizzaId,
      },
    });

    return NextResponse.json(pizza);
  } catch (error) {
    console.error({ error });
    return new NextResponse("Internal error", { status: 500 });
  }
}
