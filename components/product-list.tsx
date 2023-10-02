import ProductCard from "@/components/product-card";
import { Product } from "@/types";
import NoResults from "@/components/no-results";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4" data-testid="product-list">
      {items.length === 0 && <NoResults />}
      <div className="flex w-full my-5 gap-8 flex-wrap">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
