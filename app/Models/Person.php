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
        'spouse_id',
        'mother_id',
        'father_id',
        'gender',
        'age',
    ];

    protected $table = 'people';

    public function family()
    {
        return $this->belongsTo(Family::class);
    }

    public function spouse(){
        return this.belongsTo(Person::class, 'spouse_id');
    }

    public function mother(){
        return this.belongsTo(Person::class, 'mother_id');
    }

    public function father(){
        return this.belongsTo(Person::class, 'father_id');
    }
}
