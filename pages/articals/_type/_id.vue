// dependency: //
<template>
  <div>
    <v-btn class="mb-4" text color="teal darken-1" @click="$router.back()">
      <v-icon left>mdi-menu-left</v-icon>back
    </v-btn>

    <mavon-editor
      class="artical-content"
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
  import { getArtical } from "~/network/artical";

  export default {
    name: "articalContent",
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
      let rt_data = await getArtical(params.id, params.type);
      return { content: rt_data.content.content };
    },
  };
</script>
<style scoped>
  .artical-content {
    z-index: 0 !important;
  }
</style>
