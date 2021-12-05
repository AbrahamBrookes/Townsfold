<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobType extends Model
{
    use HasFactory;
    // A JobType is a way to keep track of the different job titles that are available in the system.
    // A Building employs People via a relationship to the JobType - $building->available_positions().
    // The Person can look up their own JobType via their relationship to the Building - $person->job().
    // We have a JobType factory that sets up a range of $jobType, and BuildingType seeder that uses 
    // those titles to create a list of "available positions" for each BuildingType that it seeds. Our 
    // Town seeder then uses the factoried BuildingTypes to create a list of actual Buildings that are
    // physically constructed in each Town.

    protected $fillable = [
        'name',
        'description',
    ];

    public function building_types()
    {
        return $this->belongsToMany(BuildingType::class); // ->withPivot('level'); 
    }
}
