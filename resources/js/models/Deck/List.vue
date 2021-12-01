<template>
    <div class="row">
		<div
			v-for="deck in decks"
			:key="deck.id"
			class="col-sm-6 col-md-4 col-lg-3 mb-2"
		>
			<card :card="deck" />
        </div>

        <router-link
            :to="{
                name: 'createDeck'
            }"
        >
            Create new
        </router-link>
    </div>
</template>

<script>
import Deck from '@Deck'
import Card from '@Deck/Card'
export default {
	components: {
		Card
	},
    computed: {
        decks(){
            return Deck.all()
        }
    }

}
</script>

<style>

</style>
