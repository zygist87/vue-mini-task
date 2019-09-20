<template>
  <div class="app-card">
      <h1 class="card-title">CONTACTS</h1>
      <form action="">
        <label for="">Name</label><br/>
        <input class="input-name" type="text" v-model="posts.name"><br/>
        <label for="">Message</label><br/>
        <textarea class="input-message" name="" id="" cols="100" rows="5" v-model="posts.message"></textarea><br/>
        <button type="button" class="button" @click="toLocalStorage">Submit</button>
      </form>
      <p>{{this.posts.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'ContactsView',
  data () {
    return {
      posts: {
        name: '',
        message: ''
      }
    }
  },
  methods: {
    toLocalStorage () {
      localStorage.setItem('posts', JSON.stringify(this.posts))
    }
  }
}
</script>

<style lang="scss">
.app-card {
  padding-top: 40px;
  //width: 100vw;
  // max-width: 100%;
}
.card-title {
  font-size: 24px;
  font-weight: 600;
}
input {
  border: 1px solid black;
  border-radius: 2px;
  margin-bottom: 20px;
}
.input-name {
  width: 200px;
  height: 20px;
}
.input-message {
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
}
.button {
  -webkit-appearance: none;
  background-color: #3252e5;
  color: white;
  border-radius: 4px;
  border: 0;
  text-transform: uppercase;
  font-size: 0.75rem;
  transition: 0.2s opacity ease;
  width: 100px;
  height: 24px;
  line-height: 26px;

  &:focus {
    outline: 0;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.5;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
