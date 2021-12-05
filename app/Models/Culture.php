<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Culture extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'nation_name',
        'language'
    ];

    public function towns(){
        return $this->hasMany(App\Models\Town::class);
    }
}
