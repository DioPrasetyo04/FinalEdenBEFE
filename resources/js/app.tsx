import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { LanguageProvider } from "./context/LanguageContext";
import { ModeProvider } from "./context/LightDarkContext";
import { ModalProvider } from "./context/ModalContext";

const appName = import.meta.env.VITE_APP_NAME || "Eden";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx"),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <LanguageProvider>
                <ModeProvider>
                    <ModalProvider>
                        <App {...props} />
                    </ModalProvider>
                </ModeProvider>
            </LanguageProvider>,
        );
    },
});
