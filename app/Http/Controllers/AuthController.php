<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render("Auth/Login", [
            "title" => "Login",
        ]);
    }

    public function loginPost(Request $request)
    {
        $request->validate([
            "username" => "required",
            "password" => "required",
        ], [
            "username.required" => "Nama Pengguna harus diisi",
            "password.required" => "Kata Sandi harus diisi",
        ]);

        if (Auth::attempt($request->only("username", "password"))) {
            $userRole = Auth::user()->role;
            if ($userRole == "student") {
                return redirect()->route("student.dashboard");
            } else if ($userRole == "teacher") {
            } else {
            }
        } else {
            return back()->with("notification", [
                "title" => "Login Gagal",
                "text" => "Username atau password salah",
                "icon" => "error",
            ]);
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route("login");
    }
}
