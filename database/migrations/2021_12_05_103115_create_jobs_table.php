<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('building_id')->references('id')->on('buildings');
            $table->unsignedBigInteger('job_type_id')->references('id')->on('job_types');
            $table->unsignedBigInteger('employee_id')->references('id')->on('employees')->nullable();
            $table->unsignedBigInteger('noticeboard_id')->references('id')->on('noticeboards')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->integer('salary')->nullable();
            $table->integer('tier')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
