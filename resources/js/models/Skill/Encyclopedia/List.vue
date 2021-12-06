<template>
    <div class="household-list">
        <div 
            v-for="household in households" 
            :key="household.id"
            @click="goToHouseholdView(household.id)"
            class="pointer"
        >
            {{ household.surname }}
        </div>
    </div>
</template>

<script>
import Household from '@Household'

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    mixins: [ RequiresEncyclopediaRoutes ],
    computed: {
        households(){
            return Household.all()
        }
    },
}
</script>

<style>

</style>