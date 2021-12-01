<template>
    <div class="d-flex flex-row">
        <div class="d-flex flex-column">
	        <nav-menu></nav-menu>
        </div>

        <div class="d-flex flex-column flex-grow-1">
	        <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavMenu from './layout/NavMenu.vue'

export default {
	components: {
		NavMenu
	}
}
</script>
