<template>
	<b-form @submit="save" v-if="model">
		<b-form-group
			label="Name"
		>
			<b-form-input v-model="model.name" />
		</b-form-group>

		<b-form-group
			label="Defense"
		>
			<b-form-input v-model="model.defense" />
		</b-form-group>

		<b-form-group
			label="Effect"
		>
			<b-form-input v-model="model.effect" />
		</b-form-group>

		<b-form-group
			label="Flavour text"
		>
			<b-form-input v-model="model.flavour_text" />
		</b-form-group>

		<b-form-group
			label="Armour Type"
		>
            <b-form-select
                class="form-control"
                v-model="model.armour_type_id"
                :options="armour_types"
            ></b-form-select>
        </b-form-group>

		<b-button @click="save">Submit</b-button>

	</b-form>
</template>

<script>
import Armour from '@Armour'
import ArmourType from '@ArmourType'

import EditsLocalModelData from '../../mixins/EditsLocalModelData'

export default {
    mixins: [
        EditsLocalModelData
    ],
    computed: {
        armour_types(){
            return ArmourType.all().map(item => {
                return {
                    value: item.id,
                    text: item.name
                }
            })
        }
    },
	methods: {
		save(){
			Armour.api().put('/api/armour', this.model)
		},
        copyLocal(){
            this.model = JSON.parse(JSON.stringify(Armour.find(this.id)))
        }
	},

}
</script>
