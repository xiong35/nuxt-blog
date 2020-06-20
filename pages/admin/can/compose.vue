// dependency: //
<template>
  <div class="index">
    <v-tabs
      centered
      v-model="tab"
      background-color="transparent"
      color="blue"
    >
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item class="mt-5">
        <v-card flat color="grey lighten-4">
          <v-row>
            <v-col cols="12" md="6" class="mx-auto">
              <v-text-field
                label="name"
                autofocus
                clearable
                hint="输入标签的名字(如果已有icon则可空)"
                v-model="name"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto">
              <v-text-field
                label="icon"
                clearable
                hint="输入icon的代码(如果已有name则可空)"
                v-model="icon"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row cols="12">
            <v-color-picker
              class="mx-auto"
              v-model="color"
            ></v-color-picker>
          </v-row>
          <v-row>
            <v-col class="mt-7" cols="12">
              <span class="grey--text">preview:</span>
              <v-btn
                elevation="2"
                text
                rounded
                :color="color || null"
                class="text-capitalize mx-4"
              >
                <v-icon :left="name != ''" v-if="icon">{{ icon }}</v-icon>
                {{ name }}
              </v-btn>
              <v-btn color="info" outlined @click="submit">submit</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import { postCan } from "~/network/admin";

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

        let data = {
          icon: this.icon,
          name: this.name,
          color: this.color,
        };

        let token = localStorage.getItem("token") || "";

        data.token = token;

        let { status } = await postCan(data);

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
      },
    },
    created() {},
    mounted() {
      checkAuth(this.$router);
    },
  };
</script>
<style scoped></style>
