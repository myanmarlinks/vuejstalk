<template>
  <div class="container" id="app">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <button class="btn btn-success" @click="msg = 'Updated Hook'">Update Message</button>
    <button class="btn btn-danger" @click="remove">Destroy Instance</button>
    <!-- Data Properties Test -->    
    <h1>{{ id }}</h1>
    <h1>{{ fullName }}</h1>
    <!-- Computed Properties Test -->
    <h1>{{ fullName }} - {{ reverseName }}</h1>
    <!-- Watched Properties Test -->
    <div class="row justify-content-md-center">
      <div class="col-3">
        <input class="form-control" type="number" v-model="id" />
      </div>
    </div>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>ID: {{ user.id }}</p>
    <br>
    <br>
    <h1>Testing VueRouter</h1>
    <router-link class="btn btn-primary" :to="{ name: 'user-list' }">User List</router-link>
    <router-link class="btn btn-primary" :to="{ name: 'user-detail' }">User Detail</router-link>
    <router-link class="btn btn-success" :to="{ name: 'directives' }">Vue Directive</router-link>
    <router-view></router-view>
  </div>
  
  
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fullName: "Thiha Thura Myint Mo",
      id: "",
      user: {}
    }
  },
  computed: {
    reverseName() {
      return this.fullName.split('').reverse().join('')
    }
  },
  watch: {
    id() {
      this.getDataForUser()
    }
  },
  methods: {
    remove() {
      this.$destroy()
    },
    getDataForUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/' + this.id)
        .then(res => this.user = res.data)
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  // when 'Update Message' button is click beforeUpdate() and updated() will trigger
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  // when 'Destroy Instance' button is click beforeDestroy() and destroy() will triggered
  beforeDestroy() {
    console.log("beforeDestroy")  
  },
  destroyed() {
    console.log("destroyed")
  },
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
