import toast from "react-hot-toast";
import { Check } from "lucide-react";

export const notification = (message: string) => {
  return toast.custom(
    <div className="px-6 py-4 text-white rounded-md shadow-lg flex items-center gpp-5 z-10 bg-green-700">
      <Check className="mr-5" />
      {message}
    </div>
  );
};
