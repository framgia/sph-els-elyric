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
    public function getCategoryDetails($categoryId)
	{
		return Category::findOrFail($categoryId);
	}

	public function updateCategoryDetails(Request $request, $categoryId)
	{
		$request->validate([
			'title' => 'required|string',
			'description'=>'required|string'
		]);
	
		Category::whereId($categoryId)->update([
			'title'=>$request->title,
			'description'=>$request->description
		]);
	
		return response()->json([
			'message' => 'Successfully Updated!',
		], 200);
	}

    public function categoryQuestions()
	{
		$categories = Category::with([
			'questions', 
			'questions.choices', 
			'questions.choices.answer'
		])->get();
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
