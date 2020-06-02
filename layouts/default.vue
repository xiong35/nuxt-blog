<template>
  <v-app>
    <div @click="callParticle">
      <nav-bars></nav-bars>
      <v-content>
        <v-row class="pa-md-6">
          <v-col class="pa-4 d-none d-md-flex col-md-3">
            <nav-aside />
          </v-col>
          <v-col class="pa-4 col-12 col-md-9">
            <nuxt />
          </v-col>
        </v-row>
        <blog-footer />
        <!-- <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div> -->
      </v-content>
      <particle ref="particle"></particle>
      <duck ref="duck" />
    </div>
  </v-app>
</template>

<script>
  import NavBars from "~/components/NavBars";
  import NavAside from "~/components/NavAside";
  import BlogFooter from "~/components/BlogFooter";

  import Duck from "~/components/additionalApp/Duck";
  import particle from "~/components/additionalApp/particle";

  export default {
    components: {
      NavBars,
      NavAside,
      BlogFooter,
      Duck,
      particle,
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

<style scoped></style>
