<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;

class UserController extends Controller
{
    public function register(Request $request)
	{
		$request->validate([
			'name' => 'required|string',
    		'email' => 'required|string|email|unique:users',
    		'password' => 'required|string|confirmed',
		]);

		$user = User::create([
			'name'=>$request->name,
			'email'=>$request->email,
			'password'=>Hash::make($request->password),
		]);

		return response()->json([
			'message'=>'User Successfully Created!',
			'user' => $user,
		]);
	}


	public function login(Request $request)
	{
		$request->validate([
    	    'email' => 'required|email',
    	    'password' => 'required'
    	]);

    	$user = User::where('email', $request->email)->first();
    	if (! $user || ! Hash::check($request->password, $user->password)) {
    	    return response()->json(['message' => 'Invalid email or password'], 401);
    	}

    	if(Auth::guard('user')->attempt(['email' => $request->email, 'password' => 	$request->password])){
			$user = Auth::guard('user')->user();
			$token = $user->createToken('MyApp', ['user'])->plainTextToken;
			return response()->json([
				'message' => 'User Successfully Authenticated!',
				'token' => $token,
				'redirect' => '/dashboard'
			]);
		}
	}

	public function logout(Request $request)
	{
    	if($request->user()){
    	    $request->user()->currentAccessToken()->delete();
    	    return response()->json([
    	        'message' => 'User Successfully Logged out!'
    	    ]);
    	}
    	return response()->json(['error' => 'Unauthenticated'], 401);
	}

	public function userDetails()
	{
		$user = Auth::user();
		return response()->json(['data' => $user]);
	}
}
