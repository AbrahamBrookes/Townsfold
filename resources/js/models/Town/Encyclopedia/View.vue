<template>
    <div class="town-view">
        <h1>The Township of {{ town.name }}</h1>
        <h2 class="mb-4">In the prefecture of <span class="pointer" @click="goToCultureView(culture.id)">{{ culture.nation_name }}</span></h2>

        <div class="town-households row">
            <div class="col-4"
                v-for="household in households"
                :key="household.id"
                @click="goToFamilyView(household.id)"
            >
                <household-card
                    :item="household"
                />
                
            </div>
        </div>

        <buildings-list :items="buildings" />
    </div>
</template>

<script>
import Town from '@Town';
import Household from '@Household';
import Culture from '@Culture';
import Building from '@Building';

import FamilyCard from '@Household/Encyclopedia/Card';
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
        households(){
            return Household.query().where('town_id', this.id).get();
        },
        buildings(){
            return Building.query().where('town_id', this.id).get();
        }
    },
}
</script>

<style>

</style>