import prismadb from "@/lib/prismadb";
import { MainPageClient } from "./main-page-cleint";

export default async function Home() {
  const locations = await prismadb.location.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <MainPageClient locations={locations} />
    </>
  );
}
