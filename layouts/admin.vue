// dependency: //
<template>
  <v-app>
    <v-app-bar flat app>
      <v-btn @click="$router.push('/')" color="grey darken-2" text>
        <v-icon left>mdi-arrow-left-bold-box-outline</v-icon>BACK
      </v-btn>
      <v-toolbar-title class="font-weight-thin grey--text text--darken-2">
        🧸 Xiong<sup>35 </sup>'s Blog Admin
      </v-toolbar-title>
    </v-app-bar>
    <v-content class="pa-md-10 mt-9 pa-5 grey text-center lighten-4">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "admin",
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
  };
</script>
<style scoped></style>
