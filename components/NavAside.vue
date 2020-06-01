// dependency: //
<template>
  <v-list nav class="nav-aside">
    <v-list-item class="d-flex justify-center mb-6">
      <v-avatar size="100">
        <img :src="require('~/static/img/avatar.jpg')" alt="avatar" />
      </v-avatar>
    </v-list-item>
    <v-list-item-group>
      <v-list-item
        v-for="(item, index) in links"
        :key="index"
        nuxt
        :to="item.href"
        class="nav-item"
        active-class="cyan--text accent-3"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
  import links from "~/assets/links";

  export default {
    name: "NavAside",
    components: {},
    data() {
      return { links };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
  };
</script>
<style scoped>
  .nav-aside {
    width: 100%;
  }
  .nav-item {
    border-left: 3px solid #3cd1c2;
  }
</style>
