import React from "react";
import { ListDossiersProps } from "./types";
import { formatCategory } from "@/helper";

const ListDossiers = ({ dossiers }: ListDossiersProps) => {
    return (
        <div className="space-y-8">
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

                                                        <a
                                                            href={`/storage/${file.file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 text-sm hover:underline"
                                                        >
                                                            Download
                                                        </a>

                                                        <button
                                                            className="text-red-600 text-sm ml-2 hover:underline cursor-pointer"
                                                            onClick={() => {
                                                                console.log(
                                                                    `Delete file: ${file.file_name}`,
                                                                );
                                                            }}
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
                                                onChange={(e) => {
                                                    if (e.target.files) {
                                                        const file =
                                                            e.target.files[0];
                                                        console.log(
                                                            `Upload file: ${file.name} for category: ${category}`,
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
