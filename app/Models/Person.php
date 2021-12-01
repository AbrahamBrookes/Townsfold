<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
    ];

    protected $table = 'people';

    // a person may marry or be adopted, so they will have a series of families,
    // by making this a relationship, we can access trace a lineage,
    // when the person is born they get their first family,
    // access the current family by calling $person->family
    public function families()
    {
        return $this->belongsToMany(Family::class);
    }
}
