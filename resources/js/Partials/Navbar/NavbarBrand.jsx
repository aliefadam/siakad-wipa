import React from "react";

function NavbarBrand() {
    return (
        <div className="flex items-center gap-2">
            <img src="/imgs/logo.png" className="w-[40px] h-[40px]" alt="" />
            <p className="poppins-semibold text-xl text-white drop-shadow-md">
                SIAKADWIPA
            </p>
        </div>
    );
}

export default NavbarBrand;
