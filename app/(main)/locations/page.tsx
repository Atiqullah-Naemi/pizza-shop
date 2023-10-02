import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { LocationClient } from "./client/location-client";
import Container from "@/components/container";

export default async function Home() {
  const locations = await prismadb.location.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedLocations = locations.map((item) => {
    return {
      id: item.id,
      name: item.name,
      createdAt: format(item.createdAt, "MMMM do, yyyy").toString(),
    };
  });

  return (
    <Container>
      <LocationClient data={formattedLocations} />
    </Container>
  );
}
