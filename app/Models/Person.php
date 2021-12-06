<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'household_id',
        'spouse_id',
        'mother_id',
        'father_id',
        'gender',
        'age',
    ];

    protected $table = 'people';

    public function household()
    {
        return $this->belongsTo(Household::class);
    }

    public function spouse(){
        return $this->belongsTo(Person::class, 'spouse_id');
    }

    public function mother(){
        return $this->belongsTo(Person::class, 'mother_id');
    }

    public function father(){
        return $this->belongsTo(Person::class, 'father_id');
    }

    public function skills(){
        return $this->hasMany(Skill::class);
    }

    public function job(){
        return $this->hasOne(Job::class, 'employee_id')->where('job_type_id', '!=', 1); // no houses
    }

    public function findWork(){
        // if we already have a job, return it
        $this->load('job');
        if($this->job){
            return $this->job;
        }

        // if we are under 14 we don't work so return false
        if( $this->age < 14 ){
            return false;
        }

        // look at the noticeboard in your town to find all the available jobs
        $my_skills = $this->skills->keyBy('name');
        $this->household->town->noticeboard->jobs()->each(function($job) use ($my_skills){
            // if we have skills and the job requires those skills then take the job
            // just match any single skill for now, we can grow the logic later
            $required_skills = $job->job_type->required_skills->keyBy('name');
            
            if( $required_skills->keys()->intersect($my_skills->keys())->count() > 0 ){
                $this->job()->save($job);
                $this->household->town->noticeboard->giveJob($this, $job);
                return $job;
            }
        });

    }
}
