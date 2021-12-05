<template>
    <div class="householdold-list">
        <div 
            v-for="householdold in households" 
            :key="householdold.id"
            @click="goToFamilyView(householdold.id)"
            class="pointer"
        >
            {{ householdold.surname }}
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