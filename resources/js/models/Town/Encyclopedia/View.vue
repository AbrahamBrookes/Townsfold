<template>
    <div class="town-view">
        <h1>The Township of {{ town.name }}</h1>
        <h2 class="mb-4">In the prefecture of <span class="pointer" @click="goToCulturePage">{{ culture.nation_name }}</span></h2>

        <div class="town-families row">
            <div class="col-4"
                v-for="family in families"
                :key="family.id"
                @click="goToFamilyView(family.id)"
            >
                <family-card
                    :item="family"
                />
                
            </div>
        </div>
    </div>
</template>

<script>
import Town from '@Town';
import Family from '@Family';
import Culture from '@Culture';

import FamilyCard from '@Family/Encyclopedia/Card';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        FamilyCard,
    },
    computed: {
        town() {
            return Town.find(this.id);
        },
        culture() {
            return Culture.find(this.town.culture_id);
        },
        families(){
            return Family.query().where('town_id', this.id).get();
        }
    },
}
</script>

<style>

</style>