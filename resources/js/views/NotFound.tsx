import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">404</h1>
            <p className="text-lg text-gray-700 mb-2">Page Not Found</p>
            <p className="text-gray-500 mb-6">
                Sorry, the page you are looking for does not exist.
            </p>
            <a
                href="/"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Go Home
            </a>
        </div>
    );
};

export default NotFound;
