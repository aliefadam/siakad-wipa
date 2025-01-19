import React from "react";

function AuthLogo() {
    return (
        <nav className="p-7 flex items-center gap-2">
            <img src="/imgs/logo.png" className="w-[60px]" alt="" />
            <p className="poppins-bold text-2xl text-[#CBA35C] drop-shadow-md">
                SIAKAD
                <span className="poppins-black text-[#754E1A]">WIPA</span>
            </p>
        </nav>
    );
}

export default AuthLogo;
