import React from "react";
import { useModal } from "../useModal";

interface coffinDetailProps {
    setCoffinDetailOpen: (value: boolean) => void;
    setSelectedCoffin: (value: any) => void;
}

export const CoffinProductDetail = () => {
    const { setCoffinDetailOpen, setSelectedCoffin }: coffinDetailProps =
        useModal();

    const openCoffinDetail = (coffinId: string) => {
        setSelectedCoffin(coffinId);
        setCoffinDetailOpen(true);
    };

    return { openCoffinDetail };
};

export default CoffinProductDetail;
