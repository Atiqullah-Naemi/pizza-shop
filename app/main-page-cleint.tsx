"use client";

import { Label } from "@/components/ui/label";
import { Location } from "@prisma/client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useModal from "@/zustand/useModal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface MainPageProps {
  locations: Location[];
}

export const MainPageClient: React.FC<MainPageProps> = ({ locations }) => {
  const { open, setOpen } = useModal();
  const router = useRouter();

  useEffect(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <>
      <div className="w-full flex flex-row h-[50px] justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <Label className="text-lg">Pizzas</Label>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Choose a location</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col my-5">
                  {locations.map((l) => (
                    <div
                      key={l.id}
                      className="flex w-full p-5 my-5 bg-neutral-200 rounded-md cursor-pointer"
                      onClick={() => {
                        localStorage.setItem("storeId", l.id);
                        setOpen(false);
                        router.push(`/store/query?id=${l.id}`);
                      }}
                    >
                      {l.name}
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};
