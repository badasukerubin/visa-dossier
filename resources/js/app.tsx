import "./bootstrap";

import "../css/app.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./Router";
import { AuthProvider } from "./Provider/AuthProvider";

const documentRoot = document.getElementById("app") as HTMLElement;
const root = createRoot(documentRoot);

root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>,
);
