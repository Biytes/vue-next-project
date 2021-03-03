<template>
    <NavHeader />

    <section class="content">
        <router-view />
    </section>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
export default {
    components: {
        NavHeader
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
