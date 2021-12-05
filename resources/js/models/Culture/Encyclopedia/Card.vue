<template>
    <div class="culture-encyclopedia-card encyclopedia-card">
        <div class="card-header">
            <div class="card-header-title">
                <span class="card-header-title-text">{{ item.nation_name }}</span>
            </div>
            <div class="card-header-image">
                <img :src="imageUrl" width="50px" alt="">
            </div>
        </div>
        <div class="card-body">
            <div class="card-body-content">
                <div class="card-body-content-description">
                    <span class="card-body-content-description-text">Language: {{ item.language }}</span>
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
            return `/img/icon-culture.png`;
        }
    }
}
</script>

<style>

</style>