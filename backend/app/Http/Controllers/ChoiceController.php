<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Choice;

class ChoiceController extends Controller
{
    public function index()
	{
		$choices = Choice::all();
		return $choices;
	}
}
