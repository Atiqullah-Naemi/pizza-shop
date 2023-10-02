"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import useCart from "@/zustand/useCart";
import { Button } from "./ui/button";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    const item = {
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: 1,
      imageSrc: data.imageSrc,
      ingredients: data.ingredients,
    };

    cart.addItem(item);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl shadow-md w-64"
      data-testid="product-card"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.imageSrc}
          alt={data.name}
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="w-full flex justify-between flex-col px-2 py-5">
          <p className="text-sm text-neutral-950">{data.name}</p>

          <div className="flex items-center justify-between px-5 pb-5">
            ${data?.price}
          </div>
        </div>

        <Button
          onClick={onAddToCart}
          variant="ghost"
          data-testid="basket-button"
        >
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
