<?php

namespace App\Http\Controllers\Api\V1;

use App\Course;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\CourseResource;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with(['institution', 'disciplines'])
            ->searchResults()
            ->paginate(6);

        return new CourseResource($courses);
    }

    public function show(Course $course)
    {
        return new CourseResource($course->load(['institution', 'disciplines']));
    }
}
