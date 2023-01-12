<template>
    <div class="job-list">
        <div 
            v-for="item in items" 
            :key="item.id"
            class="pointer"
        >
            <job-card :item="item" />
        </div>
    </div>
</template>

<script>
import JobCard from '@Job/Encyclopedia/Card';
import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    mixins: [ RequiresEncyclopediaRoutes ],
    props: ['items'],
    components: {
        JobCard,
    }
}
</script>

<style>

</style>