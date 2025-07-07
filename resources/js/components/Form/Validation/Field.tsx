import { AnyFieldApi } from "@tanstack/react-form";
import React from "react";

const Field = ({ field }: { field: AnyFieldApi }) => {
    return (
        <>
            {field.state.meta.isTouched && !field.state.meta.isValid ? (
                <p className="text-red-500 mt-1 text-xs">
                    {field.state.meta.errors.join(", ")}
                </p>
            ) : null}
        </>
    );
};

export default Field;
