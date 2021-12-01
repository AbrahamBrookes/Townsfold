<template>
    <div class="row">
        
        <div class="col-12 text-right">
            <router-link
                :to="{
                    name: 'createSkillbook'
                }"
            >
                Create new
            </router-link>
        </div>

		<div
			v-for="skillbook in skillbooks"
			:key="skillbook.id"
			class="col-sm-6 col-md-4 col-lg-3 mb-2"
            @click.stop.prevent="clicked(skillbook)" 
		>
			<card :card="skillbook" />
        </div>
    </div>
</template>

<script>
import Skillbook from '@Skillbook'
import Card from '@Skillbook/Card'
export default {
	components: {
		Card
	},
    computed: {
        skillbooks(){
            return Skillbook.query().with('skills').get()
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
