<template>
	<b-form @submit="save" v-if="model">
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

import EditsLocalModelData from '@mixins/EditsLocalModelData'

export default {
    mixins: [
        EditsLocalModelData
    ],
	methods: {
		save(){
			Spell.api().put('/api/spell/' + this.id, this.model).then(
				response => {
					this.$emit('updated', response.response.data.data)
				}
			)
		},
        copyLocal(){
            this.model = JSON.parse(JSON.stringify(Spell.find(this.id)))
        }
	}
}
</script>
