<template>
	<div class="card character-card row pb-2">
		<div class="col-12">
			<h1>{{ card.name }}</h1>
		</div>
		<div class="image">
		</div>
		<fieldset v-if="card.backstory.length" class="col-12">
			<legend>backstory</legend>
			{{ card.backstory }}
		</fieldset>
		<div class="col-12">
			<div class="row">
				<div class="col-8">Attack</div>
				<div class="col-4 text-right">{{ card.attack }}</div>
				<div class="col-8">Defense</div>
				<div class="col-4 text-right">{{ card.defense }}</div>
				<div class="col-8">Life</div>
				<div class="col-4 text-right">{{ card.life }}</div>
				<div class="col-8">Mana</div>
				<div class="col-4 text-right">{{ card.mana }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			required: true
		}
	}
}
</script>

<style>

</style>
