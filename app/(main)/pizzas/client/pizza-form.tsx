"use client";

import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Location, Pizza } from "@prisma/client";
import useModal from "@/zustand/useModal";
import SelectInput from "@/components/ui/select-input";
import CreatableSelect from "react-select/creatable";

interface PizzaFormProps {
  initialData: Pizza | null;
  locations: Location[] | [];
}

const PizzaForm: React.FC<PizzaFormProps> = ({ initialData, locations }) => {
  const defaultValues = initialData
    ? initialData
    : {
        name: "",
        locationId: {},
        price: "",
        imageSrc: "",
        ingredients: [],
      };

  const { control, register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const { setOpen } = useModal();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    try {
      setLoading(true);
      const ingredients = data.ingredients.map((i: any) => ({
        label: i.label,
        value: i.value,
      }));

      if (initialData) {
        await axios.patch(`/api/pizzas/${initialData.id}`, {
          ...data,
          ingredients,
          locationId: data.locationId.value,
        });

        router.refresh();
        router.push("/pizzas");
      } else {
        await axios.post("/api/pizzas", {
          ...data,
          ingredients,
          locationId: data.locationId.value,
        });
        router.refresh();
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const buttonLoadingText = initialData ? "Upadating..." : "Creating...";
  const buttonText = initialData ? "Upadate" : "Create";

  return (
    <form
      className="flex flex-col w-full p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full py-5">
        <h3 className="text-2xl font-semibold">
          {initialData ? "Update Pizza" : "Create new Pizza"}
        </h3>
      </div>

      <div className="w-full py-5">
        <Input placeholder="name" {...register("name")} />
      </div>

      <div className="w-full py-5">
        <SelectInput
          name="locationId"
          control={control}
          fieldLabel="Location"
          options={locations.map((l) => ({ label: l.name, value: l.id }))}
        />
      </div>
      <div className="w-full py-5">
        <Input placeholder="price" {...register("price")} />
      </div>
      <div className="w-full py-5">
        <Input placeholder="Image Url" {...register("imageSrc")} />
      </div>

      <div className="w-full py-5">
        <Controller
          control={control}
          name="ingredients"
          render={({ field }) => (
            <CreatableSelect
              {...field}
              isMulti
              options={[]}
              components={{ IndicatorSeparator: () => null }}
            />
          )}
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? buttonLoadingText : buttonText}
      </Button>
    </form>
  );
};

export default PizzaForm;
