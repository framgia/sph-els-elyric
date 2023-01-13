<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function register(Request $request){

		$request->validate([
			'name' => 'required|string',
    		'email' => 'required|string|email|unique:admins',
    		'password' => 'required|string|confirmed',
		]);

		$admin = Admin::create([
			'name'=>$request->name,
			'email'=>$request->email,
			'password'=>Hash::make($request->password),
		]);

		return response()->json([
			'message'=>'Admin Successfully Created!',
			'admin' => $admin,
		]);
	}
}