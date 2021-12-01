<template>
    <div class="row">
		<div
			v-for="item in items"
			:key="item.id"
			class="col-sm-6 col-md-4 col-lg-3 mb-2"
            @click.stop.prevent="clicked(item)" 
		>
			<card :card="item" />
        </div>

        <router-link
            :to="{
                name: 'createItem'
            }"
        >
            Create new
        </router-link>
    </div>
</template>

<script>
import Item from '@Item'
import Card from '@Item/Card'
export default {
	components: {
		Card
	},
    computed: {
        items(){
            return Item.all()
        }
    },
    methods: {
        clicked(card){
            this.$emit('clicked', card)
        }
    }
}
</script>

<style>

</style>
