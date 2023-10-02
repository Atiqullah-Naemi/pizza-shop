import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  { params }: { params: { locationId: string } }
) {
  try {
    const body = await req.json();
    const { name } = await body;

    if (!params.locationId)
      return new NextResponse("location id is required", { status: 400 });

    const location = await prismadb.location.update({
      where: {
        id: params.locationId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(location);
  } catch (error) {
    console.error({ error });
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { locationId: string } }
) {
  if (!params.locationId)
    return new NextResponse("location id is required", { status: 400 });

  try {
    const location = await prismadb.location.delete({
      where: {
        id: params.locationId,
      },
    });

    return NextResponse.json(location);
  } catch (error) {
    console.error({ error });
    return new NextResponse("Internal error", { status: 500 });
  }
}
