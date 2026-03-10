import { ModeContext } from "@/context/LightDarkContext";
import { useContext } from "react";

export const useTheme = () => {
    const context = useContext(ModeContext);

    if (!context) {
        throw new Error("Use Theme must be used inside ThemeProvider");
    }

    const { darkMode, setDarkMode } = context;

    return { darkMode, setDarkMode };
};
