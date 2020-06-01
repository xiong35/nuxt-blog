<template>
  <nav class="navbars">
    <v-app-bar flat app hide-on-scroll>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer" />
      <v-toolbar-title class="font-weight-thin grey--text">
        🧸 Xiong<sup>35 </sup>'s Blog
      </v-toolbar-title>
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
    methods: {},
    created() {},
    mounted() {},
  };
</script>
<style scoped></style>
