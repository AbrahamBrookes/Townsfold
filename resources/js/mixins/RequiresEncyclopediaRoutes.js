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
        goToFamilyList() {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Family/Encyclopedia/List.vue'),
                bind: {}
            })
        },
        goToFamilyView(id) {
            this.$store.commit('setCurrentEncyclopediaPage', {
                component: () => import('@Family/Encyclopedia/View.vue'),
                bind: { id }
            })
        },
    },
}