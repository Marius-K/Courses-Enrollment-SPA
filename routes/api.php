<?php

Route::group(['as' => 'api.', 'namespace' => 'Api\V1'], function () {
    Route::get('home', 'HomeController@index')->name('home');
    Route::get('menu', 'HomeController@menu')->name('menu');
    
    Route::apiResource('courses', 'CourseController')->only(['index', 'show']);

    Route::group(['prefix' => 'v1', 'as' => 'admin.', 'namespace' => 'Admin', 'middleware' => ['auth:api']], function () {
        // Permissions
        Route::apiResource('permissions', 'PermissionsApiController');

        // Roles
        Route::apiResource('roles', 'RolesApiController');

        // Users
        Route::apiResource('users', 'UsersApiController');

        // Disciplines
        Route::apiResource('disciplines', 'DisciplinesApiController');

        // Institutions
        Route::post('institutions/media', 'InstitutionsApiController@storeMedia')->name('institutions.storeMedia');
        Route::apiResource('institutions', 'InstitutionsApiController');

        // Courses
        Route::post('courses/media', 'CoursesApiController@storeMedia')->name('courses.storeMedia');
        Route::apiResource('courses', 'CoursesApiController');

        // Enrollments
        Route::apiResource('enrollments', 'EnrollmentsApiController');
    });
});
