import { useState } from "react";

export default function useModel(props) {
  const [isOpen, setIsOpen] = useState(props);
  const openModel = (data) => setIsOpen(data);
  const closeModel = (data) => setIsOpen(data);

  return {
    isOpen,
    openModel,
    closeModel,
  };
}
