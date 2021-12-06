<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    // a skill is progress towards a skill in the context of a single person

    protected $fillable = [
        'skill_type_id',
        'person_id',
        'level',
    ];

    public function skill_type()
    {
        return $this->belongsTo('App\Models\SkillType');
    }

    public function person()
    {
        return $this->belongsTo('App\Models\Person');
    }

    public function getNameAttribute()
    {
        return $this->skill_type->name;
    }
}
