<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('household_id')->references('id')->on('households');
            $table->unsignedBigInteger('spouse_id')->references('id')->on('people')->nullable();
            $table->unsignedBigInteger('mother_id')->references('id')->on('people')->nullable();
            $table->unsignedBigInteger('father_id')->references('id')->on('people')->nullable();
            $table->string('gender');
            $table->string('age');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people');
    }
}
