import { Controller } from "react-hook-form";
import Select from "react-select";

export type SelectInputValues = {
  label: string;
  value: string;
};

interface SelectInputProps {
  fieldLabel: string;
  name: string;
  defaultValue?: SelectInputValues;
  control?: any;
  options?: SelectInputValues[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  fieldLabel,
  control,
  options,
  name,
  defaultValue,
}) => {
  return (
    <div className="w-full my-2">
      <label
        htmlFor={fieldLabel}
        className="flex text-lg text-neutral-800 mb-1 dark:text-white"
      >
        {fieldLabel}
      </label>

      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            components={{ IndicatorSeparator: () => null }}
            isClearable
            defaultValue={defaultValue}
            formatOptionLabel={({ label }) => {
              return (
                <div
                  className="
                  flex
                  flex-row
                  item-center
                  w-fit 
                  border-dashed
                  p-1
                  px-5
                  rounded-md
                "
                >
                  {label}
                </div>
              );
            }}
            classNames={{
              control: () => "border-2",
              input: () => "text-lg",
              option: (state) => `text-lg z-10`,
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 6,
              colors: {
                ...theme.colors,
                primary: "black",
                primary25: "gold",
              },
            })}
          />
        )}
      />
    </div>
  );
};

export default SelectInput;
