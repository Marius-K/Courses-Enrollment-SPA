<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function user()
    {
        $user = auth()->user();

        return response()->json($user);
    }
}
