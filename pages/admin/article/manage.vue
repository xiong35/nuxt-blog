// dependency: //
<template>
  <div class="index">
    <v-tabs v-model="tab" background-color="transparent" color="blue">
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
        :key="index"
      >
        {{ item.tag_name }}
        <sup>
          <small>{{ item.count }}</small>
        </sup>
      </v-chip>
    </v-chip-group>

    <mavon-editor
      class="mavon-editor"
      :toolbars="config"
      :tabSize="4"
      v-model="content"
    />

    <v-dialog v-model="dialog" persistent class="">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-7" v-on="on" color="info">submit</v-btn>
      </template>
      <v-card class="grey lighten-3 pa-4">
        <v-card-title class="headline">check</v-card-title>
        <v-card-text>
          <div class="pa-3" v-for="(value, name) in fmtData" :key="name">
            <h3>{{ name }}</h3>
            <pre>{{ value }}</pre>
            <hr />
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" outlined @click="dialog = false">
            cancel
          </v-btn>
          <v-btn color="green darken-1" outlined @click="submit">
            submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { getTags } from "~/network/article";
  import { putArticle } from "~/network/admin";
  import { getArticle } from "~/network/article";

  import checkAuth from "~/utils/checkAuth";

  let config = {
    underline: true, // 下划线
    strikethrough: true, // 中划线
    mark: true, // 标记
    superscript: true, // 上角标
    subscript: true, // 下角标
    imagelink: true, // 图片链接
    fullscreen: true, // 全屏编辑
    readmodel: true, // 沉浸式阅读
    subfield: true, // 单双栏模式
    preview: true, // 预览
  };

  export default {
    name: "index",
    layout: "admin",
    components: {},
    data() {
      return {
        tab: 0,
        items: ["Blog", "Trap"],
        activeTags: [],
        config,
        dialog: false,
      };
    },
    computed: {
      activeTagNames() {
        let tags = [];
        this.activeTags.forEach((it) => {
          tags.push(this.tags[it].tag_name);
        });
        return tags;
      },
      fmtData() {
        if (!this.dialog) {
          return {};
        }
        let content = this.content;
        try {
          var one = /^# (.+)$/m.exec(content)[1] || "";
        } catch (error) {}
        let data = {
          headline: one,
          content,
          tags: this.activeTagNames,
        };
        return data;
      },
    },
    watch: {},
    methods: {
      async submit() {
        const permission = localStorage.getItem("permission") - 0 || 0;

        if (permission < 9) {
          alert("未登录!");
          this.$router.replace("/admin/login");
          return;
        }

        let fmtData = this.fmtData;

        let token = localStorage.getItem("token") || "";

        fmtData.token = token;
        fmtData.id = this.$route.query.id - 0;

        let { status } = await putArticle(fmtData);

        if (status == 200) {
          alert("成功!");
        } else if (status == 401) {
          alert("未登录!");
          this.$router.replace("/admin/login");
          return;
        } else {
          alert("error");
          this.$router.replace("/");
          return;
        }

        let { data } = await getTags();
        this.tags = data;
        this.dialog = false;
      },
    },
    created() {},
    mounted() {
      checkAuth(this.$router);
    },
    async asyncData({ query }) {
      let { data } = await getTags();
      console.log(query);

      let res = await getArticle(query.id);
      console.log(res);

      return { tags: data, content: res.data.Content };
    },
  };
</script>
<style scoped>
  .mavon-editor {
    z-index: 0 !important;
  }
</style>
