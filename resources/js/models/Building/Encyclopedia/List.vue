<template>
    <div class="building-list">
        <div 
            v-for="item in items" 
            :key="item.id"
            @click="goToBuildingView(item.id)"
            class="pointer"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script>

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    props: ['items'],
    mixins: [ RequiresEncyclopediaRoutes ],
}
</script>

<style>

</style>