import React from "react";
import { useForm } from "@tanstack/react-form";
import { store } from "@/actions/Laravel/Fortify/Http/Controllers/RegisteredUserController";
import axios from "axios";
import { useNavigate } from "react-router";
import { show } from "@/actions/Laravel/Sanctum/Http/Controllers/CsrfCookieController";

const Register = () => {
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
        onSubmit: async ({ value }) => {
            try {
                await axios.get(show().url);
                await axios.post(store().url, value, {
                    headers: { "Content-Type": "application/json" },
                });

                form.reset();

                navigate("/login", {
                    state: {
                        message: "Registration successful! Please log in.",
                        type: "success",
                    },
                });
            } catch (error: any) {
                navigate("/register", {
                    state: {
                        message:
                            error.response?.data?.message ||
                            "Registration failed.",
                        type: "error",
                    },
                });

                console.error("Registration failed:", error);
            }
        },
    });

    return (
        <div className="max-w-md mx-auto border-gray-100 border-1 p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-6 text-blue-600">Register</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-5"
            >
                <form.Field
                    name="name"
                    children={(field) => (
                        <div>
                            <label
                                className="block text-sm font-black mb-1"
                                htmlFor={field.name}
                            >
                                Name
                            </label>
                            <input
                                id={field.name}
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                            {field.state.meta.errors?.length > 0 && (
                                <p className="text-red-500 text-xs mt-1">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />

                <form.Field
                    name="email"
                    children={(field) => (
                        <div>
                            <label
                                className="block text-sm font-black mb-1"
                                htmlFor={field.name}
                            >
                                Email
                            </label>
                            <input
                                id={field.name}
                                type="email"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                            {field.state.meta.errors?.length > 0 && (
                                <p className="text-red-500 text-xs mt-1">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />

                <form.Field
                    name="password"
                    children={(field) => (
                        <div>
                            <label
                                className="block text-sm font-black mb-1"
                                htmlFor={field.name}
                            >
                                Password
                            </label>
                            <input
                                id={field.name}
                                type="password"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                            {field.state.meta.errors?.length > 0 && (
                                <p className="text-red-500 text-xs mt-1">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />

                <form.Field
                    name="password_confirmation"
                    children={(field) => (
                        <div>
                            <label
                                className="block text-sm font-black mb-1"
                                htmlFor={field.name}
                            >
                                Confirm Password
                            </label>
                            <input
                                id={field.name}
                                type="password"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                            {field.state.meta.errors?.length > 0 && (
                                <p className="text-red-500 text-xs mt-1">
                                    {field.state.meta.errors[0]}
                                </p>
                            )}
                        </div>
                    )}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    disabled={form.state.isSubmitting}
                >
                    {form.state.isSubmitting ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default Register;
