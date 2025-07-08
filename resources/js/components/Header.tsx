import { useAuth } from "@/Provider/AuthProvider";
import { logout } from "@/routes";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
    const { authenticated, setAuthenticated } = useAuth();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const handleLogout = async () => {
        try {
            await axios.post(logout.url());
            setAuthenticated(false);

            queryClient.invalidateQueries({
                queryKey: ["auth-user"],
            });

            navigate("/login", {
                state: { message: "Logged out successfully.", type: "success" },
            });
        } catch (error) {}
    };

    return (
        <header className="w-full bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                    VisaDossier
                </span>

                <div className="space-x-4">
                    {authenticated ? (
                        <button
                            onClick={handleLogout}
                            className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
                        >
                            Log Out
                        </button>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600 font-medium"
                                }
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600 font-medium"
                                }
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
