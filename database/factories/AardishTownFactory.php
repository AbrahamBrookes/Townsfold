<?php

namespace Database\Factories;

use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class AardishTownFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Model::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        include('./GeneratedNames/Locations/TownsInEastAardland.php');
        $name = $townsInEastAardland[array_rand($townsInEastAardland)];
        return [
            'name' => $name,
            'culture_id' => \App\Model\Culture::where('name', 'East Aardland')->first()->id,
        ];
    }
}
