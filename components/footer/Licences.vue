// dependency: //
<template>
  <v-col class="pa-4 col-6 col-md-3">
    <h4>Licences</h4>
    <div class="pt-4">
      <p class="caption">
        <a
          href="http://www.beian.miit.gov.cn/"
          class="href-link grey--text text--darken-1"
          >鄂ICP备20007921号-1</a
        >
      </p>
    </div>
    <div class="d-flex justify-center pb-4">
      <a
        class="caption"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102003909"
        ><img src="~/static/img/beian.png" style="float: left;" />
        <p
          style="
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0px 0px 0px 5px;
            color: #939393;
          "
        >
          鄂公网安备 42011102003909号
        </p>
      </a>
    </div>
    <div class="text-center">
      <div class="overline">MADE WITH</div>
      <v-btn
        color="green accent-4"
        icon
        small
        href="https://zh.nuxtjs.org/"
      >
        <v-icon small>mdi-nuxt</v-icon>
      </v-btn>
      <v-icon x-small>mdi-plus</v-icon>
      <v-btn
        color="light-blue accent-2"
        icon
        small
        href="https://vuetifyjs.com/zh-Hans/"
      >
        <v-icon small>mdi-vuetify</v-icon>
      </v-btn>
      <v-icon x-small>mdi-plus</v-icon>
      <v-btn
        text
        rounded
        color="green darken-4"
        href="https://www.djangoproject.com/"
        class="text-lowercase text--secondary"
        small
      >
        django
      </v-btn>
    </div>
    <div class="overline mt-5">
      <v-icon x-small>mdi-copyright</v-icon>2019-2020
    </div>
  </v-col>
</template>

<script>
  export default {
    name: "Licences",
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
  };
</script>
<style scoped>
  .href-link {
    text-decoration: none;
  }
</style>
