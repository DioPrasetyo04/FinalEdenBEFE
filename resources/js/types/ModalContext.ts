export interface ModalContextType {
    orderFormOpen: boolean;
    setOrderFormOpen: (value: boolean) => void;
    serviceDetailOpen: boolean;
    setServiceDetailOpen: (value: boolean) => void;
    coffinDetailOpen: boolean;
    setCoffinDetailOpen: (value: boolean) => void;
    selectedItem: string;
    setSelectedItem: (value: string) => void;
    selectedService: string;
    setSelectedService: (value: string) => void;
    selectedCoffin: string;
    setSelectedCoffin: (value: string) => void;
}
