import VueRouter from 'vue-router'

const ListCharacters = () => import('@Character/List.vue')
const CreateCharacter = () => import('@Character/Create.vue')
const EditCharacter = () => import('@Character/Edit.vue')

const ListSkillbooks = () => import('@Skillbook/List.vue')
const CreateSkillbook = () => import('@Skillbook/Create.vue')
const EditSkillbook = () => import('@Skillbook/Edit.vue')

const EditSkill = () => import('@Skill/Edit.vue')

const ListWeapons = () => import('@Weapon/List.vue')
const CreateWeapon = () => import('@Weapon/Create.vue')
const EditWeapon = () => import('@Weapon/Edit.vue')

const ListArmour = () => import('@Armour/List.vue')
const CreateArmour = () => import('@Armour/Create.vue')
const EditArmour = () => import('@Armour/Edit.vue')

const ListSpells = () => import('@Spell/List.vue')
const EditSpell = () => import('@Spell/Edit.vue')
const CreateSpell = () => import('@Spell/Create.vue')

const ListItems = () => import('@Item/List.vue')
const EditItem = () => import('@Item/Edit.vue')
const CreateItem = () => import('@Item/Create.vue')

const ListDecks = () => import('@Deck/List.vue')
const EditDeck = () => import('@Deck/Edit.vue')
const CreateDeck = () => import('@Deck/Create.vue')

const Rules = () => import('@pages/Rules.vue')
const Play = () => import('@pages/Play.vue')

const routes = [
    // items
	{
		name: 'listItems',
		path: '/items',
		component: ListItems,
	},
	{
		name: 'createItem',
		path: '/item/new',
		component: CreateItem,
	},
	{
		name: 'editItem',
		path: '/item/:id',
		component: EditItem,
		props: true
	},

    // spells
	{
		name: 'listSpells',
		path: '/spells',
		component: ListSpells,
	},
	{
		name: 'createSpell',
		path: '/spell/new',
		component: CreateSpell,
	},
	{
		name: 'editSpell',
		path: '/spell/:id',
		component: EditSpell,
		props: true
	},

    // decks
	{
		name: 'listDecks',
		path: '/decks',
		component: ListDecks,
	},
	{
		name: 'createDeck',
		path: '/deck/new',
		component: CreateDeck,
	},
	{
		name: 'editDeck',
		path: '/deck/:id',
		component: EditDeck,
		props: true
	},

    // weapons
	{
		name: 'listWeapons',
		path: '/weapons',
		component: ListWeapons,
	},
	{
		name: 'createWeapon',
		path: '/weapon/new',
		component: CreateWeapon,
	},
	{
		name: 'editWeapon',
		path: '/weapon/:id',
		component: EditWeapon,
		props: true
	},

    // armours
	{
		name: 'listArmour',
		path: '/armour',
		component: ListArmour,
	},
	{
		name: 'createArmour',
		path: '/armour/new',
		component: CreateArmour,
	},
	{
		name: 'editArmour',
		path: '/armour/:id',
		component: EditArmour,
		props: true
	},

    // skillbooks
	{
		name: 'listSkillbooks',
		path: '/skillbooks',
		component: ListSkillbooks,
	},
	{
		name: 'createSkillbook',
		path: '/skillbook/new',
		component: CreateSkillbook,
	},
	{
		name: 'editSkillbook',
		path: '/skillbook/:id',
		component: EditSkillbook,
		props: true
	},

    // characters
	{
		name: 'listCharacters',
		path: '/characters',
		component: ListCharacters,
	},
	{
		name: 'createCharacter',
		path: '/character/new',
		component: CreateCharacter,
	},
	{
		name: 'editCharacter',
		path: '/character/:id',
		component: EditCharacter,
		props: true
	},

    // skills
	{
		name: 'editSkill',
		path: '/skill/:id',
		component: EditSkill,
		props: true
	},

    // base pages
	{
		name: 'play',
		path: '/play',
		component: Play,
		props: true
	},
	{
		name: 'rules',
		path: '/rules',
		component: Rules,
		props: true
	},
]


const router = new VueRouter({
	routes
})

export default router
