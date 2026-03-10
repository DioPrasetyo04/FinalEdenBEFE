import { ModalContextType } from "@/types/ModalContext";
import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext<ModalContextType | undefined>(
    undefined,
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [orderFormOpen, setOrderFormOpen] = useState(false);
    const [coffinDetailOpen, setCoffinDetailOpen] = useState(false);
    const [selectedCoffin, setSelectedCoffin] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [serviceDetailOpen, setServiceDetailOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    return (
        <ModalContext.Provider
            value={{
                orderFormOpen,
                setOrderFormOpen,
                serviceDetailOpen,
                setServiceDetailOpen,
                coffinDetailOpen,
                setCoffinDetailOpen,
                selectedItem,
                setSelectedItem,
                selectedService,
                setSelectedService,
                selectedCoffin,
                setSelectedCoffin,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
