// BuildingType Model

import { Model } from '@vuex-orm/core'

import JobType from '@JobType'
import BuildingTypeJobType from '@BuildingTypeJobType'

export default class BuildingType extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'building_type'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			description: this.attr(''),
			job_types: this.belongsToMany(JobType, BuildingTypeJobType, 'building_type_id', 'job_type_id')
		}
	}

	static apiConfig = {
		baseURL: '/api/building_type',
	}
}
