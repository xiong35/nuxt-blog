<template>
  <v-app>
    <nav-bars></nav-bars>
    <v-content>
      <v-row class="pa-md-6">
        <v-col class="pa-4 d-none d-md-flex col-md-3">
          <nav-aside />
        </v-col>
        <v-col class="pa-4 col-12 col-md-9">
          <nuxt />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
  import NavBars from "~/components/NavBars";
  import NavAside from "~/components/NavAside";

  export default {
    components: {
      NavBars,
      NavAside,
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
