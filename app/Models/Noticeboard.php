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
        return $this->hasMany(Job::class);
    }
}
