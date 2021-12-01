<?php

namespace Database\Factories;

use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class AardishGirlFactory extends Factory
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
        include('./GeneratedNames/People/GirlsNamesInEastAardland.php');
        $first_name = $GirlsNamesInEastAardland[array_rand($GirlsNamesInEastAardland)];
        include('./GeneratedNames/People/SurnamesInEastAardland.php');
        $last_name = $SurnamesInEastAardland[array_rand($SurnamesInEastAardland)];
        return [
            'first_name' => $first_name,
            'last_name' => $last_name,
            'culture_id' => \App\Models\Culture::where('name', 'East Aardland')->first()->id,
            'town_id' =>  function () {
                return \App\Models\Town::factory()->create()->id;
            },
        ];
    }
}
