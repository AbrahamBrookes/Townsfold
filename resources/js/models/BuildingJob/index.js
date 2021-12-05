// BuildingJob Model

import { Model } from '@vuex-orm/core'

export default class BuildingJob extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'building_job'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			building_id: this.attr(''),
			job_id: this.attr(''),
		}
	}

	static apiConfig = {
		baseURL: '/api/building_job',
	}
}
