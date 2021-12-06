<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SkillTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Cooking
        \App\Models\SkillType::create([
            'name' => 'Cooking',
            'description' => 'Culinary skill - the ability to make food from raw ingredients.',
        ]);
        // Hygiene
        \App\Models\SkillType::create([
            'name' => 'Hygiene',
            'description' => 'The ability to maintain a clean and healthy lifestyle.',
        ]); 
        // Logistics
        \App\Models\SkillType::create([
            'name' => 'Logistics',
            'description' => 'The ability to carry out tasks in a timely and efficient manner.',
        ]);
        // Medical
        \App\Models\SkillType::create([
            'name' => 'Medical',
            'description' => 'The ability to perform basic medical procedures.',
        ]);
        // Navigation
        \App\Models\SkillType::create([
            'name' => 'Navigation',
            'description' => 'The ability to navigate in a sea or a desert.',
        ]);
        // Repair
        \App\Models\SkillType::create([
            'name' => 'Repair',
            'description' => 'The ability to repair damaged or faulty items.',
        ]);
        // Scavenging
        \App\Models\SkillType::create([
            'name' => 'Scavenging',
            'description' => 'The ability to scavenge for items.',
        ]);
        // Survival
        \App\Models\SkillType::create([
            'name' => 'Survival',
            'description' => 'The ability to survive in a hostile environment.',
        ]);
        // Tactics
        \App\Models\SkillType::create([
            'name' => 'Tactics',
            'description' => 'The ability to use tactics to achieve objectives.',
        ]);
        // Trade
        \App\Models\SkillType::create([
            'name' => 'Trade',
            'description' => 'The ability to trade with other people.',
        ]);
        // Leadership
        \App\Models\SkillType::create([
            'name' => 'Leadership',
            'description' => 'The ability to lead others.',
        ]);
        // Athletics
        \App\Models\SkillType::create([
            'name' => 'Athletics',
            'description' => 'The ability to perform physical activities.',
        ]);
        // Horsemanship
        \App\Models\SkillType::create([
            'name' => 'Horsemanship',
            'description' => 'The ability to ride a horse.',
        ]);
        // Archery
        \App\Models\SkillType::create([
            'name' => 'Archery',
            'description' => 'The ability to shoot arrows.',
        ]);
        // Swordsmanship
        \App\Models\SkillType::create([
            'name' => 'Swordsmanship',
            'description' => 'The ability to use swords.',
        ]);
        // Larceny
        \App\Models\SkillType::create([
            'name' => 'Larceny',
            'description' => 'The ability to steal items.',
        ]);
        // Stealth
        \App\Models\SkillType::create([
            'name' => 'Stealth',
            'description' => 'The ability to hide from enemies.',
        ]);
        // Blunt
        \App\Models\SkillType::create([
            'name' => 'Blunt',
            'description' => 'The ability to use blunt weapons.',
        ]);
        // Polearms
        \App\Models\SkillType::create([
            'name' => 'Polearms',
            'description' => 'The ability to use polearm weapons.',
        ]);
        // Shield
        \App\Models\SkillType::create([
            'name' => 'Shield',
            'description' => 'The ability to use shields.',
        ]);
        // Thrown
        \App\Models\SkillType::create([
            'name' => 'Thrown',
            'description' => 'The ability to use thrown weapons.',
        ]);
        // Axe
        \App\Models\SkillType::create([
            'name' => 'Axe',
            'description' => 'The ability to use axes.',
        ]);
        // Crossbows
        \App\Models\SkillType::create([
            'name' => 'Crossbows',
            'description' => 'The ability to use crossbows.',
        ]);
        // Light Armour
        \App\Models\SkillType::create([
            'name' => 'Light Armour',
            'description' => 'The ability to wear light armour.',
        ]);
        // Medium Armour
        \App\Models\SkillType::create([
            'name' => 'Medium Armour',
            'description' => 'The ability to wear medium armour.',
        ]);
        // Heavy Armour
        \App\Models\SkillType::create([
            'name' => 'Heavy Armour',
            'description' => 'The ability to wear heavy armour.',
        ]);
        // Diplomacy
        \App\Models\SkillType::create([
            'name' => 'Diplomacy',
            'description' => 'The ability to make deals with other people.',
        ]);
        // Intimidation
        \App\Models\SkillType::create([
            'name' => 'Intimidation',
            'description' => 'The ability to intimidate other people.',
        ]);
        // Persuasion
        \App\Models\SkillType::create([
            'name' => 'Persuasion',
            'description' => 'The ability to persuade other people.',
        ]);
        // Lute
        \App\Models\SkillType::create([
            'name' => 'Lute',
            'description' => 'The ability to play lute.',
        ]);
        // Singing
        \App\Models\SkillType::create([
            'name' => 'Singing',
            'description' => 'The ability to sing.',
        ]);
        // Numbers
        \App\Models\SkillType::create([
            'name' => 'Numbers',
            'description' => 'The ability to do math.',
        ]);
        

    }
}
