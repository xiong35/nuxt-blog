// dependency: //
<template>
  <div>
    <p class="display-3">
      <v-icon class="display-4 black--text">mdi-alpha-i</v-icon>...
    </p>
    <v-card
      v-for="(category, index) in about"
      :key="index"
      class="my-4"
      flat
    >
      <v-card-title primary-title>
        {{ category.category }}
      </v-card-title>
      <v-layout row wrap class="px-3">
        <div
          :class="getPadding()"
          v-for="(item, ind) in category.items"
          :key="ind"
        >
          <v-btn
            text
            rounded
            :elevation="getElevation()"
            :color="item.color || null"
            class="text-capitalize"
          >
            <v-icon :left="item.name != null" v-if="item.icon">
              {{ item.icon }}
            </v-icon>
            {{ item.name }}
          </v-btn>
        </div>
      </v-layout>
    </v-card>

    <v-card class="my-4" flat>
      <v-card-title primary-title>
        {{ asyncAbout.category }}
      </v-card-title>
      <v-layout row wrap class="px-3">
        <div
          :class="getPadding()"
          v-for="(item, ind) in asyncAbout.items"
          :key="ind"
        >
          <v-btn
            text
            rounded
            :elevation="getElevation()"
            :color="item.color || null"
            class="text-capitalize"
          >
            <v-icon :left="item.name != null" v-if="item.icon">
              {{ item.icon }}
            </v-icon>
            {{ item.name }}
          </v-btn>
        </div>
        <div class="ma-1" :class="getPadding()">
          <v-btn
            text
            rounded
            :elevation="getElevation()"
            class="font-weight-light"
          >
            L<sup>A</sup>T<sub>E</sub>X
          </v-btn>
        </div>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  import about from "~/assets/myData/about";

  import { getCan } from "~/network/meta";

  export default {
    transition: "layout",
    name: "index",
    head() {
      return {
        title: "About Me",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "展示了我的特长和爱好等的个人简介页面",
          },
        ],
      };
    },
    components: {},
    data() {
      return {
        about,
      };
    },
    computed: {},
    watch: {},
    methods: {
      getElevation() {
        return Math.floor(Math.random() * 12) + 1;
      },
      getPadding() {
        let l = Math.floor(Math.random() * 5 + 0.9);
        let r = 6 - l;
        let t = Math.floor(Math.random() * 7 + 0.9);
        let b = 8 - t;
        return `pl-${l} pr-${r} pt-${t} pb-${b}`;
      },
    },
    created() {},
    mounted() {},
    async asyncData() {
      let { data } = await getCan();
      return { asyncAbout: { category: "I can", items: data } };
    },
  };
</script>
<style scoped></style>
