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
  import Friends from "~/components/TheFooter/Friends";
  import Contributors from "~/components/TheFooter/Contributors";
  import Social from "~/components/TheFooter/Social";
  import Licences from "~/components/TheFooter/Licences";

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
