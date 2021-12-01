<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CultureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run($name)
    {
        if($name == 'East Aardland')
            $this->call(KatagayamaSeeder::class);
            // $this->call(EastAardlandSeeder::class);

        // \App\Model\Culture::create([
        //     'name' => 'Katagayama',
        //     'language' => 'Katagayaman',
        // ]);
        // \App\Model\Culture::create([
        //     'name' => 'Radhb',
        //     'language' => 'Radib',
        // ]);
    }
}
