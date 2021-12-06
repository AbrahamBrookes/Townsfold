<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(SkillTypeSeeder::class); // needs to run before BuildingType so that JobTypes can have Skills
        $this->call(BuildingTypeSeeder::class);
        // run the seeder for the location table
        $this->callWith(CultureSeeder::class, [
            'name' => 'East Aardland',
            'language' => 'Aardish',
        ]);
    }
}
