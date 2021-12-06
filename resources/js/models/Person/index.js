// Person Model

import { Model } from '@vuex-orm/core'

import Household from '@Household'
import Skill from '@Skill'
import Job from '@Job'

export default class Person extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'person'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			household_id: this.attr(''),
			household: this.belongsTo(Household, 'household_id'),
			spouse_id: this.attr(''),
			spouse: this.belongsTo(Person, 'spouse_id'),
			mother_id: this.attr(''),
			mother: this.belongsTo(Person, 'mother_id'),
			father_id: this.attr(''),
			father: this.belongsTo(Person, 'father_id'),
			gender: this.attr(''),
			age: this.attr(''),
			skills: this.hasMany(Skill, 'person_id'),
			job: this.hasMany(Job, 'employee_id')
		}
	}

	static apiConfig = {
		baseURL: '/api/person',
	}
}
