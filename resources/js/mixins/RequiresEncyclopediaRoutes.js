export default {
    methods: {
        goToTownList() {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Town/Encyclopedia/List.vue'),
                bind: {}
            })
        },
        goToTownView(id) {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Town/Encyclopedia/View.vue'),
                bind: { id }
            })
        },
        goToCultureList() {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Culture/Encyclopedia/List.vue'),
                bind: {}
            })
        },
        goToCultureView(id) {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Culture/Encyclopedia/View.vue'),
                bind: { id }
            })
        },
        goToHouseholdList() {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Household/Encyclopedia/List.vue'),
                bind: {}
            })
        },
        goToHouseholdView(id) {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Household/Encyclopedia/View.vue'),
                bind: { id }
            })
        },
        goToBuildingList() {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Building/Encyclopedia/List.vue'),
                bind: {}
            })
        },
        goToBuildingView(id) {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Building/Encyclopedia/View.vue'),
                bind: { id }
            })
        },
        goToPersonList() {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Person/Encyclopedia/List.vue'),
                bind: {}
            })
        },
        goToPersonView(id) {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Person/Encyclopedia/View.vue'),
                bind: { id }
            })
        },
    },
}