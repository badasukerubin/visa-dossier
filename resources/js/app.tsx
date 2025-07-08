import "./bootstrap";

import "../css/app.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./Router";
import { AuthProvider } from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const documentRoot = document.getElementById("app") as HTMLElement;
const root = createRoot(documentRoot);
const queryClient = new QueryClient();

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryClientProvider>
    </BrowserRouter>,
);
