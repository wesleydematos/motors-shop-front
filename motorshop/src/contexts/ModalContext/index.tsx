import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

interface iModalContext {
  isOpenLogin: boolean;
  onOpenLogin: () => void;
  onCloseLogin: () => void;
}

interface iModalContextProps {
  children: React.ReactNode;
}

export const ContextModal = createContext<iModalContext>({} as iModalContext);

export const ModalProvider = ({
  children,
}: iModalContextProps) => {


  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  return (
    <ContextModal.Provider
      value={{
        isOpenLogin,
        onOpenLogin,
        onCloseLogin,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
};
