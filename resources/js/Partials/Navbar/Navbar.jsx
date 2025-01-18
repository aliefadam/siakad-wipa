import { Link } from "@inertiajs/react";
import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-primary py-4 px-7 z-50 fixed top-0 left-0 w-full">
            <NavbarBrand />
            <NavbarMenu />
        </nav>
    );
}

export default Navbar;
