import HomeClient from "./HomeClient";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <HomeClient>
      <FeaturedProducts />
    </HomeClient>
  );
}
