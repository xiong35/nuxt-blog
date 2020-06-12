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
      let titleReg = /^# (.*)$/gm.exec(this.content);
      let title = titleReg ? titleReg[1] : this.content.split("\n")[0];
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
      var { data } = await getArticle(params.id, params.type);
      return { content: data.Content };
    },
  };
</script>
<style scoped>
  .article-content {
    z-index: 0 !important;
  }
</style>
