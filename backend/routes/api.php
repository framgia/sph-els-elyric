<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;

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
	Route::get('logout', [AdminController::class, 'logout']);
	Route::get('categories', [CategoryController::class, 'index']);
	Route::get('category/{categoryId}', [CategoryController::class, 'getCategoryDetails']);
	Route::post('categories/add', [CategoryController::class, 'store']);
	Route::get('categories/questions', [CategoryController::class, 'categoryQuestions']);
	Route::put('categories/{categoryId}/edit', [CategoryController::class, 'updateCategoryDetails']);
	Route::post('categories/{categoryId}/question/add', [QuestionController::class, 'addQuestionWithChoicesAndAnswer']);
});
 
// USER ROUTE
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::middleware(['auth:sanctum', 'abilities:user'])->group(function () {
	Route::get('logout', [UserController::class, 'logout']);
});
