import Button from "@/Components/Button";
import InputGroup from "@/Components/InputGroup";
import React from "react";

function AuthForm({ handleLogin, processing, setData, data, errors }) {
    return (
        <div className="flex-[1]">
            <h1 className="text-primary poppins-semibold text-2xl">
                Silahkan Login ke akun anda
            </h1>
            <form className="w-full mt-8" onSubmit={handleLogin}>
                <div className="mb-3">
                    <InputGroup
                        value={data.username}
                        id={"username"}
                        label={"Nama Pengguna"}
                        type={"text"}
                        onChange={(e) => setData("username", e.target.value)}
                        error={errors.username}
                    />
                </div>
                <div className="mb-5">
                    <InputGroup
                        value={data.password}
                        id={"password"}
                        label={"Kata Sandi"}
                        type={"password"}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                    />
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-secondary poppins-medium">
                        *untuk lupa password silahkan hubungi admin
                    </span>
                    <Button extendClass="px-10 py-3" processing={processing} />
                </div>
            </form>
        </div>
    );
}

export default AuthForm;
