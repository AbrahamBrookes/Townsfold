<template>
	<b-form @submit="save" v-if="model">
		<b-form-group
			label="Name"
		>
			<b-form-input v-model="model.name" />
		</b-form-group>

		<b-form-group
			label="Damage"
		>
			<b-form-input v-model="model.damage" />
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
			label="Weapon Type"
		>
            <b-form-select
                class="form-control"
                v-model="model.weapon_type_id"
                :options="weapon_types"
            ></b-form-select>
        </b-form-group>

		<b-button @click="save">Submit</b-button>

	</b-form>
</template>

<script>
import Weapon from '@Weapon'
import WeaponType from '@WeaponType'

import EditsLocalModelData from '@mixins/EditsLocalModelData'

export default {
    mixins: [
        EditsLocalModelData
    ],
    computed: {
        weapon_types(){
            return WeaponType.all().map(item => {
                return {
                    value: item.id,
                    text: item.name
                }
            })
        }
    },
	methods: {
		save(){
			Weapon.api().put('/api/weapon', this.model)
		},
        copyLocal(){
            this.model = JSON.parse(JSON.stringify(Weapon.find(this.id)))
        }
	},

}
</script>
