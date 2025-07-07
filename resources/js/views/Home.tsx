import React from "react";
import { Category, Inputs } from "./types";
import { useForm } from "@tanstack/react-form";
import Field from "@/components/Form/Validation/Field";

const Home = () => {
    const defaultValues: Inputs = {
        dossier_name: "",
        dossier_file_upload: null,
        category: Category.General,
    };

    const form = useForm({
        defaultValues,
        onSubmit: async ({ value }) => {
            console.log(JSON.stringify(value, null, 2));
        },
    });

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-6 text-blue-600">
                Upload Dossier File
            </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-5"
            >
                <form.Field
                    name="dossier_name"
                    validators={{
                        onChange: ({ value }) =>
                            !value
                                ? "Dossier name is required"
                                : value.length > 255
                                  ? "Dossier name cannot exceed 255 characters"
                                  : undefined,
                    }}
                    children={(field) => (
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor={field.name}
                            >
                                Dossier Name
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
                            <Field field={field} />
                        </div>
                    )}
                />

                <form.Field
                    name="dossier_file_upload"
                    validators={{
                        onChange: ({ value }) =>
                            !value
                                ? "File is required"
                                : value.size > 4 * 1024 * 1024
                                  ? "File size must be less than 4MB"
                                  : ![
                                          "image/png",
                                          "image/jpeg",
                                          "application/pdf",
                                      ].includes(value.type)
                                    ? "Only PDF, PNG, and JPG files are allowed"
                                    : undefined,
                    }}
                    children={(field) => (
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor={field.name}
                            >
                                File (PDF, PNG, JPG, max 4MB)
                            </label>
                            <input
                                id={field.name}
                                type="file"
                                accept=".pdf,.png,.jpg"
                                className="w-full px-3 py-2"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    field.handleChange(file as File);
                                }}
                            />
                            <Field field={field} />
                        </div>
                    )}
                />

                <form.Field
                    name="category"
                    validators={{
                        onChange: ({ value }) =>
                            !value ? "Category is required" : undefined,
                    }}
                    children={(field) => (
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor={field.name}
                            >
                                Category
                            </label>
                            <select
                                id={field.name}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(
                                        e.target.value as Category,
                                    )
                                }
                            >
                                <option value="">Select category</option>
                                {Object.values(Category).map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat
                                            .replace(/-/g, " ")
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, (str) =>
                                                str.toUpperCase(),
                                            )}
                                    </option>
                                ))}
                            </select>
                            <Field field={field} />
                        </div>
                    )}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    disabled={form.state.isSubmitting}
                >
                    {form.state.isSubmitting ? "Uploading..." : "Upload"}
                </button>
            </form>
        </div>
    );
};

export default Home;
