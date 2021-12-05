<template>
    <div>

        <b-button
            @click="toggleEncyclopedia(true)"
        >
            Show Encyclopedia
        </b-button>
        <encyclopedia />
        <!--div v-if="towns.length">
            <div 
                v-for="town in towns"
                :key="town.id"
                class="container"
            >
                <div class="row">
                    <div class="col-12 text-center alert alert-warning">
                        <h1>{{ town.name }}</h1>
                        <h5>A town in the prefecture of {{ town.culture.nation_name }}</h5>
                    </div>
                </div>
                <div class="row">
                    <div
                        v-for="household in town.households"
                        :key="household.id"
                        class="col-12"
                    >
                        <div class="alert alert-success">
                            <h2>The {{ household.surname }} Household</h2>
                        </div>
                        
                        <div class="row">
                            <div
                                v-for="person in household.members"
                                :key="person.id"
                                class="col-4"
                            >
                                    <div class="alert" :class="{
                                        'alert-info': person.gender == 'M',
                                        'alert-danger': person.gender == 'F',
                                    }">
                                        <h3>{{ person.name }} <small>{{ household.surname }}</small></h3>
                                        <p>{{ person.gender }}</p>
                                    </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            
        </div-->
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

import Encyclopedia from '@pages/Encyclopedia.vue';

import Town from '@Town';
export default {
    components: {
        Encyclopedia,
    },
    methods: {
        ...mapMutations(['toggleEncyclopedia']),
    },
    mounted() {
        Town.api().get('/')
    },
}
</script>
