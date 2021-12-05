<template>
    <div class="building-list">
        <div 
            v-for="building in buildings" 
            :key="building.id"
            @click="goToBuildingView(building.id)"
            class="pointer"
        >
            {{ building.name }}
        </div>
    </div>
</template>

<script>

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    props: ['buildings'],
    mixins: [ RequiresEncyclopediaRoutes ],
}
</script>

<style>

</style>