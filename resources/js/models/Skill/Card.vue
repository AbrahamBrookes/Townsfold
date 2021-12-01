<template>
	<div class="card weapon-card row" @click="edit">
		<div class="col-12">
			<h1>
				{{ card.name }}
				<span class="float-right">
					{{ card.cost }}
				</span>
			</h1>
		</div>
		<div class="image">
		</div>
		<fieldset v-if="card.effect.length" class="col-12">
			<legend>effect</legend>
			{{ card.effect }}
		</fieldset>
		<fieldset v-if="card.flavour_text.length" class="col-12">
			{{ card.flavour_text }}
		</fieldset>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			required: true
		}
	},
	methods: {
		edit(){
			this.$router.push({
				name: 'editSkill',
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
