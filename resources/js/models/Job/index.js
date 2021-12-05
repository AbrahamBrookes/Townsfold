// Job Model

import { Model } from '@vuex-orm/core'

import JobType from '@JobType'
import Building from '@Building'
import Person from '@Person'

export default class Job extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'job'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			title: this.attr(''),
			description: this.attr(''),
			job_type_id: this.attr(null),
			job_type: this.belongsTo(JobType, 'job_type_id'),
			building_id: this.attr(''),
			building: this.belongsTo(Building, 'building_id'),
			employee_id: this.attr(''),
			employee: this.belongsTo(Person, 'employee_id'),
		}
	}

	static apiConfig = {
		baseURL: '/api/job',
	}
}
