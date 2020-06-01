// dependency: //
<template>
  <nav>
    <v-layout column wrap class="align-center mb-5">
      <v-flex class="mt-5">
        <v-avatar size="100">
          <img :src="require('~/static/img/avatar.jpg')" alt="avatar" />
        </v-avatar>
      </v-flex>
    </v-layout>
    <v-list-item-group v-model="curItem">
      <v-list-item
        v-for="(item, index) in links"
        :key="index"
        nuxt
        rounded
        :to="item.href"
        color="grey lighten-3"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </nav>
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
<style scoped></style>
