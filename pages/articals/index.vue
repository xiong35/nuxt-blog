// dependency: //
<template>
  <div class="index">
    <v-tabs v-model="tab" color="indigo accent-3">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <artical-list :tab="tab" :type="item"></artical-list>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import articalList from "~/components/articals/articalList";
  import { getTags } from "~/network/artical";

  export default {
    name: "index",
    components: {
      articalList,
    },
    data() {
      return {
        tab: 0,
        items: ["文章", "踩坑记录", "日记"],
      };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    async asyncData() {
      let { data } = await getTags();
      return { tags: data };
    },
  };
</script>
<style scoped></style>
