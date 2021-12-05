<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    use HasFactory;
    // A Building belongs to a Town. A Town has many Buildings. A Building employs many People, and each building holds it's
    // own 'positions' lists of people it employs. For instance, a Tavern needs a publican, tapstaff, cook, kitchenhand, etc.
    protected $fillable = [
        'building_type_id',
        'town_id',
        'name', // BUTCHER could be "Chopped Sausages" or "Mikes Meat Shop" - the actual business name
    ];

    public function town()
    {
        return $this->belongsTo(Town::class);
    }

    public function building_type()
    {
        return $this->belongsTo(BuildingType::class);
    }

    // The Building can post Jobs and People can apply for Jobs.
    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    public function advertiseJobs()
    {
        $vacancies = $this->jobs()->whereNull('employee_id')->get();
        $this->town->noticeboard->jobs()->saveMany($vacancies);
    }

    /**
     * A Building can be a House, and that requires special consideration when households move in and out.
     */
    public function adoptHousehold(Household $household)
    {
        // make sure there are enough positions available for everyone in the household
        if( $this->jobs->count() < $household->members->count() ) {
            return false;
        }
        
        // give each of the members of the household a position in the building
        for($i = 0; $i < $household->members->count(); $i++) {
            $this->jobs[$i]->employ($household->members[$i]);
            $household->update([
                'house_id' => $this->id,
            ]);
        }
    }
}
