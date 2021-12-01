<template>
    <div>
        <div v-if="phase == 1">
			<h1>
				Select a character
				Or 
				<router-link
					:to="{
						name: 'createCharacter'
					}"
				>
					Create new
				</router-link>
			</h1>
			<div
				v-for="character in characters"
				:key="character.id"
				class="col-sm-6 col-md-4 col-lg-3 mb-2"
				@click.stop.prevent="saveCharacter(character)"
			>
				<card :card="character" />
			</div>
		</div>
        <div v-if="phase == 2">
			<h1>Your Character</h1>
			<div
				class="col-sm-6 col-md-4 col-lg-3 mb-2"
			>
				<card :card="character" />
			</div>
        </div>
    </div>
</template>

<script>
import Character from '@Character'

import Card from '@Character/Card.vue'
import ListCharacters from '@Character/List.vue'
import CharacterCreator from '@Character/Create.vue'
import ViewCharacter from '@Character/View.vue'

export default {
    components: {
        CharacterCreator,
        ViewCharacter,
		ListCharacters,
		Card,
    },
    data(){
        return {
            phase: 1,
            character: null
        }
    },
    computed: {
        characters(){
            return Character.all()
        }
    },
    methods: {
        saveCharacter(character){
			console.log(character);
            this.character = character
            this.phase = 2
        }
    }
}
</script>

<style>

</style>