<template>
    <div class="culture-list">
        <div 
            v-for="culture in cultures" 
            :key="culture.id"
            @click="goToCultureView(culture.id)"
            class="pointer"
        >
            {{ culture.nation_name }}
        </div>
    </div>
</template>

<script>
import Culture from '@Culture'

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    mixins: [ RequiresEncyclopediaRoutes ],
    computed: {
        cultures(){
            return Culture.all()
        }
    },
}
</script>

<style>

</style>