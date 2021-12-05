<template>
    <div class="town-encyclopedia-card encyclopedia-card">
        <div class="card-header">
            <div class="card-header-title">
                <span class="card-header-title-text">{{ item.name }}</span>
            </div>
            <div class="card-header-image">
                <img :src="imageUrl" width="50px" alt="">
            </div>
        </div>
        <div class="card-body">
            <div class="card-body-content">
                <div class="card-body-content-title">
                    <span class="card-body-content-title-text">{{ item.name }}</span>
                </div>
                <div class="card-body-content-description">
                    <span class="card-body-content-description-text">{{ item.description }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        imageUrl() {
            return `/img/icon-town.png`;
        }
    }
}
</script>

<style>

</style>