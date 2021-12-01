<template>
    <div class="row">
		<div
			v-for="armour in armours"
			:key="armour.id"
			class="col-sm-6 col-md-4 col-lg-3 mb-2"
            @click.stop.prevent="clicked(armour)" 
		>
			<card :card="armour" />
        </div>

        <router-link
            :to="{
                name: 'createArmour'
            }"
        >
            Create new
        </router-link>
    </div>
</template>

<script>
import Armour from '@Armour'
import Card from '@Armour/Card'
export default {
	components: {
		Card
	},
    computed: {
        armours(){
            return Armour.all()
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
