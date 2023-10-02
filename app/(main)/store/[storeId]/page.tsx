import prismadb from "@/lib/prismadb";
import Container from "@/components/container";
import ProductList from "@/components/product-list";

interface StorePageProps {
  searchParams: {
    id: string;
  };
}

const StoreLocations: React.FC<StorePageProps> = async ({ searchParams }) => {
  const pizzas = await prismadb.pizza.findMany({
    where: { locationId: searchParams.id },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedPizzas = pizzas.map((p) => {
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      imageSrc: p.imageSrc,
      ingredients: p.ingredients,
    };
  });

  return (
    <Container>
      <ProductList items={formattedPizzas} />
    </Container>
  );
};

export default StoreLocations;
