// dependency: //
<template>
  <div>
    <v-btn class="mb-4" text color="teal darken-1" @click="$router.back()">
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
    name: "articleContent",
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    async asyncData({ params }) {
      let rt_data = await getarticle(params.id, params.type);
      return { content: rt_data.content.content };
    },
  };
</script>
<style scoped>
  .article-content {
    z-index: 0 !important;
  }
</style>
