<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function categories(): JsonResponse
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function createCategory(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = Category::create([
            'name' => $request->name,
        ]);

        return response()->json($category, 201);
    }

    public function getCategory($categoryId): JsonResponse
    {
        $category = Category::find($categoryId);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json($category);
    }

    public function updateCategory(Request $request, $categoryId): JsonResponse
    {
        $category = Category::find($categoryId);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category->update([
            'name' => $request->name,
        ]);

        return response()->json($category);
    }

    public function deleteCategory($categoryId): JsonResponse
    {
        $category = Category::find($categoryId);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->delete();

        return response()->json(['message' => 'Category deleted']);
    }
}