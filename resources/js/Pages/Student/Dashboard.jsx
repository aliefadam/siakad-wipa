import { liveClock } from "@/Helper/Helper";
import StudentLayout from "@/Layouts/StudentLayout";
import CourseItem from "@/Partials/Dashboard/CourseItem";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Dashboard({ title }) {
    const { user } = usePage().props.auth;
    const [live, setLive] = useState(liveClock());
    useEffect(() => {
        setInterval(() => {
            setLive(liveClock());
        }, 1000);
        console.log(title);
    }, [live]);

    return (
        <StudentLayout title={title}>
            <div className="grid grid-cols-12 gap-7">
                <div className="col-span-8 h-fit">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="bg-[#4DA1A9] text-white shadow-md rounded-md p-5 flex justify-between items-center">
                            <div className="">
                                <h1 className="poppins-semibold text-lg leading-none">
                                    {user.name}
                                </h1>
                                <span className="text-sm">XII MIPA II</span>
                            </div>
                            <i className="fa-solid fa-user text-lg"></i>
                        </div>
                        <div className="bg-[#FF748B] text-white shadow-md rounded-md p-5 flex justify-between items-center">
                            <div className="">
                                <h1 className="poppins-semibold text-lg leading-none">
                                    Wali Kelas
                                </h1>
                                <span className="text-sm">
                                    Bapak Sutrisno S.pd
                                </span>
                            </div>
                            <i className="fa-solid fa-chalkboard-user text-lg"></i>
                        </div>
                        <div className="bg-[#139e79] text-white shadow-md rounded-md p-5 flex justify-between items-center">
                            <div className="">
                                <h1 className="poppins-semibold text-lg leading-none">
                                    Mata Pelajaran
                                </h1>
                                <span className="text-sm">12</span>
                            </div>
                            <i className="fa-solid fa-book text-lg"></i>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h1 className="border-b border-primary poppins-semibold text-xl text-primary text-center py-4">
                            Daftar Mata Pelajaran
                        </h1>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-6">
                        <CourseItem
                            href={""}
                            name={"Bahasa Indonesia"}
                            teacher={"Ibu Sulistyowati S.Pd"}
                        />
                        <CourseItem
                            href={""}
                            name={"Matematika"}
                            teacher={"Ibu Sulistyowati S.Pd"}
                        />
                        <CourseItem
                            href={""}
                            name={"Bahasa Inggris"}
                            teacher={"Ibu Sulistyowati S.Pd"}
                        />
                        <CourseItem
                            href={""}
                            name={"Bahasa Inggris"}
                            teacher={"Ibu Sulistyowati S.Pd"}
                        />
                        <CourseItem
                            href={""}
                            name={"Bahasa Inggris"}
                            teacher={"Ibu Sulistyowati S.Pd"}
                        />
                        <CourseItem
                            href={""}
                            name={"Bahasa Inggris"}
                            teacher={"Ibu Sulistyowati S.Pd"}
                        />
                    </div>
                </div>
                <div className="col-span-4 rounded-md shadow-md border border-primary h-fit">
                    <h1 className="poppins-semibold text-white bg-secondary p-5 text-[16px] text-center">
                        {live} WIB
                    </h1>
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center text-sm text-green-600 poppins-semibold border-b border-primary p-5">
                            <span>Masuk</span>
                            <span>07.00 WIB</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-primary poppins-medium border-b border-primary p-5">
                            <span>Matematika</span>
                            <span>07.00 - 10.00 WIB</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-700 poppins-semibold border-b border-primary p-5">
                            <span>Istirahat 1</span>
                            <span>10.00 - 10.30 WIB</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-primary poppins-medium border-b border-primary p-5">
                            <span>Bahasa Indonesia</span>
                            <span>10.30 - 12.00 WIB</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-700 poppins-semibold border-b border-primary p-5">
                            <span>Istirahat 2</span>
                            <span>12.00 - 13.00 WIB</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-primary poppins-medium border-b border-primary p-5">
                            <span>Bahasa Inggris</span>
                            <span>13.00 - 15.00 WIB</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-red-600 poppins-semibold  p-5">
                            <span>Pulang</span>
                            <span>15.00 WIB</span>
                        </div>
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}

export default Dashboard;
