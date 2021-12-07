<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\BuildingType;
use App\Models\JobType;
use App\Models\SkillType;
use App\Models\Skill;

class BuildingTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // load some data outside of all loops
        $skill_types = SkillType::all()->keyBy('name');

        // create our base building types and their associated job types

        // A House can have five Residents:
        $house = BuildingType::create([
            'name' => 'House',
            'description' => 'A small residence for a single household.',
        ]);
        $resident = JobType::create([
            'name' => 'Resident',
            'description' => 'Someone to live in a house.',
            'tier' => 1,
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
            'tier' => 3,
        ]);
        $publican->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $publican->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Hygiene']->id,
            'person_id' => 0,
            'level' => 20
        ]));
        $publican->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 40
        ]));
        $publican->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Blunt']->id,
            'person_id' => 0,
            'level' => 20
        ]));
        $publican->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Intimidation']->id,
            'person_id' => 0,
            'level' => 20
        ]));


        $tapstaff = JobType::create([
            'name' => 'Tapstaff',
            'description' => 'Waiters and waitresses to serve food and drinks.',
            'tier' => 1,
        ]);
        $tapstaff->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Persuasion']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $tapstaff->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $tapstaff->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Hygiene']->id,
            'person_id' => 0,
            'level' => 10
        ]));


        $steward = JobType::create([
            'name' => 'Steward',
            'description' => 'Manages the hotel and acommodation facilities.',
            'tier' => 2,
        ]);
        $steward->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Persuasion']->id,
            'person_id' => 0,
            'level' => 10
        ]));
        $steward->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 15
        ]));
        $steward->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Hygiene']->id,
            'person_id' => 0,
            'level' => 30
        ]));
        $steward->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 30
        ]));


        $cook = JobType::create([
            'name' => 'Cook',
            'description' => 'Someone to cook food.',
            'tier' => 2,
        ]);
        $cook->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Cooking']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $cook->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Hygiene']->id,
            'person_id' => 0,
            'level' => 25
        ]));
        $cook->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 25
        ]));
        $cook->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Leadership']->id,
            'person_id' => 0,
            'level' => 25
        ]));


        $kitchenhand = JobType::create([
            'name' => 'Kitchenhand',
            'description' => 'Someone to help out in a kitchen.',
            'tier' => 1,
        ]);
        $kitchenhand->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Cooking']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $kitchenhand->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Hygiene']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $kitchenhand->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Stealth']->id,
            'person_id' => 0,
            'level' => 5
        ]));


        $musician = JobType::create([
            'name' => 'Musician',
            'description' => 'Someone to play music and entertain.',
            'tier' => 2,
        ]);
        $musician->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Lute']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $musician->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Singing']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $musician->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Persuasion']->id,
            'person_id' => 0,
            'level' => 25
        ]));
        $musician->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 15
        ]));

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
            'tier' => 2,
        ]);
        $clerk->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Persuasion']->id,
            'person_id' => 0,
            'level' => 10
        ]));
        $clerk->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Numbers']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $clerk->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $clerk->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 25
        ]));


        $storeManager = JobType::create([
            'name' => 'Store Manager',
            'description' => 'Someone to manage the store.',
            'tier' => 3,
        ]);
        $storeManager->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Persuasion']->id,
            'person_id' => 0,
            'level' => 25
        ]));
        $storeManager->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Leadership']->id,
            'person_id' => 0,
            'level' => 40
        ]));
        $storeManager->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $storeManager->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 25
        ]));


        $storekeeper = JobType::create([
            'name' => 'Storekeeper',
            'description' => 'Someone to help out in the store.',
            'tier' => 1,
        ]);
        $storekeeper->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Persuasion']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $storekeeper->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $storekeeper->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 5
        ]));

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
            'tier' => 2,
        ]);
        $butcherJob->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Cooking']->id,
            'person_id' => 0,
            'level' => 10
        ]));
        $butcherJob->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $butcherJob->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Hygiene']->id,
            'person_id' => 0,
            'level' => 5
        ]));


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
            'tier' => 3,
        ]);
        $foreman->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Leadership']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $foreman->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 50
        ]));
        $foreman->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 25
        ]));


        $chopper = JobType::create([
            'name' => 'Chopper',
            'description' => 'Someone to chop wood.',
            'tier' => 1,
        ]);
        $chopper->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Axe']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $chopper->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Logistics']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        $chopper->required_skills()->save(Skill::create([
            'skill_type_id' => $skill_types['Trade']->id,
            'person_id' => 0,
            'level' => 5
        ]));
        
        $woodshack->job_types()->attach($foreman->id);
        $woodshack->job_types()->attach($clerk->id);
        $woodshack->job_types()->attach($chopper->id);
        $woodshack->job_types()->attach($chopper->id);
        $woodshack->job_types()->attach($chopper->id);
        $woodshack->job_types()->attach($chopper->id);




    }
}
