<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function dashboard()
    {
        return Inertia::render("Student/Dashboard", [
            "title" => "Dashboard Siswa",
        ]);
    }
}
