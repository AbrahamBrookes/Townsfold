<?php

namespace Database\Factories;

use App\Models\Town;
use Illuminate\Database\Eloquent\Factories\Factory;

class TownFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Town::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'town',
            'culture_id' => $this->faker->numberBetween(1, 3),
        ];
    }


    public function culture($culture_name)
    {
        include('GeneratedNames/Locations/TownsInEastAardland.php');
        
        return $this->state([
            'name' => $this->faker->randomElement($TownsInEastAardland),
            'culture_id' => \App\Models\Culture::where('name', $culture_name)->first()->id,
        ]);
    }
}
