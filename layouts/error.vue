<template>
  <v-app>
    <v-layout class="d-flex align-center mx-auto mt-7" column wrap>
      <h1 class="display-3" v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 class="display-3" v-else>
        {{ otherError }}
      </h1>
      <NuxtLink class="ma-5" to="/">
        Back To Home page
      </NuxtLink>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
    layout: "empty",
    props: {
      error: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        pageNotFound: "404 Not Found",
        otherError: "An error occurred",
      };
    },
    head() {
      const title =
        this.error.statusCode === 404
          ? this.pageNotFound
          : this.otherError;
      return {
        title,
      };
    },
  };
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
