<template>
    <b-modal
        ref="encyclopediaModal"
        size="lg"
        modal-class="encyclopedia-modal"
    >
        <template v-slot:modal-header>
            <h4 class="modal-title">
                <i class="fas fa-book-open"></i>
                Encyclopedia
            </h4>
            <button
                type="button"
                class="close"
                @click="toggleEncyclopedia(false)"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </template>
        <template v-slot:default>
            <div class="row">
                <div class="col-2">
                    <div class="list-group">
                        <a
                            class="list-group-item list-group-item-action"
                            @click="goToTownList"
                        >
                            Towns
                        </a>
                    </div>
                </div>
                <div class="col-10">
                    <component 
                        :is="currentEncyclopediaPage.component" 
                        v-bind="currentEncyclopediaPage.bind" 
                    />
                </div>
            </div>
        </template>
    </b-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState([
            'encyclopediaVisible',
            'currentEncyclopediaPage',
        ]),
    },
    methods: {
        ...mapMutations([
            'toggleEncyclopedia',
            'setCurrentEncyclopediaPage'
        ]),
        goToTownList() {
            this.setCurrentEncyclopediaPage({
                component: () => import('@Town/Encyclopedia/List.vue'),
                bind: {}
            })
        },
    },
    watch: {
        encyclopediaVisible(newValue) {
            if (newValue) {
                this.$refs.encyclopediaModal.show()
            } else {
                this.$refs.encyclopediaModal.hide()
            }
        }
    }
}
</script>

<style lang="scss">
.encyclopedia-modal {
    .modal-dialog {
        max-width: 1440px;
    }
}
</style>