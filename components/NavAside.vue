// dependency: //
<template>
  <v-list nav class="nav-aside">
    <v-list-item class="d-flex justify-center mb-6">
      <v-avatar size="100">
        <img :src="require('~/static/img/avatar.jpg')" alt="avatar" />
      </v-avatar>
    </v-list-item>

    <v-list-item class="d-flex justify-center mb-4">
      <v-skeleton-loader
        v-if="meta.length == 0"
        type="paragraph"
        min-width="150"
      ></v-skeleton-loader>
      <v-simple-table dense v-else>
        <template v-slot:default>
          <tbody>
            <tr v-for="(item, index) in meta" :key="index">
              <td>{{ item.key }}</td>
              <td>{{ item.value + " " + item.addition }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
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
  import { getMeta } from "~/network/meta";

  export default {
    name: "NavAside",
    components: {},
    data() {
      return { links, meta: [] };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    async mounted() {
      let { data } = await getMeta();

      let new_date = new Date();
      let old_date = new Date("2020-5-12 12:00:00");

      let difftime = new_date - old_date;
      let day = Math.round(difftime / 24 / 60 / 60 / 1000);

      data.push({ key: "站点存活", value: day, addition: "天" });

      this.meta = data;
    },
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
