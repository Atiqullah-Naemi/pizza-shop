import { create } from "zustand";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useModal = create<ModalProps>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));

export default useModal;
