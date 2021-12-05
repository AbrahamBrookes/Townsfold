<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * A BuildingType is like a template for a Building. When towns are seeded (or develop over time), they will build
 * Buildings in their boundary, and use the BuildingType to determine what kind of Building to build (Building has
 * a BuildingTypeId).
 * 
 * You would use the BuildingType in the in game UI to show a list of buildings you can build in a town (and maybe
 * make crud controls to add/remove/edit BuildingTypes, expanding the game quite easily over time). You would use 
 * Building to show a list of buildings that have been built in any particular Town.
 */
class BuildingType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function job_types()
    {
        return $this->belongsToMany('App\Models\JobType');
    }
}
