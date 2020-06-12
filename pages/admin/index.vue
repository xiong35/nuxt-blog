// dependency: //
<template>
  <div class="index">
    index
  </div>
</template>

<script>
  import checkAuth from "~/utils/checkAuth";

  export default {
    name: "index",
    layout: "admin",
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {
      checkAuth(this.$router);
    },
  };
</script>
<style scoped></style>
