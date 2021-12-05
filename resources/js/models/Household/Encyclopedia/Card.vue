<template>
    <div class="card p-0 mb-4 household-encyclopedia-card encyclopedia-card">
        <div class="card-header">
            <div class="card-header-title">
                <span class="card-header-title-text">{{ item.surname }} household</span>
            </div>
        </div>
        <div class="card-body">
            <div class="card-body-content">
                <div class="card-body-content-description">
                    <span class="card-body-content-description-text">{{ members.length }} members</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Person from '@Person'
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        imageUrl() {
            return `/img/icon-household.png`;
        },
        members(){
            return Person.query().where('household_id', this.item.id).get()
        }
    }
}
</script>

<style>

</style>