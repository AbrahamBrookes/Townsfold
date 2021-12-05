<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * A Job is a physical position at a Building that represents work that needs doing. People apply for, and
 * are assigned to, Jobs. The Job gets a JobType from the Building's BuildingType's job_types relationship
 */
class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'building_id',
        'job_type_id',
        'employee_id',
        'noticeboard_id',
        'title',
        'description',
        'salary',
    ];

    public function building()
    {
        return $this->belongsTo(Building::class);
    }

    public function job_type()
    {
        return $this->belongsTo(JobType::class);
    }

    public function employee()
    {
        return $this->belongsTo(Person::class, 'employee_id');
    }

    public function noticeboard()
    {
        return $this->belongsTo(Noticeboard::class);
    }

    public function employ(Person $person)
    {
        // employ the person
        $this->employee_id = $person->id;
        // remove self from noticeboard
        $this->noticeboard_id = null;
        $this->save();
    }
}
