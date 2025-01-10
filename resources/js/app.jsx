import "../css/app.css";
import "./bootstrap";
import "flowbite";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";

const appName = "SIAKADWIPA";
// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        initFlowbite();
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: "#5c3d14",
    },
});
