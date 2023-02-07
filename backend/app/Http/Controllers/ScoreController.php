<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function calculateScore(Request $request)
    {
        $score = 0;
        $totalQuestion = $request->input('totalQuestion');
        $answers = $request->input('answers');
        $correctAnswers = $request->input('correctAnswers');

        $isCorrect = [];
        
        for ($i = 0; $i < count($answers); $i++) {
            if ($answers[$i] == $correctAnswers[$i]) {
                $score++;
                array_push($isCorrect, true);
            } else {
                array_push($isCorrect, false);
            }
        }
        
        return $totalQuestion > 0
            ? response()->json([
                'result' => round(($score / $totalQuestion) * 100, 2),
                'score' => $score,
                'isCorrect' => $isCorrect])
            : response()->json(['error' => 'Cannot perform calculation with 0 total questions']);
    }
    
}
