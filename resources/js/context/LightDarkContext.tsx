import { ModeContextType } from "@/types/mode";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export const ModeContext = createContext<ModeContextType | undefined>(
    undefined,
);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <ModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ModeContext.Provider>
    );
};
