<template>
    <div class="town-view">
        <h1>The Township of {{ town.name }}</h1>
        <h2 class="mb-4">In the prefecture of <span class="pointer" @click="goToCultureView(culture.id)">{{ culture.nation_name }}</span></h2>

        <h3>Families</h3>
        <households-list :items="households" />

        <h3>Buildings</h3>
        <buildings-list :items="buildings" />

        <h3>Jobs</h3>
        <jobs-list :items="jobs" />
    </div>
</template>

<script>
import Town from '@Town';
import Household from '@Household';
import Culture from '@Culture';
import Building from '@Building';
import Noticeboard from '@Noticeboard';
import Job from '@Job';

import HouseholdsList from '@Household/Encyclopedia/List';
import BuildingsList from '@Building/Encyclopedia/List';
import JobsList from '@Job/Encyclopedia/List';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        HouseholdsList,
        BuildingsList,
        JobsList,
    },
    computed: {
        town() {
            return Town.find(this.id);
        },
        culture() {
            return Culture.find(this.town.culture_id);
        },
        households(){
            return Household.query().where('town_id', this.id).get();
        },
        buildings(){
            return Building.query().where('town_id', this.id).get();
        },
        noticeboard(){
            return Noticeboard.query().where('town_id', this.id).first();
        },
        jobs(){
            return Job.query().where('noticeboard_id', this.noticeboard.id).where('employee_id', null).get();
        },
    },
}
</script>

<style>

</style>