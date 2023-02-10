<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\LearnedWordController;
use App\Http\Controllers\ScoreController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\TakenCategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// ADMIN ROUTE
Route::post('admin/login', [AdminController::class, 'login']);

// Admin resource controller routes
Route::middleware(['auth:sanctum', 'abilities:admin'])->prefix('admin')->group(function () {
    Route::resource('categories', CategoryController::class)->names([
        'index' => 'admin.categories.index',
        'show' => 'admin.categories.show',
    ]);

	Route::post('questions/{categoryId}', [QuestionController::class, 'store']);
	Route::get('logout', [AdminController::class, 'logout']);
});


// USER ROUTE
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

// User resource controller routes
Route::middleware(['auth:sanctum', 'abilities:user'])->group(function () {
    Route::resource('categories', CategoryController::class, ['only' => ['index', 'show']]);
    Route::resource('learned-word', LearnedWordController::class, ['only' => ['show', 'store']]);

    Route::post('totalscore', [ScoreController::class, 'calculateScore']);
    

    Route::controller(FollowController::class)->group(function () {
        Route::post('follow/{user}', 'follow');
        Route::delete('unfollow/{user}', 'unfollow');
    });
    
    Route::get('activities', [ActivityController::class, 'show']);
    Route::get('taken_category', [TakenCategoryController::class, 'isTaken']);

    
    Route::controller(UserController::class)->group(function () {
        Route::get('user', 'userDetails');
        Route::patch('logout', 'logout');
    });
});
