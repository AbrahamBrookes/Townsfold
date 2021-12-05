<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Building;
use App\Models\Noticeboard;

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
        $numTowns = 8;
        include('GeneratedNames/Locations/TownsInKatagayama.php');
        $towns = [];
        for ($i = 0; $i < $numTowns; $i++) {
            $towns[] = \App\Models\Town::create([
                'name' => Faker::create()->randomElement($TownsInKatagayama),
                'culture_id' => $culture->id,
            ]);
        }

        // include our seed name data
        include('GeneratedNames/People/SurnamesInKatagayama.php');
        include('GeneratedNames/People/GirlsNamesInKatagayama.php');
        include('GeneratedNames/People/BoysNamesInKatagayama.php');
        foreach ($towns as $town) {

            // for each town, add some buildings
            // houses will house households
            $numHouses = rand(5, 12);
            Building::factory()->house()->count($numHouses)->create([
                'town_id' => $town->id,
            ]);

            // a storehouse
            $storehouse = Building::factory()->storehouse()->create([
                'town_id' => $town->id,
            ]);

            // pretty good chance they have a tavern
            if (rand(0, 100) < 10) {
                Building::factory()->tavern()->create([
                    'town_id' => $town->id,
                ]);
            }

            // likely a butcher
            if (rand(0, 100) < 60) {
                Building::factory()->butcher()->create([
                    'town_id' => $town->id,
                ]);
            }

            // likely a woodshack
            if (rand(0, 100) < 60) {
                Building::factory()->woodshack()->create([
                    'town_id' => $town->id,
                ]);
            }

            // a town has a noticeboard
            $noticeboard = Noticeboard::create([
                'town_id' => $town->id,
            ]);

            // all of the jobs that belong to our buildings get posted to the noticeboard
            $town->buildings->each(function ($building) {
                $building->advertiseJobs();
            });
            



            // create the people who live in the town
            // a Household occupies a House in the town, so this should match the number of houses
            $households = [];
            for ($i = 0; $i < $numHouses; $i++) {
                $households[$i] = \App\Models\Household::create([
                    'surname' => Faker::create()->randomElement($SurnamesInKatagayama),
                    'town_id' => $town->id,
                ]);

                // mum and dad
                $mum = \App\Models\Person::create([
                    'name' => Faker::create()->randomElement($GirlsNamesInKatagayama),
                    'household_id' => $households[$i]->id,
                    'gender' => 'F',
                    'age' => rand(22, 47),
                ]);
                $dad = \App\Models\Person::create([
                    'name' => Faker::create()->randomElement($BoysNamesInKatagayama),
                    'household_id' => $households[$i]->id,
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
                        'household_id' => $households[$i]->id,
                        'name' => Faker::create()->randomElement(  $gender === 'F' ? $GirlsNamesInKatagayama : $BoysNamesInKatagayama),
                        'gender' => $gender,
                        'age' => rand(0, 13),
                        'mother_id' => $mum->id,
                        'father_id' => $dad->id
                    ]);
                }

                // the people need to live in houses - each household will apply to live in a house
                $households[$i]->findHouse();
            }


        }

        
    }
}
