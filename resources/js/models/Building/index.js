// Town Model

import { Model } from '@vuex-orm/core'

import Town from '@Town'
import Job from '@Job'
import BuildingType from '@BuildingType'
import BuildingJob from '@BuildingJob'

export default class Building extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'building'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			town_id: this.attr(''),
			town: this.belongsTo(Town, 'town_id'),
			building_type_id: this.attr(''),
			building_type: this.belongsTo(BuildingType, 'building_type_id'),
			jobs: this.belongsToMany(Job, BuildingJob, 'building_id', 'job_id')
		}
	}

	static apiConfig = {
		baseURL: '/api/building',
	}
}
