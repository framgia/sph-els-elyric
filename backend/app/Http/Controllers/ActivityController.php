<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use Auth;

class ActivityController extends Controller
{
    public function show()
{
    $userId = Auth::id();
    $activities = Activity::where('user_id', $userId)->get();
    
    $activitiesWithTypes = [];
    foreach ($activities as $activity) {
        $activity->activitiable_type = $activity->activitiable_type;
        $activitiesWithTypes[] = $activity;
    }
    
    return response()->json($activitiesWithTypes);
}

    
}
