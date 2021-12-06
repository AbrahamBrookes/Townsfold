<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillType extends Model
{
    use HasFactory;

    // a skilltype is the template for actual skills per person

    protected $fillable = [
        'name',
        'description',
    ];
}
