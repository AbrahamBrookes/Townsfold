<template>
    <div class="culture-view">
        <h1>The Prefecture of {{ culture.name }}</h1>

        <div class="culture-towns row">
            <div class="col-4"
                v-for="town in towns"
                :key="town.id"
            >
                <town-card
                    :item="town"
                    @click="goToTownView(town.id)"
                />
                
            </div>
        </div>
    </div>
</template>

<script>
import Town from '@Town';
import Culture from '@Culture';

import TownCard from '@Town/Encyclopedia/Card';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    components: {
        TownCard,
    },
    mixins: [RequiresEncyclopediaRoutes],
    computed: {
        culture() {
            return Culture.find(this.id);
        },
        towns(){
            return Town.query().where('culture_id', this.id).get();
        }
    },
}
</script>

<style>

</style>