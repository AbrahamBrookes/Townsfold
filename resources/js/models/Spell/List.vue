<template>
    <div class="row">
		<div
			v-for="spell in spells"
			:key="spell.id"
			class="col-sm-6 col-md-4 col-lg-3 mb-2"
            @click.stop.prevent="clicked(spell)" 
		>
			<card :card="spell" />
        </div>

        <router-link
            :to="{
                name: 'createSpell'
            }"
        >
            Create new
        </router-link>
    </div>
</template>

<script>
import Spell from '@Spell'
import Card from '@Spell/Card'
export default {
	components: {
		Card
	},
    computed: {
        spells(){
            return Spell.all()
        }
    },
    methods: {
        clicked(card){
            this.$emit('clicked', card)
        }
    }
}
</script>

<style>

</style>
