<template>
    <div>
        <h2>Create your character</h2>
        <fieldset class="p-2 col-12">
            <legend>stats</legend>
            <label>
                Attack
                <input class="form-control" v-model="attack" type="number" />
            </label>
            <label>
                Defense
                <input class="form-control" v-model="defense" type="number" />
            </label>
            <label>
                Life
                <input class="form-control" v-model="life" type="number" />
            </label>
            <label>
                Mana
                <input class="form-control" v-model="mana" type="number" />
            </label>
            <span>remaining: {{ remaining }}</span>
        </fieldset>

        <fieldset class="p-2 col-12">
            <legend>Character</legend>
            <label for="name">
                Name
            </label>
            <input class="form-control" v-model="name" name="name" />

            <label for="backstory">
                Backstory
            </label>
            <textarea rows="8" class="form-control" v-model="backstory" name="backstory" />
        </fieldset>

        <div class="col-12 text-right">
            <button @click="save" class="btn btn-primary">save</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Character from '@Character'
export default {
    data(){
        return {
            attack: 0,
            defense: 0,
            life: 0,
            mana: 0,
            remaining: this.total_stat_points,
            name: '',
            backstory: '',
        }
    },
	computed: {
		...mapState([
			'total_stat_points'
		])
	},
    watch: {
        attack(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.remaining + " points left")
                this.attack = oldVal
            } else {
                this.remaining = this.calcRemaining()
            }
        },
        defense(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.remaining + " points left")
                this.defense = oldVal
            } else {
                this.remaining = this.calcRemaining()
            }
        },
        life(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.remaining + " points left")
                this.life = oldVal
            } else {
                this.remaining = this.calcRemaining()
            }
        },
        mana(newVal, oldVal){
            if( this.calcRemaining() < 0 ){
                alert("you don't have enough points to spend - you only have " + this.remaining + " points left")
                this.mana = oldVal
            } else {
                this.remaining = this.calcRemaining()
            }
        }
    },
    methods: {
        save(){
            Character.api().post('/api/character', {
                attack: this.attack,
                defense: this.defense,
                life: this.life,
                mana: this.mana,
                remaining: this.remaining,
                name: this.name,
                backstory: this.backstory
            }).then(() => {
				this.$emit('saved', {
					attack: this.attack,
					defense: this.defense,
					life: this.life,
					mana: this.mana,
					remaining: this.remaining,
					name: this.name,
					backstory: this.backstory
				})
			})
        },
        calcRemaining(){
            var total = parseInt(this.attack) + parseInt(this.defense) + parseInt(this.life) + parseInt(this.mana)
            return this.total_stat_points - total
        }
    }
}
</script>

<style>

</style>