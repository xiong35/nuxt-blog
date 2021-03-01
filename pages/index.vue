// dependency: //
<template>
  <div class="index"></div>
</template>

<script>
  import works from "~/assets/myData/works";

  export default {
    middleware: "redirect",
    name: "index",
    components: {},
    data() {
      return {
        works,
      };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
  };
</script>
<style scoped></style>
