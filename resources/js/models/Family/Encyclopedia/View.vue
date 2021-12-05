<template>
    <div class="family-view">
        <h1>The {{ family.surname }} family</h1>
        <h2 class="mb-4">of <span class="pointer" @click="goToTownView(town.id)">{{ town.name }}</span></h2>

        <div class="row">
            <div class="col-12">
                <h3>Parents</h3>
            </div>
            <div class="col-3">
                <h4>Mother</h4>
                {{ mother.name }} {{ family.surname }} - {{ mother.age }}yo
            </div>
            <div class="col-3">
                <h4>Father</h4>
                {{ father.name }} {{ family.surname }} - {{ father.age }}yo
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <h3>Children</h3>
            </div>
            <div class="col-3" v-for="kid in kids" :key="kid.id">
                {{ kid.name }} {{ family.surname }} - {{ kid.gender }}, {{ kid.age }}yo
            </div>
        </div>


    </div>
</template>

<script>
import Town from '@Town';
import Family from '@Family';
import Person from '@Person';

import FamilyCard from '@Family/Encyclopedia/Card';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        FamilyCard,
    },
    computed: {
        family() {
            return Family.find(this.id);
        },
        town() {
            return Town.find(this.family.town_id);
        },
        mother() {
            return Person.query().where('gender', 'F').where('family_id', this.id).where('mother_id', null).where('father_id', null).first()
        },
        father(){
            return Person.query().where('gender', 'M').where('family_id', this.id).where('mother_id', null).where('father_id', null).first()
        },
        kids(){
            return Person.query().where('family_id', this.id).where('mother_id', this.mother.id).where('father_id', this.father.id).get()
        }
    },
}
</script>

<style>

</style>