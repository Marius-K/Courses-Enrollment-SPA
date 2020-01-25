<?php

namespace App\Http\Controllers\Api\V1;

use App\Course;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\EnrollmentResource;
use App\Http\Resources\Admin\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EnrollmentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required|integer'
        ]);

        $course = Course::find($request->input('course_id'));

        if(auth()->guest())
        {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed'
            ]);

            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);

            auth()->login($user);
        }

        $user = auth()->user();

        $course->enrollments()->create(['user_id' => $user->id]);

        return new UserResource($user);
    }

    public function myCourses()
    {
        $userEnrollments = auth()->user()
            ->enrollments()
            ->with(['course.institution', 'course.disciplines'])
            ->orderBy('id', 'desc')
            ->paginate(6);

        return new EnrollmentResource($userEnrollments);
    }
}
