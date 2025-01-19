<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", [PageController::class, "direct"])->name("direct");

Route::middleware("guest")->group(function () {
    Route::get("/login", [AuthController::class, "login"])->name("login");
    Route::post("/login", [AuthController::class, "loginPost"])->name("login.post");
});

Route::middleware("auth")->group(function () {
    Route::prefix("student")->name("student.")->group(function () {
        Route::get("/dashboard", [StudentController::class, "dashboard"])->name("dashboard");
    });

    Route::get("/logout", [AuthController::class, "logout"])->name("logout");
});
