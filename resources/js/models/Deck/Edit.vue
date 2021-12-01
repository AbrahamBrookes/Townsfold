<template>
	<b-form @submit="save" v-if="model">
		<b-form-group
			label="Name"
		>
			<b-form-input v-model="model.name" />
		</b-form-group>

		<b-form-group
			label="Description"
		>
			<b-form-input v-model="model.description" />
		</b-form-group>

		<b-button @click="save">Submit</b-button>

		<fieldset>
			<legend>Browse existing cards and add them to this deck</legend>
			<b-form-group
				label="Card Type"
			>
				<b-form-select
					class="form-control"
					v-model="adding_to_relationship"
					:options="card_types"
				></b-form-select>
			</b-form-group>
			<component :is="listComponent" @clicked="addCard" v-if="adding_to_relationship.length" />
		</fieldset>

		<fieldset class="row">
			<legend>Cards in this deck</legend>
			<span>Total: {{ totalCards }}</span>
			<div
				v-for="card in model.cards"
				:key="card.pivot.deckable_type + card.id"
				class="col-sm-6 col-md-4 col-lg-3 mb-2 small-card"
			>
				<span>{{ card.pivot.quantity }}x</span>
				<span @click="addCard(card)" class="p-3 pointer"> + </span>
				<span @click="removeCard(card)" class="p-3 pointer"> - </span>
				<h4>{{card.name}}</h4>
				<span>{{ card.pivot.deckable_type }}</span>
			</div>
		</fieldset>

	</b-form>
</template>

<script>
import Deck from '@Deck'

import WeaponCard from '@Weapon/Card.vue'
import ArmourCard from '@Armour/Card.vue'
import ItemCard from '@Item/Card.vue'
import SpellCard from '@Spell/Card.vue'
import SkillbookCard from '@Skillbook/Card.vue'

import EditsLocalModelData from '@mixins/EditsLocalModelData'

export default {
    mixins: [
        EditsLocalModelData
    ],
	data(){
		return {
			adding_to_relationship: '',
			card_types: [
				// value: relationship name, text: type
				{ value: 'weapons', text: 'Weapon'},
				{ value: 'armours', text: 'Armour'},
				{ value: 'items', text: 'Item'},
				{ value: 'spells', text: 'Spell'},
				{ value: 'skillbooks', text: 'Skillbook'},
			]
		}
	},
	computed: {
		listComponent(){
			switch (this.adding_to_relationship){
				case "weapons":
					return () => import('@Weapon/List.vue')
				case "armours":
					return () => import('@Armour/List.vue')
				case "items":
					return () => import('@Item/List.vue')
				case "spells":
					return () => import('@Spell/List.vue')
				case "skillbooks":
					return () => import('@Skillbook/List.vue')
				default: 
					return "nope"
			}
		},
		totalCards(){
			var total = 0
			if( this.model.cards )
				this.model.cards.forEach(card => {
					total += card.pivot.quantity
				})
			return total
		}
	},
	methods: {
		save(){
			Deck.api().put('/api/deck/' + this.id, this.model).then(
				response => {
					this.$emit('updated', response.response.data.data)
				}
			)
		},
        copyLocal(){
            this.model = JSON.parse(JSON.stringify(Deck.query().withAll().find(this.id)))
        },
		addCard(card){
			var type = card.pivot ? card.pivot.deckable_type : card.constructor.name
			// if this card has already been added to this deck, just increase the quantity
			var existing = this.model.cards.find(item => {
				return item.id == card.id && item.pivot.deckable_type == type
			})
			if( existing ){
				// just increase the qty
				var cards = this.model.cards.map(item => {
					if( item.id == card.id && item.pivot.deckable_type == type ){
						item.pivot.quantity ++
					}
					return item
				})
				Deck.update({
					where: this.id,
					data: {
						cards
					}
				})
			} else {
				// card is not in the deck, add it
				var cards = this.clone(this.model.cards)
				cards.push({
					...card,
					pivot: {
						deck_id: this.id,
						deckable_id: card.id,
						deckable_type: type,
						quantity: 1
					}
				})
				
				Deck.update({
					where: this.id,
					data: {
						cards
					}
				}).then(() => this.copyLocal())
			}
		},
		removeCard(card){
			// decrease the quantity, remove if quantity drops to 0
			var cards = this.model.cards.map(item => {
				if( item.id == card.id && item.pivot.deckable_type == card.pivot.deckable_type ){
					item.pivot.quantity --
				}
				return item
			}).filter(item => item.pivot.quantity > 0)
			
			Deck.update({
				where: this.id,
				data: {
					cards
				}
			}).then(() => this.copyLocal())
		},
		cardType(card){
			switch (card.pivot.deckable_type){
				case "Weapon":
					return WeaponCard
				case "Armour":
					return ArmourCard
				case "Item":
					return ItemCard
				case "Spell":
					return SpellCard
				case "Skillbook":
					return SkillbookCard
				default: 
					return "nope"
			}
		}
	}
}
</script>
