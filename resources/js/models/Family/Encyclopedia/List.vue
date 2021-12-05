<template>
    <div class="family-list">
        <div 
            v-for="family in families" 
            :key="family.id"
            @click="goToFamilyView(family.id)"
            class="pointer"
        >
            {{ family.surname }}
        </div>
    </div>
</template>

<script>
import Family from '@Family'

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes.js';

export default {
    mixins: [ RequiresEncyclopediaRoutes ],
    computed: {
        families(){
            return Family.all()
        }
    },
}
</script>

<style>

</style>