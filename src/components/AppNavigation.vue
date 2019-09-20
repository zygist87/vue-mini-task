<template>
  <header class="app-header">
      <nav class="app-navigation">
          <ul class="app-link">
              <li>
                <RouterLink
                    class="app-link"
                    v-for="route in links"
                    :key="route.name"
                     :to="{name: route.name || route.meta.defaultName}" exact>
                    {{route.meta.displayName}}
                </RouterLink>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
import routes from '@/routes'
export default {
  name: 'AppNavigation',
  data () {
    return {
      routes
    }
  },
  computed: {
    links () {
      return this.routes.filter(route => route.meta.displayName)
    }
  }
}
</script>

<style lang="scss">
.app-header {
  height: 10vh;
  width: 100vw;
  background-color: #3252e5;
  color: white;
  list-style-type: none;
  margin: -16px 0 0 -8px;
}
.app-link {
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  margin-right: 40px;
}
.app-link {
  color: white;
  list-style-type: none;
  text-decoration: none;
  padding: 30px 10px 0 0;
}
.router-link-active {
  color: #37e9b8;
  text-decoration: underline;
}
</style>
