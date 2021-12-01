<template>
	<b-form @submit="save" v-if="model">
        <fieldset class="p-2 col-12">
            <legend>stats</legend>
            <label>
                Attack
                <input class="form-control" v-model="model.attack" type="number" />
            </label>
            <label>
                Defense
                <input class="form-control" v-model="model.defense" type="number" />
            </label>
            <label>
                Life
                <input class="form-control" v-model="model.life" type="number" />
            </label>
            <label>
                Mana
                <input class="form-control" v-model="model.mana" type="number" />
            </label>
            <span>remaining: {{ model.remaining }}</span>
        </fieldset>

        <fieldset class="p-2 col-12">
            <legend>Character</legend>
            <label for="name">
                Name
            </label>
            <input class="form-control" v-model="model.name" name="name" />

            <label for="backstory">
                Backstory
            </label>
            <textarea rows="8" class="form-control" v-model="model.backstory" name="backstory" />
        </fieldset>

		<b-button @click="save">Submit</b-button>

	</b-form>
</template>

<script>
import Character from '@Character'

import EditsLocalModelData from '@mixins/EditsLocalModelData'

import { mapState } from 'vuex'

export default {
    mixins: [
        EditsLocalModelData
    ],
	computed: {
		...mapState([
			'total_stat_points'
		])
	},
    watch: {
        'model.attack': function(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left")
                this.model.attack = oldVal
            } else {
                this.model.remaining = this.calcRemaining()
            }
        },
        'model.defense': function(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left")
                this.model.defense = oldVal
            } else {
                this.model.remaining = this.calcRemaining()
            }
        },
        'model.life': function(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left")
                this.model.life = oldVal
            } else {
                this.model.remaining = this.calcRemaining()
            }
        },
        'model.mana': function(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left")
                this.model.mana = oldVal
            } else {
                this.model.remaining = this.calcRemaining()
            }
        }
    },
    methods: {
        save(){
            Character.api().put('/api/character', this.model).then(() => {
				this.$emit('saved', this.model)
			})
        },
        calcRemaining(){
            var total = parseInt(this.model.attack) + parseInt(this.model.defense) + parseInt(this.model.life) + parseInt(this.model.mana)
            return this.total_stat_points - total
        },
        copyLocal(){
            this.model = JSON.parse(JSON.stringify(Character.find(this.id)))
        }
    }
}
</script>
