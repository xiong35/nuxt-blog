// dependency: //
<template>
  <div>
    <v-tabs v-model="tab" color="indigo accent-3">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-chip-group class="px-4" v-model="activeTags" column multiple>
      <v-chip
        filter
        outlined
        active-class="light-blue--text light-blue"
        v-for="(item, index) in tags"
        @click="chipClicked(item.tag_name)"
        :key="index"
      >
        {{ item.tag_name }}
        <sup>
          <small>{{ item.count }}</small>
        </sup>
      </v-chip>
    </v-chip-group>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <article-list
          :reset="reset"
          :tab="tab"
          :type="item"
        ></article-list>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import articleList from "~/components/articles/articleList";
  import { getTags } from "~/network/article";

  export default {
    transition: "layout",
    name: "index",
    head() {
      return {
        title: "Articals",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "展示了我所有的博文和踩坑记录",
          },
        ],
      };
    },
    components: {
      articleList,
    },
    data() {
      return {
        tab: 0,
        items: ["文章", "踩坑记录"],
        activeTags: [],
        reset: true,
      };
    },
    computed: {},
    watch: {},
    methods: {
      chipClicked(tag_name) {
        this.$store.commit("toggleActiveTag", tag_name);
        this.reset = !this.reset;
      },
    },
    created() {},
    mounted() {},
    async asyncData() {
      let { data } = await getTags();

      return { tags: data };
    },
  };
</script>
<style scoped></style>
