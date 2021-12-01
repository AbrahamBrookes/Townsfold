<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Town extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'culture_id',
    ];

    public function families()
    {
        return $this->hasMany(Family::class);
    }

    public function culture()
    {
        return $this->belongsTo(Culture::class);
    }
}
