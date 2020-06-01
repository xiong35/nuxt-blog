<template>
  <v-app>
    <nav-bars></nav-bars>
    <v-content>
      <v-container class="ma-10">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NavBars from "~/components/NavBars";

  export default {
    components: {
      NavBars,
    },
    data() {
      return {};
    },
  };
</script>
