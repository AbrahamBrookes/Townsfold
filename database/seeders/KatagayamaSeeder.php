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
                $mum = \App\Models\Person::create([
                    'name' => Faker::create()->randomElement($GirlsNamesInKatagayama),
                    'family_id' => $families[$i]->id,
                    'gender' => 'F',
                    'age' => rand(22, 47),
                ]);
                $dad = \App\Models\Person::create([
                    'name' => Faker::create()->randomElement($BoysNamesInKatagayama),
                    'family_id' => $families[$i]->id,
                    'gender' => 'M',
                    'age' => rand(22, 47),
                ]);
                $mum->spouse_id = $dad->id;
                $dad->spouse_id = $mum->id;

                $mum->save();
                $dad->save();

                // up to 3 children
                $numChildren = rand(0, 3);
                $kids = [];
                for ($j = 0; $j < $numChildren; $j++) {
                    $gender = rand(0, 32) %2 == 0 ? 'F' : 'M';
                    $kids[] = \App\Models\Person::create([
                        'family_id' => $families[$i]->id,
                        'name' => Faker::create()->randomElement(  $gender === 'F' ? $GirlsNamesInKatagayama : $BoysNamesInKatagayama),
                        'gender' => $gender,
                        'age' => rand(0, 13),
                        'mother_id' => $mum->id,
                        'father_id' => $dad->id
                    ]);
                }
            }
        }

        
    }
}
