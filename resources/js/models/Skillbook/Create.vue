<template>
	<b-form @submit="save">
		<b-form-group
			label="Name"
		>
			<b-form-input v-model="model.name" placeholder="Skillbook name" />
		</b-form-group>

		<b-form-group
			label="Flavour text"
		>
			<b-form-input v-model="model.flavour_text" placeholder="Flavour text" />
		</b-form-group>

		<b-button @click="save">Submit</b-button>

	</b-form>
</template>

<script>
import Skillbook from '@Skillbook'

export default {
	data(){
		return {
			model: {
				name: '',
				flavour_text: '',
			}
		}
	},
	methods: {
		save(){
			Skillbook.api().post('/api/skillbook', this.model).then(
				response => {
					this.$router.push({
						name: 'editSkillbook',
						params: {
							id: response.response.data.data.id
						}
					})
				}
			)
		}
	}
}
</script>
