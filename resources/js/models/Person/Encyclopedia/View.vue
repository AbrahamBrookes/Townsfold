<template>
    <div class="person-view">
        <h1> {{ person.name }} {{ household.surname }} ({{ person.gender }})</h1>
        <h2 class="mb-4">of <span class="pointer" @click="goToTownView(town.id)">{{ town.name }}</span></h2>

        <div class="row" v-if="mother !== null && father !== null">
            <div class="col-12">
                <h3>Parents</h3>
            </div>
            <div class="col-3">
                <h4>Mother</h4>
                {{ mother.name }} {{ household.surname }} - {{ mother.age }}yo
            </div>
            <div class="col-3">
                <h4>Father</h4>
                {{ father.name }} {{ household.surname }} - {{ father.age }}yo
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <job-card :item="job" />
            </div>
        </div>


    </div>
</template>

<script>
import Town from '@Town';
import Household from '@Household';
import Person from '@Person';
import Job from '@Job';
import Building from '@Building';

import JobCard from '@Job/Encyclopedia/Card';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        JobCard,
    },
    computed: {
        person(){
            return Person.find(this.id)
        },
        household(){
            return Household.find(this.person.household_id)
        },
        town(){
            return Town.find(this.household.town_id)
        },
        job(){
            return Job.query()
                .where('employee_id', this.id)
                .where('title', '!=', 'Resident') // rule out houses
            .first()
        },
        building(){
            return Building.query().where('id', this.job.building_id).first()
        },
        mother(){
            return Person.query().where('id', this.person.mother_id).first()
        },
        father(){
            return Person.query().where('id', this.person.father_id).first()
        },
        siblings(){
            return Person.query()
                .where('household_id', this.household.id)
                .where('id', '!=', this.person.id)
                .where('id', '!=', this.mother.id)
                .where('id', '!=', this.father.id)
            .get()
        },
    },
}
</script>

<style>

</style>