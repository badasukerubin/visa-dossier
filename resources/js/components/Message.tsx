import React from "react";
import { MessageProps } from "./types";

const typeStyles: Record<string, string> = {
    success: "text-green-700 bg-green-100",
    error: "text-red-700 bg-red-100",
    warning: "text-yellow-700 bg-yellow-100",
    info: "text-blue-700 bg-blue-100",
};

const Message = ({ message, type }: MessageProps) => {
    if (!message || !type) {
        return null;
    }

    return (
        <div
            className={`mb-4 px-4 py-2 rounded ${typeStyles[type] || typeStyles.success}`}
        >
            {message}
        </div>
    );
};
export default Message;
