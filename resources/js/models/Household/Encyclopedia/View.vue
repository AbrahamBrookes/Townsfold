<template>
    <div class="household-view">
        <h1>The {{ household.surname }} household</h1>
        <h2 class="mb-4">of <span class="pointer" @click="goToTownView(town.id)">{{ town.name }}</span></h2>

        <div class="row">
            <div class="col-12">
                <h3>Parents</h3>
            </div>
            <div class="col-3 no-child-events pointer" @click="goToPersonView(mother.id)">
                <h4>Mother</h4>
                <person-card :item="mother"></person-card>
            </div>
            <div class="col-3 no-child-events pointer" @click="goToPersonView(mother.id)">
                <h4>Father</h4>
                <person-card :item="father"></person-card>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <h3>Children</h3>
            </div>
            <div 
                class="col-3 no-child-events pointer" 
                v-for="kid in kids" 
                :key="kid.id"
                @click="goToPersonView(kid.id)"
            >
                <person-card :item="kid"></person-card>
            </div>
        </div>


    </div>
</template>

<script>
import Town from '@Town';
import Household from '@Household';
import Person from '@Person';

import HouseholdCard from '@Household/Encyclopedia/Card';
import PersonCard from '@Person/Encyclopedia/Card';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        HouseholdCard,
        PersonCard
    },
    computed: {
        household() {
            return Household.find(this.id);
        },
        town() {
            return Town.find(this.household.town_id);
        },
        mother() {
            return Person.query().where('gender', 'F').where('household_id', this.id).where('mother_id', null).where('father_id', null).first()
        },
        father(){
            return Person.query().where('gender', 'M').where('household_id', this.id).where('mother_id', null).where('father_id', null).first()
        },
        kids(){
            return Person.query().where('household_id', this.id).where('mother_id', this.mother.id).where('father_id', this.father.id).get()
        }
    },
}
</script>

<style>

</style>