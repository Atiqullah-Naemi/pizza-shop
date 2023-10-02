import Container from "@/components/container";
import PizzaForm from "../client/pizza-form";
import prismadb from "@/lib/prismadb";

const LocationPage = async ({ params }: { params: { pizzaId: string } }) => {
  const pizza = await prismadb.pizza.findUnique({
    where: {
      id: params.pizzaId,
    },
  });

  const locations = await prismadb.location.findMany();

  return (
    <Container>
      <PizzaForm initialData={pizza} locations={locations} />
    </Container>
  );
};

export default LocationPage;
