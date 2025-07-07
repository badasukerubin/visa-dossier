import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Master from "./layouts/Master";

const Home = lazy(() => import("./views/Home"));
// const NotFound = React.lazy(() => import("./views/NotFound"));

export function App() {
    const [transitionName, setTransitionName] = useState("anime");

    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<Master />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<></>} />
                </Route>
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Suspense>
    );
}
