import Image from "next/image";
import { Trash } from "lucide-react";
import useCart from "@/zustand/useCart";
import { OrderProduct } from "@/types";
import { CounterButton } from "@/components/counter-button";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  data: OrderProduct;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b flex-col md:flex-row">
      <div className="relative md:h-24 md:w-24 w-full rounded-md overflow-hidden h-48">
        <Image
          fill
          src={data.imageSrc}
          alt=""
          className="object-cover md:object-center !object-[center_top]"
        />
      </div>
      <div className="relative md:ml-4 mt-4 md:mt-0 flex flex-1 flex-col justify-between">
        <div className="absolute z-10 right-0 top-0">
          <Button onClick={onRemove} variant="ghost">
            <Trash size={20} />
          </Button>
        </div>
        <div className="relative pr-9 flex flex-col gap-5">
          <div className="flex justify-between max-w-[80%]">
            <p className=" text-md font-medium text-black">{data.name}</p>
          </div>

          <div className="flex gap-20 items-center">
            <CounterButton
              quantity={data.quantity}
              increase={() => cart.increaseQuantity(data)}
              decrease={() => cart.decreaseQuantity(data)}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
