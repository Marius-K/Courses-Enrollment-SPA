<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserResource;

class UserController extends Controller
{
    public function user()
    {
        $user = auth()->user();

        return new UserResource($user);
    }
}
