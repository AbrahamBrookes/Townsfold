<template>
	<b-form @submit="save">
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

	</b-form>
</template>

<script>
import Deck from '@Deck'

export default {
	data(){
		return {
			model: {
				name: '',
				description: '',
			}
		}
	},
	methods: {
		save(){
			Deck.api().post('/api/deck', this.model).then(
				response => {
					this.$emit('created', response.response.data.data)
				}
			)
		}
	}
}
</script>
