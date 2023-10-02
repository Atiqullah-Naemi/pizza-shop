import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { PizzaClient } from "./client/pizza-client";
import Container from "@/components/container";

export default async function Home() {
  const pizzas = await prismadb.pizza.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      location: true,
    },
  });
  const locations = await prismadb.location.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedPizzas = pizzas.map((item) => {
    return {
      id: item.id,
      name: item.name,
      location: item.location.name,
      createdAt: format(item.createdAt, "MMMM do, yyyy").toString(),
    };
  });

  return (
    <Container>
      <PizzaClient data={formattedPizzas} locations={locations} />
    </Container>
  );
}
