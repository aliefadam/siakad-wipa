import Footer from "@/Partials/Footer/Footer";
import Navbar from "@/Partials/Navbar/Navbar";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function StudentLayout({ title, children }) {
    return (
        <div className="mt-14">
            <Head title={title} />
            <Navbar />
            <div className="py-12 px-7">{children}</div>
            <Footer />
        </div>
    );
}

export default StudentLayout;
