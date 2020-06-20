// dependency: //
<template>
  <div class="px-4">
    <v-tabs v-model="tab" color="indigo accent-3">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-chip-group v-model="activeTags" column multiple>
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
        title: "Articles",
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
    mounted() {
      this.tags.forEach((it, ind) => {
        if (this.$store.state.activeTags.indexOf(it.tag_name) != -1) {
          this.activeTags.push(ind);
        }
      });
    },
    async asyncData({ store, query }) {
      if (query.tags != undefined) {
        if (query.tags instanceof Array) {
          store.commit("setActiveTags", query.tags);
        } else if (typeof query.tags == "string") {
          store.commit("setActiveTags", [query.tags]);
        }
      }
      let { data } = await getTags();

      return { tags: data };
    },
  };
</script>
<style scoped></style>
