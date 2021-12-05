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

    public function households()
    {
        return $this->hasMany(Household::class);
    }

    public function culture()
    {
        return $this->belongsTo(Culture::class);
    }

    public function buildings()
    {
        return $this->hasMany(Building::class);
    }

    public function houses()
    {
        return $this->buildings()->where('name', 'House');
    }

    public function noticeboard()
    {
        return $this->hasOne(Noticeboard::class);
    }
}
