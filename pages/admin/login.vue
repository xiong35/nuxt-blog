// dependency: //
<template>
  <v-card outlined max-width="700" class="mx-auto login pa-12 text-center">
    <v-card-title>LOGIN</v-card-title>
    <v-text-field
      v-model="password"
      label="Password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required]"
      :type="show ? 'text' : 'password'"
      persistent-hint
      autofocus
      :hint="hint"
      :error="wrong >= 3"
      outlined
      @click:append="show = !show"
      ref="pw"
    ></v-text-field>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outlined color="error" nuxt to="/">exit</v-btn>
      <v-btn
        outlined
        color="success"
        :disabled="wrong >= 3"
        :loading="loading"
        @click="handleLogin"
      >
        login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { login } from "~/network/admin";

  function setOrGetToken(token) {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      var token = localStorage.getItem("token");
    }
    return token;
  }

  export default {
    name: "index",
    layout: "admin",
    components: {},
    data() {
      return {
        password: "",
        wrong: 0,
        loading: false,
        show: false,
        rules: {
          required: (value) => !!value || "Required.",
        },
      };
    },
    computed: {
      hint() {
        if (this.wrong == 0) {
          return "请输入密码";
        } else if (this.wrong < 3) {
          return `密码错误 ${this.wrong} 次!`;
        } else {
          return "输入密码错误过多!";
        }
      },
    },
    watch: {},
    methods: {
      async handleLogin() {
        if (!this.$refs.pw.validate()) {
          return;
        }
        this.loading = true;
        const wrong = localStorage.getItem("wrong") - 0 || 0;

        const { status, token, permission } = await login(
          this.password,
          ""
        );

        localStorage.setItem("token", token);
        localStorage.setItem("permission", permission);

        if (permission >= 9) {
          localStorage.setItem("wrong", 0);
          this.wrong = 0;
          this.$router.push("/admin");
        } else {
          localStorage.setItem("wrong", wrong + 1);
          this.wrong = wrong + 1;
        }
        this.loading = false;
      },
    },
    created() {},
    mounted() {
      this.wrong = localStorage.getItem("wrong") - 0 || 0;
    },
  };
</script>
<style scoped></style>
