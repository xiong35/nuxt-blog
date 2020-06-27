<template>
  <v-app>
    <div @click="callParticle">
      <TheNavBars />
      <v-main>
        <v-row class="pa-md-6">
          <v-col class="pa-4 d-none d-md-flex col-md-3">
            <nav-aside />
          </v-col>
          <v-col class="pa-4 col-12 col-md-9">
            <div style="max-width: 800px;" class="mx-auto"><nuxt />5</div>
          </v-col>
        </v-row>
        <TheBlogFooter />
        <p class="text-center text--secondary">
          <small>请使用谷歌浏览器以获得最佳体验</small>
        </p>
      </v-main>
      <TheParticle ref="particle" />
      <TheDuck ref="duck" />
    </div>
  </v-app>
</template>

<script>
  import TheNavBars from "~/components/TheNavBars";
  import NavAside from "~/components/NavAside";
  import TheBlogFooter from "~/components/TheBlogFooter";

  import TheDuck from "~/components/TheAdditionalApp/TheDuck";
  import TheParticle from "~/components/TheAdditionalApp/TheParticle";

  export default {
    components: {
      TheNavBars,
      NavAside,
      TheBlogFooter,
      TheDuck,
      TheParticle,
    },
    data() {
      return {};
    },
    methods: {
      callParticle(event) {
        this.$refs.particle.fatherClick(event);
      },
    },
  };
</script>

<style>
  ::selection {
    background-color: #41afee66;
    text-shadow: none;
  }
  ::-moz-selection {
    background-color: #41afee66;
    text-shadow: none;
  }
  ::-webkit-selection {
    background-color: #41afee66;
    text-shadow: none;
  }
</style>
