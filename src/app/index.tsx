import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import "./styles/index.css";

import {AppMantineProvider, MyQueryClientProvider} from "./providers";
import {AppLayout} from "@/shared/layouts";
import HomePage from "@/pages/HomePage/HomePage";
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppMantineProvider>
            <MyQueryClientProvider>
                <AppLayout>
                    <Toaster />
                    <HomePage />
                </AppLayout>
            </MyQueryClientProvider>
        </AppMantineProvider>
    </StrictMode>,
);
