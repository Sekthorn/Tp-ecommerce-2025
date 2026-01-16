<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(CategoryController::class)->prefix('categories')->group(function () {
    Route::get('/', 'categories'); // Get all categories
    Route::post('/', 'createCategory');
    Route::get('/{categoryId}','getCategory');
    Route::patch('/{categoryId}','updateCategory');
    Route::delete('/{categoryId}','deleteCategory');
});
