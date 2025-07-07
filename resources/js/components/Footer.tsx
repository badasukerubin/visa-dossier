import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-white mt-auto border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-3 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} VisaDossier. All rights
                reserved.
            </div>
        </footer>
    );
};

export default Footer;
