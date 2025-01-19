import { Link } from "@inertiajs/react";
import React from "react";

function CourseItem({ name, teacher, href, srcImg }) {
    return (
        <Link
            href={href}
            className="border border-primary rounded-md shadow-md h-[300px] overflow-hidden hover:scale-[102%] duration-200"
        >
            <img
                src={srcImg}
                alt=""
                className="h-[230px] w-full object-cover border-b border-black"
            />
            <div className="p-4 h-[70px] bg-white flex flex-col gap-1 poppins-medium">
                <h1 className="text-[17px] poppins-medium poppins-semibold text-[#aa7024]">
                    {name}
                </h1>
                <span className="text-xs text-primary poppins-bold">
                    {teacher}
                </span>
            </div>
            {/* <div className="p-4 bg-[#FFCF9D]s bg-secondary bg-opacity-50 h-[70px] flex flex-col gap-1 poppins-medium">
                <h1 className="text-[17px] poppins-medium poppins-semibold text-[#aa7024]">
                    {name}
                </h1>
                <span className="text-xs text-primary poppins-bold">
                    {teacher}
                </span>
            </div> */}
        </Link>
    );
}

export default CourseItem;
