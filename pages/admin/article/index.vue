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

    <v-dialog v-model="dialog" persistent class="pa-3">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-7" v-on="on" color="info">submit</v-btn>
      </template>
      <v-card class="grey lighten-3">
        <v-card-title class="headline">check</v-card-title>
        <v-card-text>
          <div class="pa-3" v-for="(value, name) in fmtData" :key="name">
            <h3>{{ name }}</h3>
            <pre>{{ value }}</pre>
            <hr />
          </div>
        </v-card-text>
        <v-text-field
          label="Pass Word"
          v-model="password"
          outlined
          class="mx-5 my-3"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="submit">submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { getTags } from "~/network/article";
  import { postArticle, login } from "~/network/admin";

  import checkAuth from "~/utils/checkAuth";

  function setOrGetToken(token) {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      var token = localStorage.getItem("token");
    }
    return token;
  }

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
        items: ["Blog", "Trap", "Tag"],
        activeTags: [],
        config,
        content: "",
        password: "",
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
          var one = /^# (.*)$/gm.exec(content)[1] || "";
          var two = /^## (.*)$/gm.exec(content)[1] || "";
        } catch (error) {}
        let data = {};
        switch (this.tab) {
          case 0:
            data = {
              headline: one,
              content,
              tags: this.activeTagNames,
            };
            break;
          case 1:
            data = {
              context: one,
              problem: two,
              solution: content,
              tag_names: this.activeTagNames,
            };
            break;
          case 2:
            data = {
              tag_names: [this.content],
            };
            break;
        }
        return data;
      },
    },
    watch: {},
    methods: {
      async submit() {
        let fmtData = this.fmtData;
        let type = ["blog", "trap", "tag"][this.tab];
        let oldToken = setOrGetToken();
        let { token } = await login(this.password, oldToken);

        fmtData.token = token;
        setOrGetToken(token);

        let { status } = await postArticle(fmtData, type);
        if (status == 200) {
          alert("成功!");
        } else if (status == 401) {
          alert("未登录!");
        } else {
          alert("error");
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
    async asyncData() {
      let { data } = await getTags();
      return { tags: data };
    },
  };
</script>
<style scoped>
  .mavon-editor {
    z-index: 0 !important;
  }
</style>
