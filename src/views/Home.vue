<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="login" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  methods: {
    ...mapActions("userStore", ["getLogin"]),
    async login() {
      await this.getLogin({
        name: "admin2",
        password: "123456",
      });
      console.log(1111111);
    },
  },
  mounted() {
    // this.getLogin({
    //   name:"admin2",
    //   password:"123456"
    // })
  },
};
</script>
