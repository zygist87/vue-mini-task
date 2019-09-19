<template>
  <div>
    <AppNavigation/>
    <AppHeader>ŽYGIMANTAS TVERAGA</AppHeader>
    <RouterView class="app-routing"/>
    <AppFooter/>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.app-routing {
  position: absolute;
  top: 260px;
  left: 100px;
  z-index: 1;
  box-sizing: border-box;
  width: 800px;
  height: 380px;
  border: 2px solid white;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 5px 8px 12px #888888;
}
</style>
