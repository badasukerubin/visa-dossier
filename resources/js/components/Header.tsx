import React from "react";

const Header = () => {
    return (
        <header className="w-full bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                    VisaDossier
                </span>

                <div className="space-x-4">
                    <a
                        href="/login"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Login
                    </a>
                    <a
                        href="/register"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Register
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
