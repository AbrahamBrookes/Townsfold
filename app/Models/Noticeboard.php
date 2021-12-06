<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/** 
 * A Noticeboard stands in a town and has various jobs posted to it.
*/
class Noticeboard extends Model
{
    use HasFactory;

    protected $fillable = [
        'town_id',
    ];

    public function jobs()
    {
        return $this->hasMany(Job::class, 'noticeboard_id');
    }

    public function giveJob(Person $person, Job $job)
    {
        $job->noticeboard_id = null;
        $job->employee_id = $person->id;
        $job->save();
    }
}
