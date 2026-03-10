import { LanguageContextType } from "@/types/language";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState("ID");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
