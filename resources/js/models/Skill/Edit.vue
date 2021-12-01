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
		id: {
			required: true,
		}
	},
	data(){
		return {
			model: JSON.parse(JSON.stringify(this.skill))
		}
	},
	methods: {
		save(){
			Skill.api().put('/api/skill/' + this.skill.id, this.model).then(
				response => {
					this.$emit('updated', response.response.data.data)
				}
			)
		}
	}
}
</script>
