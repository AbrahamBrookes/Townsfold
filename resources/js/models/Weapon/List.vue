<template>
    <div class="row">
		<div
			v-for="weapon in weapons"
			:key="weapon.id"
			class="col-sm-6 col-md-4 col-lg-3 mb-2"
            @click.stop.prevent="clicked(weapon)" 
		>
			<card :card="weapon" />
        </div>

        <router-link
            :to="{
                name: 'createWeapon'
            }"
        >
            Create new
        </router-link>
    </div>
</template>

<script>
import Weapon from '@Weapon'
import Card from '@Weapon/Card'
export default {
	components: {
		Card
	},
    computed: {
        weapons(){
            return Weapon.all()
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
