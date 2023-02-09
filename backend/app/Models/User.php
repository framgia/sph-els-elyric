<?php

namespace App\Models;
use App\Models\User;
use App\Models\TakenCategory;
use App\Traits\HasActivity;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\LearnedWord;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasActivity;

	protected $guard = 'user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
	
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function LearnedWords()
	{
		return $this->hasMany(LearnedWord::class);
	}
    
    public function followers()
    {
        return $this->belongsToMany(User::class, 'followers', 'following_id', 'follower_id');
    }
    
    public function followings()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'following_id');
    }

    public function takenCategories()
    {
        return $this->hasMany(TakenCategory::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
