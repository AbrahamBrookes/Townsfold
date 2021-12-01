<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class EastAardlandSeeder extends Seeder
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
            'name' => 'Aardish',
            'nation_name' => 'East Aardland',
            'language' => 'Aardish',
        ]);

        // create towns
        $numTowns = 1;
        include('GeneratedNames/Locations/TownsInEastAardland.php');
        $towns = [];
        for ($i = 0; $i < $numTowns; $i++) {
            $towns[] = \App\Models\Town::create([
                'name' => Faker::create()->randomElement($TownsInEastAardland),
                'culture_id' => $culture->id,
            ]);
        }

        // for each town create a couple of families
        // a Family occupies a House in the town, so this should loosely match the number of houses
        include('GeneratedNames/People/SurnamesInEastAardland.php');
        include('GeneratedNames/People/GirlsNamesInEastAardland.php');
        include('GeneratedNames/People/BoysNamesInEastAardland.php');
        $families = [];
        foreach ($towns as $town) {
            $numFamilies = 10;
            for ($i = 0; $i < $numFamilies; $i++) {
                $families[] = \App\Models\Family::create([
                    'surname' => Faker::create()->randomElement($SurnamesInEastAardland),
                    'town_id' => $town->id,
                ]);

                // mum and dad
                $families[$i]->members()->createMany([
                    [
                        'family_id' => $families[$i]->id,
                        'name' => Faker::create()->randomElement($GirlsNamesInEastAardland),
                        'gender' => 'F'
                    ],
                    [
                        'family_id' => $families[$i]->id,
                        'name' => Faker::create()->randomElement($BoysNamesInEastAardland),
                        'gender' => 'M'
                    ]
                ]);
                // up to 3 children
                $numChildren = rand(0, 3);
                for ($j = 0; $j < $numChildren; $j++) {
                    $gender = rand(0, 32) %2 == 0 ? 'F' : 'M';
                    $families[$i]->members()->create([
                        'family_id' => $families[$i]->id,
                        'name' => Faker::create()->randomElement(  $gender === 'F' ? $GirlsNamesInEastAardland : $BoysNamesInEastAardland),
                        'gender' => $gender
                    ]);
                }
            }
        }

        
    }
}
