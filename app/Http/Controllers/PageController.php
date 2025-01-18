<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function direct()
    {
        return redirect()->route("student.dashboard");
    }
}
