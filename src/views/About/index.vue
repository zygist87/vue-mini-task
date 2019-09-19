<template>
  <div class="app-card">
    <h1 class="card-title">ABOUT ME</h1>
    <p class="about-me">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <RouterLink class="about-me--link" :to="{name: 'About:Education'}" exact>Education</RouterLink>
      <RouterLink class="about-me--link" :to="{name: 'About:Career'}" exact>Career</RouterLink>
      <RouterLink class="about-me--link" :to="{name: 'About:Skills'}" exact>Skills</RouterLink>
      <RouterView/>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
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
.about-me {
  margin-right: 20px;
  &--link {
    text-decoration: none;
    padding-right: 20px;
    color: black;
  }
}
.router-link-active {
  color: #37e9b8;
  text-decoration: underline;
}
</style>
