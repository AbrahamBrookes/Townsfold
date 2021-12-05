<template>
    <div class="job-list">
        <div 
            v-for="item in items" 
            :key="item.id"
            class="pointer"
        >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>

<script>

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    mixins: [ RequiresEncyclopediaRoutes ],
    props: ['items'],
}
</script>

<style>

</style>