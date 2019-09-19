<template>
  <div class="app-header">
      <div class="app-header--name"><slot/></div><br/>
      <div class="app-header--portfolio">Portfolio</div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss">
.app-header {
  width: 100vw;
  height: 20vh;
  background-color: #3252e5;
  color: white;
  display: block;
  text-align: center;
  &--name {
    font-size: 36px;
    font-weight: 600;
  }
  &--portfolio {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
