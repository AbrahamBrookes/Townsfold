<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class KatagayamaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create the culture
        $culture = \App\Models\Culture::create([
            'name' => 'Katagayaman',
            'nation_name' => 'Katagayama',
            'language' => 'Katagayaman',
        ]);

        // create towns
        $numTowns = 32;
        include('GeneratedNames/Locations/TownsInKatagayama.php');
        $towns = [];
        for ($i = 0; $i < $numTowns; $i++) {
            $towns[] = \App\Models\Town::create([
                'name' => Faker::create()->randomElement($TownsInKatagayama),
                'culture_id' => $culture->id,
            ]);
        }

        // for each town create a couple of families
        // a Family occupies a House in the town, so this should loosely match the number of houses
        include('GeneratedNames/People/SurnamesInKatagayama.php');
        include('GeneratedNames/People/GirlsNamesInKatagayama.php');
        include('GeneratedNames/People/BoysNamesInKatagayama.php');
        $families = [];
        foreach ($towns as $town) {
            $numFamilies = rand(5, 12);
            for ($i = 0; $i < $numFamilies; $i++) {
                $families[$i] = \App\Models\Family::create([
                    'surname' => Faker::create()->randomElement($SurnamesInKatagayama),
                    'town_id' => $town->id,
                ]);

                // mum and dad
                $families[$i]->members()->createMany([
                    [
                        'family_id' => $families[$i]->id,
                        'name' => Faker::create()->randomElement($GirlsNamesInKatagayama),
                        'gender' => 'F'
                    ],
                    [
                        'family_id' => $families[$i]->id,
                        'name' => Faker::create()->randomElement($BoysNamesInKatagayama),
                        'gender' => 'M'
                    ]
                ]);
                // up to 3 children
                $numChildren = rand(0, 3);
                for ($j = 0; $j < $numChildren; $j++) {
                    $gender = rand(0, 32) %2 == 0 ? 'F' : 'M';
                    $families[$i]->members()->create([
                        'family_id' => $families[$i]->id,
                        'name' => Faker::create()->randomElement(  $gender === 'F' ? $GirlsNamesInKatagayama : $BoysNamesInKatagayama),
                        'gender' => $gender
                    ]);
                }
            }
        }

        
    }
}
