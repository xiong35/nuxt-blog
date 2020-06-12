// dependency: //
<template>
  <div class="index">
    <v-tabs v-model="tab" background-color="transparent" color="blue">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat color="grey lighten-4">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="name"
                autofocus
                clearable
                hint="输入标签的名字(如果已有icon则可空)"
                v-model="name"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="icon"
                clearable
                hint="输入icon的代码(如果已有name则可空)"
                v-model="icon"
                outlined
              ></v-text-field>
            </v-col>
            <v-row cols="12">
              <v-color-picker class="mx-auto" v-model="color"></v-color-picker>
            </v-row>
            <v-col class="mt-7" cols="12">
              <span>preview:</span>&nbsp;&nbsp;
              <v-btn
                text
                rounded
                :color="color || null"
                elevation="2"
                class="text-capitalize"
              >
                <v-icon :left="name != ''" v-if="icon">
                  {{ icon }}
                </v-icon>
                {{ name }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import { postArticle } from "~/network/admin";

  import checkAuth from "~/utils/checkAuth";

  export default {
    name: "index",
    layout: "admin",
    components: {},
    data() {
      return {
        tab: 0,
        items: ["can"],
        icon: "",
        name: "",
        color: "",
        dialog: false,
      };
    },
    computed: {},
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

        let type = ["blog", "trap", "tags"][this.tab];
        let token = localStorage.getItem("token") || "";

        fmtData.token = token;

        let { status } = await postArticle(fmtData, type);

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
  };
</script>
<style scoped></style>
