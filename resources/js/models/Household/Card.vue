<template>
	<div class="card armour-card row">
		<div class="col-12">
			<h1>{{ card.name }}</h1>
		</div>
		<div class="image">
		</div>
		<div class="card-type">Armour</div>
		<fieldset v-if="card.effect.length" class="col-12">
			<legend>effect</legend>
			{{ card.effect }}
		</fieldset>
		<fieldset v-if="card.flavour_text.length" class="col-12">
			<i>"{{ card.flavour_text }}"</i>
		</fieldset>
		<div class="col-12 small text-right">
			{{ card.defense }} DEF
		</div>
		<div class="col-12" @click="edit">
			<a href="javascript:;">edit</a>
		</div>
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
				name: 'editArmour',
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
