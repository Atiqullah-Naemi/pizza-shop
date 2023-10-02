"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { PizzaColumns, columns } from "./columns";
import { Plus } from "lucide-react";
import { Location } from "@prisma/client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PizzaForm from "./pizza-form";
import useModal from "@/zustand/useModal";

interface PizzaProps {
  data: PizzaColumns[];
  locations: Location[];
}

export const PizzaClient: React.FC<PizzaProps> = ({ data, locations }) => {
  const { open, setOpen } = useModal();

  return (
    <>
      <div className="w-full flex flex-row h-[50px] justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <Label className="text-lg">Pizzas</Label>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus size={20} className="mr-2" /> Create new Pizza
                </Button>
              </DialogTrigger>
              <DialogContent>
                <PizzaForm initialData={null} locations={locations} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  );
};
