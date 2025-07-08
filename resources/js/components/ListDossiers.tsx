import React from "react";
import { ListDossiersProps } from "./types";
import { formatCategory } from "@/helper";
import { NavLink, useNavigate } from "react-router";
import { Category } from "@/views/types";
import axios from "axios";
import DossierFileUploadController from "@/actions/App/Http/Controllers/API/V1/DossierFileUploadController";
import DossierFileDeleteController from "@/actions/App/Http/Controllers/API/V1/DossierFileDeleteController";
import { useQueryClient } from "@tanstack/react-query";

const ListDossiers = ({ dossiers }: ListDossiersProps) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const handleUpload = async (
        file: File,
        dossierName: string,
        category: Category,
    ) => {
        const formData = new FormData();
        formData.append("dossier_name", dossierName);
        formData.append("dossier_file_upload", file);
        formData.append("category", category);

        try {
            await axios.post(DossierFileUploadController.post().url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            navigate("/", {
                state: {
                    message: "File uploaded successfully!",
                    type: "success",
                },
            });

            queryClient.invalidateQueries({
                queryKey: ["dossiers"],
            });
        } catch (error: any) {
            navigate("/", {
                state: {
                    message:
                        error.response?.data?.message || "File upload failed.",
                    type: "error",
                },
            });

            console.error("Upload failed:", error);
        }
    };

    const handleDelete = async (fileId: number) => {
        try {
            await axios.delete(DossierFileDeleteController.delete(fileId).url);

            queryClient.invalidateQueries({
                queryKey: ["dossiers"],
            });

            navigate("/", {
                state: {
                    message: "File deleted successfully!",
                    type: "success",
                },
            });
        } catch (error: any) {
            console.error("Delete failed:", error);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-end">
                <span className="text-blue-600">
                    <NavLink
                        to="/create-dossier"
                        className="underline hover:text-blue-700"
                    >
                        Create a new dossier
                    </NavLink>
                </span>
            </div>

            {dossiers.map((dossier) => (
                <div key={dossier.id}>
                    <p className="font-bold mb-3">{dossier.name}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(dossier.files).length ? (
                            Object.entries(dossier.files).map(
                                ([category, files]) => (
                                    <div
                                        key={category}
                                        className="mb-6 border-gray-100 border-1 rounded-lg shadow p-4 w-96 flex flex-col"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-sm font-bold mb-2">
                                                {formatCategory(category)}
                                            </p>

                                            <span className="inline-block bg-gray-100 border-1 border-gray-200 text-gray-700 text-xs px-2 py-1 rounded ml-auto">
                                                {files.length} file
                                                {files.length > 1 && "s"}{" "}
                                            </span>
                                        </div>

                                        {files.length ? (
                                            <ul className="mb-2">
                                                {files.map((file) => (
                                                    <li
                                                        key={file.id}
                                                        className="mb-2 bg-gray-100 p-2 rounded-lg"
                                                    >
                                                        <div className="font-semibold text-xs text-gray-800">
                                                            {file.file_name}
                                                        </div>

                                                        <button
                                                            className="text-red-600 text-sm hover:underline cursor-pointer"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    file.id,
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="text-gray-400 italic">
                                                No files
                                            </div>
                                        )}

                                        <div className="mt-auto pt-4">
                                            <label
                                                htmlFor={`upload-${dossier.id}-${category}`}
                                                className="cursor-pointer text-green-600 font-bold text-sm hover:underline"
                                            >
                                                Click to upload
                                            </label>
                                            <input
                                                type="file"
                                                id={`upload-${dossier.id}-${category}`}
                                                className="hidden"
                                                accept=".pdf,.png,.jpg"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files?.[0];
                                                    if (file) {
                                                        handleUpload(
                                                            file,
                                                            dossier.name,
                                                            category as Category,
                                                        );
                                                    }
                                                }}
                                            />
                                            <p className="text-xs">
                                                PDF, PNG, JPG, (max. 4MB)
                                            </p>
                                        </div>
                                    </div>
                                ),
                            )
                        ) : (
                            <div className="text-gray-400 italic">No files</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListDossiers;
