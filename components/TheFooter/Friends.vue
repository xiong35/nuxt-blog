// dependency: //
<template>
  <v-col class="pa-4 col-6 col-md-3">
    <h4 class="mb-3">Friends</h4>
    <v-layout column wrap>
      <v-hover v-for="(item, index) in links" :key="index">
        <template v-slot="{ hover }">
          <v-badge bordered color="grey" :icon="item.icon" overlap>
            <v-card
              class="mb-3 pa-3 text-left transition-swing"
              :elevation="hover ? 7 : 0"
              outlined
            >
              <a class="grey--text text--darken-3" :href="item.href"
                >{{ item.name }}
              </a>
              <div class="mb-2"></div>
              <small class="grey--text text--darken-2">
                {{ item.discription }}
              </small>
            </v-card>
          </v-badge>
        </template>
      </v-hover>
    </v-layout>
  </v-col>
</template>

<script>
  let links = [
    {
      name: "Jaya's Blog",
      discription: "主业研究Unity, 副业啥都学的小姐姐的博客, 快去踩踩吧👆",
      href: "http://39.102.64.20/",
      icon: "mdi-alpha-j",
    },
    {
      name: "🦉Willog",
      discription: "朝气蓬勃小老弟的博客, 要去逛逛啊!",
      href: "http://322mpz.coding-pages.com",
      icon: "mdi-space-invaders",
    },
    {
      name: "BBHUST",
      discription: "这是我做的华科校内论坛, 只有华科校友准入哦😏",
      href: "https://bb.hust.online/",
      icon: "mdi-alpha-b-circle",
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
