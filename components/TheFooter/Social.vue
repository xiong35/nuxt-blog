// dependency: //
<template>
  <v-col class="pa-4 col-6 col-md-3">
    <span id="qq-num" class="d-none">22427</span>
    <h4>Social</h4>
    <v-layout row wrap class="d-flex pa-4 justify-space-around">
      <v-btn href="https://github.com/xiong35" icon color="grey darken-2">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon color="grey darken-2" @click="copy('q')">
        <v-icon>mdi-qqchat</v-icon>
      </v-btn>
      <v-btn icon color="grey darken-2" @click="copy('v')">
        <v-icon>mdi-wechat</v-icon>
      </v-btn>
    </v-layout>
    <v-snackbar top v-model="snackBarQ" color="success" :timeout="1400">
      已复制QQ号到剪切板😉
    </v-snackbar>
    <v-snackbar top v-model="snackBarV" color="success" :timeout="1400">
      已复制微信号到剪切板😉
    </v-snackbar>
    <span class="d-none" id="qqnum">2242787</span>
  </v-col>
</template>

<script>
  export default {
    name: "Social",
    components: {},
    data() {
      return {
        snackBarQ: false,
        snackBarV: false,
      };
    },
    computed: {},
    watch: {},
    methods: {
      copy(type) {
        let number = "";
        if (type === "q") {
          this.snackBarQ = true;
          number = "2242787668";
        } else if (type === "v") {
          this.snackBarV = true;
          number = "xyl2242787668";
        }
        let textArea = document.createElement("textarea");
        textArea.style.zIndex = -1;
        textArea.value = number;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
        } catch (err) {
          alert("该浏览器不支持点击复制到剪贴板");
        }
        document.body.removeChild(textArea);
      },
    },
    created() {},
    mounted() {},
  };
</script>
<style scoped></style>
