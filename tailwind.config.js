import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        "./resources/js/Styles/**/*.ts",
    ],

    darkMode: "class",

    theme: {
        extend: {},
    },

    plugins: [forms, typography],
};
