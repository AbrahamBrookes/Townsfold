<template>
    <div class="town-list">
        <div 
            v-for="town in towns" 
            :key="town.id"
            @click="goToTownView(town.id)"
            class="pointer"
        >
            {{ town.name }}
        </div>
    </div>
</template>

<script>
import Town from '@Town'

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    mixins: [ RequiresEncyclopediaRoutes ],
    computed: {
        towns(){
            return Town.all()
        }
    },
}
</script>

<style>

</style>