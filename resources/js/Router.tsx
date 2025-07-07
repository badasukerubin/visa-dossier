import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Master from "./layouts/Master";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = lazy(() => import("./views/Home"));
const Register = lazy(() => import("./views/Register"));
const Login = lazy(() => import("./views/Login"));
const NotFound = React.lazy(() => import("./views/NotFound"));

export function App() {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<Master />}>
                    <Route element={<ProtectedRoute />}>
                        <Route index element={<Home />} />
                    </Route>

                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
