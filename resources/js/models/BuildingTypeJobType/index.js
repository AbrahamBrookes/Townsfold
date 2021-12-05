// BuildingTypeJobType Model

import { Model } from '@vuex-orm/core'

export default class BuildingTypeJobType extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'building_type_job_type'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			building_type_id: this.attr(''),
			job_type_id: this.attr(''),
		}
	}

	static apiConfig = {
		baseURL: '/api/building_type_job_type',
	}
}
