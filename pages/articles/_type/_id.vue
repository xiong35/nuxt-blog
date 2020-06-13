// dependency: //
<template>
  <div>
    <v-row>
      <v-btn
        class="mb-4"
        text
        color="indigo accent-3"
        @click="$router.back()"
      >
        <v-icon left>mdi-menu-left</v-icon>back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-3"
        color="indigo accent-2"
        @click="editPage"
        text
        v-if="editable"
        ><v-icon>mdi-eraser</v-icon> edit
      </v-btn>
    </v-row>

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
      return {
        editable: false,
      };
    },
    validate({ params }) {
      let valid = ["blog", "trap"];
      if (valid.indexOf(params.type) == -1) return false;
      return true;
    },
    computed: {},
    watch: {},
    methods: {
      editPage() {
        this.$router.push({
          path: "/admin/article/manage",
          query: { id: this.$route.params.id },
        });
      },
    },
    created() {},
    mounted() {
      let permission = localStorage.getItem("permission") - 0 || 0;
      if (permission >= 9) {
        this.editable = true;
      }
    },
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
