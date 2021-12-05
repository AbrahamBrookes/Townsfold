<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Household extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'town_id',
        'house_id',
    ];

    public function town()
    {
        return $this->belongsTo(Town::class);
    }

    public function members()
    {
        return $this->hasMany(Person::class);
    }

    public function house()
    {
        return $this->belongsTo(Building::class, 'house_id');
    }

    // when this household has no house_id, this function will attempt to find a house
    // within the towns buildings
    public function findHouse()
    {
        $house = $this->house;

        if (! $house) {
            // find a house that has no employess (via its jobs)
           foreach ($this->town->houses as $house) {
                $hasResidents = false;
                foreach ($house->jobs as $job) {
                    if ($job->employee) {
                        $hasResidents = true;
                    }
                }
                if( !$hasResidents ) {
                    $house->adoptHousehold($this);
                    break;
                }
            }
        }

        return $house;
    }
}
