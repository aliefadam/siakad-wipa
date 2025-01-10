import React from "react";

function Button({ processing, extendClass = "" }) {
    return (
        <button
            type="submit"
            className={`text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary focus:ring-opacity-30 font-medium rounded-lg text-sm w-full sm:w-auto text-center duration-200 ${
                processing ? "opacity-50 cursor-not-allowed" : ""
            } ${extendClass}`}
        >
            Masuk
        </button>
    );
}

export default Button;
