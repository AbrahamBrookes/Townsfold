<template>
    <div class="row">
		<div
			v-for="character in characters"
			:key="character.id"
			class="col-sm-6 col-md-4 col-lg-3 mb-2"
			@click.stop.prevent="edit(character)"
		>
			<card :card="character" />
        </div>

        <router-link
            :to="{
                name: 'createCharacter'
            }"
        >
            Create new
        </router-link>
    </div>
</template>

<script>
import Character from '@Character'
import Card from '@Character/Card'
export default {
	components: {
		Card
	},
    computed: {
        characters(){
            return Character.all()
        }
    },
	methods: {
		edit(character){
			this.$router.push({
				name: 'editCharacter',
				params: {
					id: character.id
				}
			})
		}
	}
}
</script>

<style>

</style>
