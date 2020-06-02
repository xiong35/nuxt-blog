// dependency: //
<template>
  <div>
    <v-skeleton-loader
      class="mx-auto"
      type="article"
      v-for="item in 7"
      :key="item"
      transition="scale-transition"
      v-show="loading"
    ></v-skeleton-loader>

    <v-scale-transition group tag="div">
      <v-card
        v-if="filteredList.length == 0 && !loading"
        flat
        class="ma-3"
        key="empty"
      >
        <v-card-text class="pt-1">
          <p class="text-center subtitle-1">
            <v-icon>mdi-text-box-remove-outline</v-icon>
            这里什么都没有呢😥<br />
          </p>
          <p class="text-center caption">
            你可以<a>催更</a>或者<a href="http://xiong35.cn">看点别的</a>
          </p>
        </v-card-text>
      </v-card>

      <v-hover v-for="(item, index) in pagedList" :key="index">
        <template v-slot="{ hover }">
          <v-card flat class="ma-3" :elevation="hover ? 7 : 0" outlined>
            <v-card-text class="pb-1">
              <p class="headline text--primary">
                {{ item.headline || item.problem }}
              </p>

              <v-chip
                v-for="(tag, ind) in item.tags"
                outlined
                :key="ind"
                class="mx-1"
                active-class="light-blue--text light-blue"
                :input-value="$store.state.activeTags.indexOf(tag) != -1"
              >
                {{ tag }}
              </v-chip>
            </v-card-text>
            <v-card-actions class="px-3">
              <v-btn
                text
                exact
                append
                nuxt
                :to="to(item.id)"
                color="deep-purple accent-4"
              >
                Read More
              </v-btn>
              <v-spacer></v-spacer>
              <div
                class="d-flex align-center grey--text text--darken-2 font-weight-light mx-2"
              >
                {{ item.last_update | fmtTime }}
              </div>
            </v-card-actions>
          </v-card>
        </template>
      </v-hover>
    </v-scale-transition>
    <v-pagination
      color="blue accent-2"
      v-model="page"
      :total-visible="9"
      :length="Math.ceil(filteredList.length / perPage)"
    ></v-pagination>
  </div>
</template>

<script>
  import { getarticle } from "~/network/article";

  let typeMap = {
    文章: "blog",
    踩坑记录: "trap",
  };

  export default {
    props: {
      tab: {
        type: Number,
      },
      type: {
        type: String,
        default: "文章",
      },
      reset: {
        type: Boolean,
      },
    },
    filters: {
      fmtTime(value) {
        let [date, time] = value.split("T");
        let hour = time.slice(0, 2) - 0;
        let emoji = "";
        if (hour >= 18 && hour < 21) {
          emoji = "🌇";
        } else if (hour < 18) {
          emoji = "☀️";
        } else emoji = "🌙";
        return date + ", " + time.slice(0, 5) + " " + emoji;
      },
    },
    name: "blog",
    components: {},
    data() {
      return {
        page: 1,
        articles: [],
        perPage: 7,
        loading: true,
      };
    },
    computed: {
      pagedList() {
        let begin = (this.page - 1) * this.perPage;
        return this.filteredList.slice(begin, begin + this.perPage);
      },
      filteredList() {
        return this.articles.filter((value, index, array) => {
          for (let tag of this.$store.state.activeTags) {
            if (value.tags.indexOf(tag) == -1) {
              return false;
            }
          }
          return true;
        });
      },
      to(id) {
        return (id) => {
          return typeMap[this.type] + "/" + id;
        };
      },
    },
    watch: {
      reset() {
        this.page = 1;
      },
    },
    methods: {},
    created() {},
    mounted() {
      getarticle("", typeMap[this.type]).then((response) => {
        this.articles = response.data;
        this.loading = false;
      });
    },
    activated() {},
  };
</script>
<style scoped></style>
