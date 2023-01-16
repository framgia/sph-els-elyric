<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// ADMIN ROUTE
Route::post('admin/login', [AdminController::class, 'login']);

Route::middleware(['auth:sanctum', 'abilities:admin'])->prefix('admin')->group(function () {
	Route::get('details', [AdminController::class, 'userDetails']);
	Route::get('logout', [AdminController::class, 'logout']);
});
 
// USER ROUTE
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::middleware(['auth:sanctum', 'abilities:user'])->group(function () {
	Route::get('details', [UserController::class, 'userDetails']);
	Route::get('logout', [UserController::class, 'logout']);
});
Route::post('register', [UserController::class, 'register']);
