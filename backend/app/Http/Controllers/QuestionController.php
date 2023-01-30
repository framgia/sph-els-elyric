<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Question;
use App\Models\Choice;
use App\Models\Answer;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index()
	{
		$questions = Question::with('choices')->get();
		return $questions;
	}
    public function addQuestionWithChoicesAndAnswer(Request $request, $categoryID)
	{
		$category = Category::where('id', $categoryID)->first();

		if (!$category) {
			return response()->json([
				'error' => 'Category not found.'
			], 404);
		}

	    $question = new Question();
	    $question->category_id = $category->id;
	    $question->question = $request->question;
	    $question->save();

		$choices = new Choice();
		$choices->question_id = $question->id;
		$choices->choiceA = $request->input('choices')['choiceA'];
		$choices->choiceB = $request->input('choices')['choiceB'];
		$choices->choiceC = $request->input('choices')['choiceC'];
		$choices->choiceD = $request->input('choices')['choiceD'];

		$choices->save();

		$answer = new Answer();
		$answer->choice_id = $choices->id;
		$answer->is_correct = $request->input('choices.answer.is_correct');
		$answer->answer = $request->input('choices.answer.answer');
		$answer->save();

	    return response()->json([
	        'message' => 'Question, choices and answer added successfully.'
	    ], 201);
	}

	
}
