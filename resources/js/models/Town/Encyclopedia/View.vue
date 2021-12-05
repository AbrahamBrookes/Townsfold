<template>
    <div class="town-view">
        <h1>The Township of {{ town.name }}</h1>
        <h2 class="mb-4">In the prefecture of <span class="pointer" @click="goToCultureView(culture.id)">{{ culture.nation_name }}</span></h2>

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

        <buildings-list :items="town.buildings" />
    </div>
</template>

<script>
import Town from '@Town';
import Family from '@Family';
import Culture from '@Culture';
import Building from '@Building';

import FamilyCard from '@Family/Encyclopedia/Card';
import BuildingsList from '@Building/Encyclopedia/List';

import RequiresEncyclopediaRoutes from '@mixins/RequiresEncyclopediaRoutes';

export default {
    props: ['id'],
    mixins: [ RequiresEncyclopediaRoutes ],
    components: {
        FamilyCard,
        BuildingsList,
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
        },
        buildings(){
            return Building.query().where('town_id', this.id).get();
        }
    },
}
</script>

<style>

</style>