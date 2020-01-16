<?php

namespace App\Http\Controllers\Api\V1;

use App\Course;
use App\Discipline;
use App\Institution;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        $newestCourses = Course::with('disciplines')->orderBy('id', 'desc')->take(3)->get();
        $randomInstitutions = Institution::inRandomOrder()->take(3)->get();

        return response()->json(compact('newestCourses', 'randomInstitutions'));
    }

    public function menu()
    {
        $menuDisciplines = Discipline::whereHas('courses')->get();
        $menuInstitutions = Institution::whereHas('courses')->get();

        return response()->json(compact('menuDisciplines', 'menuInstitutions'));
    }
}
