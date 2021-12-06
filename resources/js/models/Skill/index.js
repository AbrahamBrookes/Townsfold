// Skill Model

import { Model } from '@vuex-orm/core'

import SkillType from '@SkillType'
import Person from '@Person'

export default class Skill extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'skill'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			person_id: this.attr(null),
			person: this.belongsTo(Person, 'person_id'),
			name: this.attr(''),
			description: this.attr(''),
			level: this.attr(''),
			skill_type_id: this.attr(null),
			skill_type: this.belongsTo(SkillType, 'skill_type_id'),
		}
	}

	static apiConfig = {
		baseURL: '/api/skill',
	}
}
