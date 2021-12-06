<template>
    <div class="household-list row">
        <div 
            class="col-4 no-child-events pointer"
            v-for="item in items" 
            :key="item.id"
            @click.stop.prevent="goToHouseholdView(item.id)"
        >
            <household-card 
                :item="item"
            />
        </div>
    </div>
</template>

<script>
import HouseholdCard from './Card'

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    props: ['items'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        HouseholdCard
    },
}
</script>

<style>

</style>