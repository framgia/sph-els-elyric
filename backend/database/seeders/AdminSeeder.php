<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
	public function run()
	{
		Admin::create([
			'name' => 'Elyric Admin2',
			'email' => 'elyric@admin2.com',
			'password' => bcrypt('password123'),
		]);
	}
}
