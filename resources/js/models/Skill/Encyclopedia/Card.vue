<template>
    <encyclopedia-card :model="model" :item="item">
        <template v-slot:title>
            {{ item.name }} - level {{ item.level}}
        </template>
        <template v-slot:description>
            {{ item.description }}
        </template>
    </encyclopedia-card>
    
</template>

<script>
import EncyclopediaCard from '@models/EncyclopediaCard.vue'

import Skill from '@Skill'

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
        imageUrl() {
            return `/img/icon-household.png`;
        },
        model(){
            return Skill
        },
    }
}
</script>

<style>

</style>