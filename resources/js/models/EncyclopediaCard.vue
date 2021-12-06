<template>
    <div :class="'card p-0 mb-4 encyclopedia-card ${cardClass}-encyclopedia-card'">
        <div class="card-header">
            <div class="card-header-title">
                <span class="card-header-title-text">
                    <slot name="title"></slot>
                </span>
            </div>
        </div>
        <div class="card-body">
            <div class="card-body-content">
                <div class="card-body-content-description">
                    <span class="card-body-content-description-text">
                        <slot name="description"></slot>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Model } from '@vuex-orm/core'
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        model: {
            type: Model,
            required: true
        }
    },
    computed: {
        imageUrl() {
            return `/img/icon-household.png`;
        },
        members(){
            return Person.query().where('household_id', this.item.id).get()
        },
        cardClass(){
            return this.model.entity
        }

    }
}
</script>

<style>

</style>