<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'Weapon' => 'App\Models\Weapon',
            'Armour' => 'App\Models\Armour',
            'Item' => 'App\Models\Item',
            'Spell' => 'App\Models\Spell',
            'Skillbook' => 'App\Models\Skillbook',
        ]);
    }
}
