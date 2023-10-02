"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { LocationColumns, columns } from "./columns";
import { Plus } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LocationForm from "./location-form";
import useModal from "@/zustand/useModal";

interface LocationProps {
  data: LocationColumns[];
}

export const LocationClient: React.FC<LocationProps> = ({ data }) => {
  const { open, setOpen } = useModal();

  return (
    <>
      <div className="w-full flex flex-row h-[50px] justify-between">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between">
            <Label className="text-lg">Locations</Label>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus size={20} className="mr-2" /> Create new Location
                </Button>
              </DialogTrigger>
              <DialogContent>
                <LocationForm initialData={null} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={data} searchKey="title" />
    </>
  );
};
