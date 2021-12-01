<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'town_id',
    ];

    public function town()
    {
        return $this->belongsTo(Town::class);
    }

    public function members()
    {
        return $this->hasMany(Person::class);
    }
}
