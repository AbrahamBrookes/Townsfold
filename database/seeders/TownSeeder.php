<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TownSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run($culture)
    {
        // create 5 towns
        $towns = Town::factory()->culture($culture)->times(5)->create();
    }
}
