import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/Provider/AuthProvider";

const ProtectedRoute = () => {
    const { loading, authenticated } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
