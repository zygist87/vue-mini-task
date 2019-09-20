<template>
  <div>
    <AppNavigation/>
    <AppHeader>ŽYGIMANTAS TVERAGA</AppHeader>
    <!-- cia kolkas zemiau nesamone nes norejau pasidaryti animacijas -->
    
      <RouteTransition><RouterView class="app-routing"/></RouteTransition>
    
    <AppFooter/>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import RouteTransition from '@/components/RouteTransition'

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppHeader,
    AppFooter,
    RouteTransition
  }
}
</script>

<style lang="scss">
.app-routing {
  position: absolute;
  top: 220px;
  margin-left: 10%;
  margin-right: 10%;
  max-width: 1000px;
  height: auto;
  padding-bottom: 20px;
  border: 2px solid white;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 5px 8px 12px #888888;
}
</style>
