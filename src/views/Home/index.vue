<template>
  <div class="app-card">
    <h1 class="card-title">PROJECTS</h1>
    <ul v-for="project in projects" :key="project.name">
      <li>
        <img :src="project.url" alt="">
        <p>{{project.name}}</p>
        </li>
    </ul>
    <img src="../../assets/images/moto.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      projects: [
        { name: 'Moto Project', url: '../../assets/images/moto.jpg', altt: 'black moto' },
        { name: 'Space Project', url: '../../assets/images/space.jpg', altt: 'dark space' },
        { name: 'Beach Project', url: '../../assets/images/beach.jpg', altt: 'sunny beach' }
      ]
    }
  }
}
</script>

<style lang="scss">
.app-card {
  padding-top: 40px;
  padding-left: 40px;
}
.card-title {
  font-size: 24px;
  font-weight: 600;
}
img {
  width: 150px;
  height: 200px;
}
</style>
