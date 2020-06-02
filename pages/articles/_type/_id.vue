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
  import { getarticle } from "~/network/article";

  export default {
    transition: "layout",
    name: "articleContent",
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
        var rt_data = await getarticle(params.id, params.type);
        return { content: rt_data.content.content };
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
