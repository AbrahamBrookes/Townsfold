<template>
    <encyclopedia-card :model="model" :item="item">
        <template v-slot:title>
            {{ item.name }} {{ household.surname }}
        </template>
        <template v-slot:description>
            <div v-if="job === null">
                <p><b>Unemployed</b></p>
            </div>
            <div v-else>
                <p>
                    <b>{{ job.title }}</b> at <b>{{ building.name }}</b> <br />
                    <b>Salary:</b> {{ job.salary }}
                </p>
            </div>

            <p>Lives in <b>{{ town.name }}</b></p>
            {{ item.age }} years old
        </template>
    </encyclopedia-card>
    
</template>

<script>
import EncyclopediaCard from '@models/EncyclopediaCard.vue'
import Person from '@Person'
import Town from '@Town'
import Household from '@Household'
import Job from '@Job'
import Building from '@Building'

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    components: {
        EncyclopediaCard
    },
    computed: {
        person(){
            return Person.find(this.item.id)
        },
        household(){
            return Household.find(this.person.household_id)
        },
        town(){
            return Town.find(this.household.town_id)
        },
        imageUrl() {
            return `/img/icon-household.png`;
        },
        model(){
            return Person
        },
        job(){
            return Job.query().where(job => {
                return job.employee_id == this.item.id && job.title != 'Resident' // rule out houses
            }).first()
        },
        building(){
            return Building.query().where('id', this.job.building_id).first()
        }
    }
}
</script>

<style>

</style>