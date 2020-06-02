// dependency: //
<template>
  <v-col class="pa-4 col-6 col-md-3">
    <h4>Contributor(s)</h4>
    <v-simple-table class="pa-3 text--secondary">
      <template v-slot:default>
        <tbody>
          <tr>
            <td>PM</td>
            <td>
              <a class="text--secondary" href="http://xiong35.cn">
                Xiong35
              </a>
            </td>
          </tr>
          <tr>
            <td>UI</td>
            <td>
              <a class="text--secondary" href="http://xiong35.cn">
                Xiong35
              </a>
            </td>
          </tr>
          <tr>
            <td>前端</td>
            <td>
              <a class="text--secondary" href="http://xiong35.cn">
                Xiong35
              </a>
            </td>
          </tr>
          <tr>
            <td>后端</td>
            <td>
              <a class="text--secondary" href="http://xiong35.cn">
                Xiong35
              </a>
            </td>
          </tr>
          <tr>
            <td>运维</td>
            <td>
              <a class="text--secondary" href="http://xiong35.cn">
                Xiong35
              </a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center">
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
  </v-col>
</template>

<script>
  export default {
    name: "Contributors",
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
<style scoped></style>
