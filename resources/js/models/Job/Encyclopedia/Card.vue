<template>
    <encyclopedia-card :model="model" :item="job">
        <template v-slot:title>
            <div v-if="job.id === undefined">
                <p><b>Unemployed</b></p>
            </div>
            <div v-else>
                <p>
                    <b>{{ job.title }}</b> at <b>{{ building.name }}</b> <br />
                    <b>Salary:</b> {{ job.salary }}
                </p>
            </div>
        </template>
        <template v-slot:description>
        </template>
    </encyclopedia-card>
    
</template>

<script>
import Job from '@Job'
import Building from '@Building'

import EncyclopediaCard from '@models/EncyclopediaCard.vue'
export default {
    props: {
        item: {
            required: true,
        }
    },
    components: {
        EncyclopediaCard
    },
    computed: {
        imageUrl() {
            return `/img/icon-job.png`;
        },
        model() {
            return Job;
        },
        job(){
            return Job.find(this.item?.id) ?? {}
        },
        building(){
            return Building.find(this.job?.building_id) ?? {}
        },
        
    }
}
</script>

<style>

</style>