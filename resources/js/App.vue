<template>
    <div>
        <div v-if="towns.length">
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
                        v-for="family in town.families"
                        :key="family.id"
                        class="col-12"
                    >
                        <div class="alert alert-success">
                            <h2>The {{ family.surname }} Family</h2>
                        </div>
                        
                        <div class="row">
                            <div
                                v-for="person in family.members"
                                :key="person.id"
                                class="col-4"
                            >
                                    <div class="alert" :class="{
                                        'alert-info': person.gender == 'M',
                                        'alert-danger': person.gender == 'F',
                                    }">
                                        <h3>{{ person.name }} <small>{{ family.surname }}</small></h3>
                                        <p>{{ person.gender }}</p>
                                    </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            towns: [],
        }
    },
    mounted() {
        axios.get('/api/town')
            .then(response => {
                this.towns = response.data.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>
