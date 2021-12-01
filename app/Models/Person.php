<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'family_id',
        'gender',
    ];

    protected $table = 'people';

    public function families()
    {
        return $this->belongsTo(Family::class);
    }
}
