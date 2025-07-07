import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Master = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Suspense fallback={<></>}>
                <Header />
            </Suspense>
            <main className="flex-1">
                <section className="container mx-auto px-4 py-8">
                    <Outlet />
                </section>
            </main>
            <Suspense fallback={<></>}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Master;
