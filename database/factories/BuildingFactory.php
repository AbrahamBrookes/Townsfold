<?php

namespace Database\Factories;

use App\Models\Building;
use App\Models\BuildingType;
use App\Models\JobType;
use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;

class BuildingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Building::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'town_id' => $this->faker->numberBetween(1, 10),
            'building_type_id' => $this->faker->numberBetween(1, 10),
            'name' => $this->faker->word(7),
        ];
    }
    
    public function configure()
    {
        return $this->afterCreating(function (Building $building) {
            $building_type = BuildingType::find($building->building_type_id);
            $building_type->job_types()->each(function ($job_type) use ($building) {
                $building->jobs()->save(Job::factory()->make([
                    'building_id' => $building->id,
                    'job_type_id' => $job_type->id,
                    'title' => $job_type->name,
                    'description' => $job_type->description,
                    'tier' => $job_type->tier,
                ]));
            });
        });
    }

    public function house()
    {
        $building_type = \App\Models\BuildingType::where('name', 'House')->first();
        return $this->state(function (array $attributes) use ($building_type) {
            return [
                'building_type_id' => $building_type->id,
                'name' => 'House',
            ];
        });
    }

    public function tavern()
    {
        $building_type = \App\Models\BuildingType::where('name', 'Tavern')->first();
        return $this->state(function (array $attributes) use ($building_type) {
            return [
                'building_type_id' => $building_type->id,
                'name' => 'Tavern',
            ];
        });
    }

    public function storehouse()
    {
        $building_type = \App\Models\BuildingType::where('name', 'Storehouse')->first();
        return $this->state(function (array $attributes) use ($building_type) {
            return [
                'building_type_id' => $building_type->id,
                'name' => 'Storehouse',
            ];
        });
    }

    public function butcher()
    {
        $building_type = \App\Models\BuildingType::where('name', 'Butcher')->first();
        return $this->state(function (array $attributes) use ($building_type) {
            return [
                'building_type_id' => $building_type->id,
                'name' => 'Butcher',
            ];
        });
    }

    public function woodshack()
    {
        $building_type = \App\Models\BuildingType::where('name', 'Woodshack')->first();
        return $this->state(function (array $attributes) use ($building_type) {
            return [
                'building_type_id' => $building_type->id,
                'name' => 'Woodshack',
            ];
        });
    }


}