// dependency: //
<template>
  <div>
    <v-btn
      class="mb-4"
      text
      color="indigo accent-3"
      @click="$router.back()"
    >
      <v-icon left>mdi-menu-left</v-icon>back
    </v-btn>

    <mavon-editor
      class="article-content"
      :value="content"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :codeStyle="'atom-one-dark'"
      :scrollStyle="true"
      :boxShadow="false"
      :tabSize="4"
    ></mavon-editor>
  </div>
</template>

<script>
  import { getArticle } from "~/network/article";

  export default {
    transition: "layout",
    name: "articleContent",
    head() {
      let title = /^# (.*)$/gm.exec(this.content)[1];
      return {
        title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: title,
          },
        ],
      };
    },
    components: {},
    data() {
      return {};
    },
    validate({ params }) {
      let valid = ["blog", "trap"];
      if (valid.indexOf(params.type) == -1) return false;
      return true;
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    async asyncData({ params, error }) {
      try {
        var rt_data = await getArticle(params.id, params.type);
        if (rt_data.content != undefined) {
          return { content: rt_data.content.content };
        } else if (rt_data.data != undefined) {
          return { content: rt_data.data.solution };
        }
      } catch (err) {
        error({ statusCode: 404, message: "page not found" });
      }
      // TODO fix back end
    },
  };
</script>
<style scoped>
  .article-content {
    z-index: 0 !important;
  }
</style>
