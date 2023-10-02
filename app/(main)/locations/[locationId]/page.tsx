import Container from "@/components/container";
import LocationForm from "../client/location-form";
import prismadb from "@/lib/prismadb";

const LocationPage = async ({ params }: { params: { locationId: string } }) => {
  const location = await prismadb.location.findUnique({
    where: {
      id: params.locationId,
    },
  });

  return (
    <Container>
      <LocationForm initialData={location} />
    </Container>
  );
};

export default LocationPage;
