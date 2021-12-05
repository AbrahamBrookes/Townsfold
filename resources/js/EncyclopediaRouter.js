import VueRouter from 'vue-router'

// const ListCultures = () => import('@Culture/List.vue')
// const CreateCulture = () => import('@Culture/Create.vue')
// const EditCulture = () => import('@Culture/Edit.vue')

const TownEncyclopediaPage = () => import('@Town/Encyclopedia.vue')

const routes = [
    // items
	{
		name: 'listItems',
		path: '/items',
		component: ListItems,
	},
    {
        name: 'town',
        path: '/town',
        component: TownEncyclopediaPage,
    }
]


const EncyclopediaRouter = new VueRouter({
	routes
})

export default EncyclopediaRouter
