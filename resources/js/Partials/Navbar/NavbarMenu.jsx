import { Link } from "@inertiajs/react";
import React from "react";

function NavbarMenu() {
    return (
        <div className="flex items-center gap-7">
            <Link className="flex items-center gap-2 text-white hover:-translate-y-0.5 duration-300">
                <i className="fa-solid fa-home"></i>
                Beranda
            </Link>
            <Link className="flex items-center gap-2 text-white hover:-translate-y-0.5 duration-300">
                <i className="fa-solid fa-chart-line"></i>
                Laporan
            </Link>
            <Link className="flex items-center gap-2 text-white hover:-translate-y-0.5 duration-300">
                <i className="fa-sharp-duotone fa-solid fa-hundred-points"></i>
                Daftar Nilai
            </Link>
            <Link className="flex items-center gap-2 text-white hover:-translate-y-0.5 duration-300">
                <i className="fa-solid fa-user"></i>
                Profil
            </Link>
        </div>
    );
}

export default NavbarMenu;
