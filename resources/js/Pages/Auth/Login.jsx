import { showNotification } from "@/Helper/Helper";
import AuthFooter from "@/Partials/Auth/AuthFooter";
import AuthForm from "@/Partials/Auth/AuthForm";
import AuthLogo from "@/Partials/Auth/AuthLogo";
import AuthVector from "@/Partials/Auth/AuthVector";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function Login({ title }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post(route("login.post"), {
            onFinish: () => reset("password"),
        });
    };

    const { notification } = usePage().props;
    useEffect(() => {
        if (notification) {
            showNotification(notification);
        }
    }, [notification]);

    return (
        <div className="bg-[#F8E1B7] bg-opacity-40 w-full h-screen">
            <Head title={title} />
            <AuthLogo />

            <div className="px-[200px] h-[70vh] flex items-center gap-20">
                <AuthForm
                    data={data}
                    handleLogin={handleLogin}
                    processing={processing}
                    setData={setData}
                    errors={errors}
                />
                <AuthVector />
            </div>

            <AuthFooter />
        </div>
    );
}

export default Login;
