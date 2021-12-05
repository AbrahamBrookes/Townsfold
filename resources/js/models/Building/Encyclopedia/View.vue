<template>
    <div class="building-view">
        <h1>A {{ building.name }}</h1>
        <h2 class="mb-4">In the town of <span class="pointer" @click="goToTownView">{{ town.name }}</span></h2>

        <job-list :items="jobs"></job-list>
    </div>
</template>

<script>
import Building from '@Building';
import Job from '@Job';
import Town from '@Town';

import JobList from '@Job/Encyclopedia/List';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        JobList,
    },
    computed: {
        building() {
            return Building.find(this.id);
        },
        jobs() {
            return Job.query().where('building_id', this.id).get();
        },
        town() {
            return Town.find(this.building.town_id);
        },
    },
}
</script>

<style>

</style>