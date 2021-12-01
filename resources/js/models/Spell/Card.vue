<template>
	<div class="card weapon-card row">
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
		<div class="card-type">Spell</div>
		<fieldset v-if="card.effect.length" class="col-12">
			<legend>effect</legend>
			{{ card.effect }}
		</fieldset>
		<fieldset v-if="card.flavour_text.length" class="col-12">
			{{ card.flavour_text }}
		</fieldset>
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
				name: 'editSpell',
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
