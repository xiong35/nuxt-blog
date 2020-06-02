// dependency: //
<template>
  <v-col class="pa-4 col-6 col-md-3">
    <h4 class="mb-3">Friends</h4>
    <v-layout column wrap>
      <v-hover v-for="(item, index) in links" :key="index">
        <template v-slot="{ hover }">
          <v-card
            class="px-3 ma-2 py-2 text-left text--secondary"
            :elevation="hover ? 7 : 0"
            outlined
          >
            <a class="text--secondary" :href="item.href"
              >{{ item.name }} </a
            ><br />
            <small class="text--secondary">{{ item.discription }}</small>
          </v-card>
        </template>
      </v-hover>
    </v-layout>
  </v-col>
</template>

<script>
  let links = [
    {
      name: "Jaya's Blog",
      discription:
        "主业研究Unity, 副业啥都学的漂亮姐姐的博客, 快去踩踩吧👆",
      href: "http://39.102.64.20/",
    },
    {
      name: "William's Blog",
      discription: "勤奋刻苦小哥哥的博客, 要去逛逛啊!",
      href: "http://baidi-coder.github.io/",
    },
  ];
  export default {
    name: "Friends",
    components: {},
    data() {
      return { links };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
  };
</script>
<style scoped></style>
