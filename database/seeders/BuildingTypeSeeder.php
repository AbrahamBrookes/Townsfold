<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\BuildingType;
use App\Models\JobType;

class BuildingTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create our base building types and their associated job types

        // A House can have five Residents:
        $house = BuildingType::create([
            'name' => 'House',
            'description' => 'A small residence for a single household.',
        ]);
        $resident = JobType::create([
            'name' => 'Resident',
            'description' => 'Someone to live in a house.',
        ]);
        $house->job_types()->attach($resident->id);
        $house->job_types()->attach($resident->id);
        $house->job_types()->attach($resident->id);
        $house->job_types()->attach($resident->id);
        $house->job_types()->attach($resident->id);

        // A Tavern can have one Publican, four Tapstaff, one Steward, one Cook, one Kitchenhand and one Musician
        $tavern = BuildingType::create([
            'name' => 'Tavern',
            'description' => 'Serves food and beer and has several rooms for travellers to stay.',
        ]);
        $publican = JobType::create([
            'name' => 'Publican',
            'description' => 'The man who controls the Beer.',
        ]);
        $tapstaff = JobType::create([
            'name' => 'Tapstaff',
            'description' => 'Waiters and waitresses to serve food and drinks.',
        ]);
        $steward = JobType::create([
            'name' => 'Steward',
            'description' => 'Manages the hotel and acommodation facilities.',
        ]);
        $cook = JobType::create([
            'name' => 'Cook',
            'description' => 'Someone to cook food.',
        ]);
        $kitchenhand = JobType::create([
            'name' => 'Kitchenhand',
            'description' => 'Someone to help out in a kitchen.',
        ]);
        $musician = JobType::create([
            'name' => 'Musician',
            'description' => 'Someone to play music and entertain.',
        ]);
        $tavern->job_types()->attach($publican->id);
        $tavern->job_types()->attach($tapstaff->id);
        $tavern->job_types()->attach($tapstaff->id);
        $tavern->job_types()->attach($tapstaff->id);
        $tavern->job_types()->attach($tapstaff->id);
        $tavern->job_types()->attach($steward->id);
        $tavern->job_types()->attach($cook->id);
        $tavern->job_types()->attach($kitchenhand->id);
        $tavern->job_types()->attach($musician->id);
        
        // a Storehouse has one Clerk, one Manager, four Storekeepers
        $storehouse = BuildingType::create([
            'name' => 'Storehouse',
            'description' => 'A place to store goods and supplies.',
        ]);
        $clerk = JobType::create([
            'name' => 'Clerk',
            'description' => 'Someone to keep the books tidy.',
        ]);
        $storeManager = JobType::create([
            'name' => 'Store Manager',
            'description' => 'Someone to manage the store.',
        ]);
        $storekeeper = JobType::create([
            'name' => 'Storekeeper',
            'description' => 'Someone to help out in the store.',
        ]);
        $storehouse->job_types()->attach($storekeeper->id);
        $storehouse->job_types()->attach($storekeeper->id);
        $storehouse->job_types()->attach($storekeeper->id);
        $storehouse->job_types()->attach($storekeeper->id);
        $storehouse->job_types()->attach($clerk->id);
        $storehouse->job_types()->attach($storeManager->id);
        
        // a Butcher has three Butchers
        $butcher = BuildingType::create([
            'name' => 'Butcher',
            'description' => 'A place that butchers and sells meat.',
        ]);
        $butcherJob = JobType::create([
            'name' => 'Butcher',
            'description' => 'Someone who chops and prepares meat.',
        ]);
        $butcher->job_types()->attach($butcherJob->id);
        $butcher->job_types()->attach($butcherJob->id);
        $butcher->job_types()->attach($butcherJob->id);
        
        // a Woodshack has one Clerk, one Foreman and four Choppers
        $woodshack = BuildingType::create([
            'name' => 'Woodshack',
            'description' => 'A place that chops and sells firewood.',
        ]);
        $foreman = JobType::create([
            'name' => 'Foreman',
            'description' => 'Someone to oversee the worksite.',
        ]);
        $chopper = JobType::create([
            'name' => 'Chopper',
            'description' => 'Someone to chop wood.',
        ]);
        $woodshack->job_types()->attach($foreman->id);
        $woodshack->job_types()->attach($clerk->id);
        $woodshack->job_types()->attach($chopper->id);
        $woodshack->job_types()->attach($chopper->id);
        $woodshack->job_types()->attach($chopper->id);
        $woodshack->job_types()->attach($chopper->id);




    }
}
