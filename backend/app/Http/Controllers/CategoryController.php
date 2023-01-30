<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
	{
		$categories = Category::all();
		return $categories;
	}
    public function getCategoryDetails($categoryID)
	{
		$category = Category::where('id', $categoryID)->first();
		if($category){
			$data = $category;
		}else{
			return "Can't find id";
		}
		return $data;
	}

	public function updateCategoryDetails(Request $request, $category_id)
	{
		$category = Category::where('id', $category_id)->first();
	
		if (!$request->has('title') || !$request->has('description')) {
			return response()->json([
				'error' => 'Both title and description are required'
			], 400);
		}
	
		$category->title = $request->input('title');
		$category->description = $request->input('description');
		$category->save();
	
		return response()->json([
			'message' => 'Successfully Updated!',
		], 200);
	}

    public function categoryQuestions()
	{
		$categories = Category::with(['questions', 'questions.choices', 'questions.choices.answer'])->get();
    	return $categories;
	}
	
	public function store(Request $request)
	{
		$request->validate([
			'title' => 'required|string',
			'description' => 'required|string'
		]);

		$category = new Category();
		$category->title = $request->title;
		$category->description = $request->description;
		$category->save();

		return response()->json([
			'message' => 'Category Successfully Added!'
		], 201);

	}
}
