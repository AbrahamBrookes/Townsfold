<template>
	<b-form @submit="save">
		<b-form-group
			label="Name"
		>
			<b-form-input v-model="model.name" />
		</b-form-group>

		<b-form-group
			label="Cost"
		>
			<b-form-input v-model="model.cost" />
		</b-form-group>

		<b-form-group
			label="Effect"
		>
			<b-form-input v-model="model.effect" />
		</b-form-group>

		<b-form-group
			label="Flavour text"
		>
			<b-form-input v-model="model.flavour_text" />
		</b-form-group>

		<b-button @click="save">Submit</b-button>

	</b-form>
</template>

<script>
import Skill from '@Skill'

export default {
	props: {
		skillbookId: {
			required: true
		}
	},
	data(){
		return {
			model: {
				name: '',
				cost: '',
				effect: '',
				flavour_text: '',
				skillbook_id: this.skillbookId
			}
		}
	},
	methods: {
		save(){
			Skill.api().post('/api/skill', this.model).then(
				response => {
					this.$emit('created', response.response.data.data)
				}
			)
		}
	}
}
</script>
