<template>
	<div class="card armour-card row">
		<div class="col-12">
			<h1>{{ card.name }}</h1>
		</div>
		<div class="card-type">Skillbook</div>
		<fieldset v-if="card.flavour_text.length" class="col-12">
			<i>"{{ card.flavour_text }}"</i>
		</fieldset>
		<fieldset class="col-12">
			<legend>skills</legend>
			<div v-for="skill in skills" :key="skill.id">
				<h2 class="mt-2">{{ skill.name }} <span class="float-right">{{ skill.cost }}</span></h2>
				<i class="small">"{{ skill.effect }}"</i>
				<hr />
			</div>
		</fieldset>
		<div class="col-12" @click="edit">
			<a href="javascript:;">edit</a>
		</div>
	</div>
</template>

<script>
import Skillbook from '@Skillbook'
export default {
	props: {
		card: {
			required: true
		}
	},
	computed: {
		skills(){
			return Skillbook.query().with('skills').find(this.card.id).skills
		}
	},
	methods: {
		edit(){
			this.$router.push({
				name: 'editSkillbook',
				params: {
					id: this.card.id
				}
			})
		}
	}
}
</script>

<style>

</style>
