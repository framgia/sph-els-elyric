<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){

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
}
