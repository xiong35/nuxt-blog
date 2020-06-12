// dependency: //
<template>
  <v-row>
    <v-col
      v-for="(item, index) in pages"
      :key="index"
      class="text-left"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card
        nuxt
        shaped
        min-height="150"
        append
        :to="item.href"
        :color="item.color"
        hover
      >
        <v-card-title primary-title>
          <v-icon left large color="black">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-card-title>
        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import checkAuth from "~/utils/checkAuth";

  const pages = [
    {
      color: "cyan accent-3",
      title: "Compose",
      description: "Add blog / trap / tag",
      href: "article/compose",
      icon: "mdi-fountain-pen-tip",
    },
    {
      color: "teal accent-3",
      title: "Modify Articles",
      description: "Manage blog / trap / tag",
      href: "article/manage",
      icon: "mdi-eraser",
    },
    {
      color: "indigo accent-2",
      title: "I Can...",
      description: "Add I can items",
      href: "can/compose",
      icon: "mdi-flash-outline",
    },
  ];

  export default {
    name: "index",
    layout: "admin",
    components: {},
    data() {
      return {
        pages,
      };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {
      checkAuth(this.$router);
    },
  };
</script>
<style scoped></style>
