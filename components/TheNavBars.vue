<template>
  <nav class="navbars">
    <v-app-bar flat app hide-on-scroll color="white">
      <v-app-bar-nav-icon
        class="grey--text text--darken-2"
        @click="drawer = !drawer"
      />
      <v-toolbar-title class="font-weight-thin grey--text text--darken-2">
        🧸 Xiong<sup>35 </sup>'s Blog
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey darken-2" @click.stop="login" text>
        <v-icon left>mdi-login-variant</v-icon>login
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="grey darken-4"
      hide-overlay
      dark
    >
      <v-subheader>站内导航</v-subheader>

      <nav-aside />
    </v-navigation-drawer>

    <v-layout column class="fab-container">
      <v-btn
        @click="drawer = !drawer"
        color="grey darken-2"
        fab
        small
        text
      >
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
      <v-btn @click="toggleDuck" fab color="grey darken-2" small text>
        <v-icon>mdi-duck</v-icon>
      </v-btn>
      <v-btn
        @click="$vuetify.goTo(0)"
        color="grey darken-2"
        fab
        small
        text
      >
        <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
      </v-btn>
    </v-layout>
  </nav>
</template>

<script>
  import NavAside from "~/components/NavAside";

  export default {
    name: "NavBars",
    components: { NavAside },
    data() {
      return { drawer: false };
    },
    computed: {},
    watch: {},
    methods: {
      toggleDuck() {
        this.$store.commit("toggleDuck");
      },
      login() {
        this.$nextTick(() => {
          this.$router.push("/admin/login");
        });
      },
    },
    created() {},
    mounted() {},
  };
</script>
<style scoped>
  .fab-container {
    position: fixed;
    right: 4vmin;
    bottom: 3vmin;
    z-index: 99;
  }
</style>
