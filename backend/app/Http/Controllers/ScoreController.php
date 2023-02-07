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
        $answersQuestion = $request->input('answersQuestion');

        $isCorrect = [];
        $correctAnswersOnly = [];
        $correctAnswerQuestionsOnly = [];
        
        for ($i = 0; $i < count($answers); $i++) {
            if ($answers[$i] == $correctAnswers[$i]) {
                $score++;
                array_push($isCorrect, true);
                array_push($correctAnswersOnly, $answers[$i]);
                array_push($correctAnswerQuestionsOnly, $answersQuestion[$i]);
            } else {
                array_push($isCorrect, false);
            }
        }
        
        return $totalQuestion > 0
            ? response()->json([
                'result' => round(($score / $totalQuestion) * 100, 2),
                'score' => $score,
                'isCorrect' => $isCorrect,
                'correctAnswersOnly' => $correctAnswersOnly,
                'correctAnswerQuestionsOnly' => $correctAnswerQuestionsOnly])
            : response()->json(['error' => 'Cannot perform calculation with 0 total questions']);
    }
    
}
