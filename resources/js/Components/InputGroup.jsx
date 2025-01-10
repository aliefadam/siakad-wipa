import React from "react";

function InputGroup({ label, id, type, value, onChange, error }) {
    const errorClass = () => {
        if (error) {
            return "border border-red-700 focus:ring-red-600 focus:border-red-600";
        } else {
            return "border border-primary text-gray-900 focus:ring-primary focus:border-primary";
        }
    };

    return (
        <>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-primary dark:text-white"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className={`bg-gray-50 block w-full text-sm rounded-lg px-2.5 py-3 ${errorClass()}`}
                required=""
            />
            {error && (
                <div className="mt-2">
                    <span className="text-sm text-red-700">{error}</span>
                </div>
            )}
        </>
    );
}

export default InputGroup;
