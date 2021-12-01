<template>
	<b-form @submit="save">
		<b-form-group
			label="Name"
		>
			<b-form-input v-model="model.name" />
		</b-form-group>

		<b-form-group
			label="Flavour text"
		>
			<b-form-input v-model="model.flavour_text" />
		</b-form-group>

		<hr />

		<b-button @click="save">Submit</b-button>

		<h3>Create a new skill for this skillbook</h3>
		<create-skill
			:skillbook-id="id"
			@created="addSkill"
		></create-skill>

		<div v-if="skills.length" class="row">
			<h3 class="col-12">Skills in this skillbook</h3>
			<div
				v-for="skill in skills"
				:key="skill.id"
				class="col-sm-6 col-md-4 col-lg-3 mb-2"
			>
				<card :card="skill" />
			</div>
		</div>


	</b-form>
</template>

<script>
import Skillbook from '@Skillbook'
import Skill from '@Skill'

import CreateSkill from '@Skill/Create'
import EditSkill from '@Skill/Edit'
import Card from '@Skill/Card'

export default {
	props: {
		id: {
			required: true
		}
	},
	components: {
		CreateSkill,
		EditSkill,
		Card
	},
	data(){
		return {
			model: {
				name: '',
				flavour_text: '',
				skills: [],
			}
		}
	},
	computed: {
		skills(){
			return this.model.skills
		}
	},
	methods: {
		save(){
			Skillbook.api().put('/api/skillbook/' + this.id, this.model)
		},
		load(){
			Skillbook.api().get('/api/skillbook/' + this.id).then(
				response => {
					this.model = response.response.data.data
				}
			)
		},
		addSkill(skill){
			this.model.skills.push(skill)
		}
	},
	mounted(){
		this.load()
	}
}
</script>
