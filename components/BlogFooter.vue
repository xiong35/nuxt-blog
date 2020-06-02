// dependency: //
<template>
  <v-row class="pa-6 text-center grey--text text--darken-2">
    <contributors></contributors>
    <friends></friends>
    <social></social>
    <Licences></Licences>
  </v-row>
</template>

<script>
  import Friends from "~/components/footer/Friends";
  import Contributors from "~/components/footer/Contributors";
  import Social from "~/components/footer/Social";
  import Licences from "~/components/footer/Licences";

  export default {
    name: "BlogFooter",
    components: {
      Friends,
      Contributors,
      Social,
      Licences,
    },
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
