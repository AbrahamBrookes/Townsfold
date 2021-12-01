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
        // run the seeder for the location table
        $this->callWith(CultureSeeder::class, [
            'name' => 'East Aardland',
            'language' => 'Aardish',
        ]);
    }
}
