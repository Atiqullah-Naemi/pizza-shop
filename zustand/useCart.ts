import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { OrderProduct } from "@/types";
import { notification } from "@/utils/notificatin";

interface CartStore {
  items: OrderProduct[];
  addItem: (data: OrderProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  increaseQuantity: (data: OrderProduct) => void;
  decreaseQuantity: (data: OrderProduct) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: OrderProduct) => {
        set({ items: [...get().items, data] });
        notification("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        notification("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
      increaseQuantity: (data: OrderProduct) => {
        const currentItems = get().items;

        const updates = currentItems.map((item) => {
          return {
            ...item,
            quantity: data.id === item.id ? item.quantity + 1 : item.quantity,
          };
        });

        set({ items: updates });
      },
      decreaseQuantity: (data: OrderProduct) => {
        const currentItems = get().items;
        const updates = currentItems.map((item) => {
          return {
            ...item,
            quantity: data.id === item.id ? item.quantity - 1 : item.quantity,
          };
        });

        set({ items: updates });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
