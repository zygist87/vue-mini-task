<template>
  <div class="app-card">
    <h1 class="card-title">PROJECTS</h1>
    <ul class="list">
      <li class="list-item" v-for="project in projects" :key="project.name">
        <img :src="project.url" :alt="project.altt">
        <p>{{project.name}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      projects: [
        { name: 'Moto Project', url: require('../../assets/images/moto.jpg'), altt: 'black moto' },
        { name: 'Space Project', url: require('../../assets/images/space.jpg'), altt: 'dark space' },
        { name: 'Beach Project', url: require('../../assets/images/beach.jpg'), altt: 'sunny beach' }
      ]
    }
  }
}
</script>

<style lang="scss">
.app-card {
  padding-top: 40px;
  padding-left: 40px;
  width: 100vw;
}
.card-title {
  font-size: 24px;
  font-weight: 600;
}
img {
  width: 150px;
  height: 200px;
}
.list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 0.1rem;
  max-width: 100%;
  margin: 0 auto;
  // padding: 0 1rem;
}
.list-item {
  width: 200px;
  height: 250px;
  background-color: #3252e5;
  color: white;
  border: 1px solid #3252e5;
  border-radius: 4px;
  text-align: center;
  padding-top: 10px;
  margin: 0 10px 10px 10px;
}
</style>
