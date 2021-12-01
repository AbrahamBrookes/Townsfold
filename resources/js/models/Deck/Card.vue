<template>
	<div class="card weapon-card row" @click="edit">
		<div class="col-12">
			<h1>
				{{ card.name }}
			</h1>
		</div>
		<div class="image">
		</div>
		<fieldset v-if="card.description.length" class="col-12">
			{{ card.description }}
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
				name: 'editDeck',
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
