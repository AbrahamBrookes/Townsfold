<template>
    <div class="action-menu">
        <div class="action-menu-header">
            {{ current_intro }}
        </div>
        <div class="action-menu__item" v-for="item in items" :key="item.id">
            <a :href="item.href" :class="item.class" :title="item.title">
                <i :class="item.icon"></i>
                <span>{{ item.text }}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        current_intro() {
            return 'asdasdasd'
        }
    }
}
</script>

<style>

</style>