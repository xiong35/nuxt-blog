// dependency: //
<template>
  <div>
    <v-scale-transition group tag="div">
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
                class="d-flex align-center text--secondary font-weight-light mx-2"
              >
                {{ item.last_update | fmtTime }}
              </div>
            </v-card-actions>
          </v-card>
        </template>
      </v-hover>
    </v-scale-transition>
    <v-pagination
      color="blue-grey darken-3"
      v-model="page"
      :total-visible="9"
      :length="Math.ceil(filteredList.length / perPage)"
    ></v-pagination>
  </div>
</template>

<script>
  import { getArtical } from "~/network/artical";

  let typeMap = {
    文章: "blog",
    踩坑记录: "trap",
    日记: "diary",
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
    },
    filters: {
      fmtTime(value) {
        let [date, time] = value.split("T");
        return date + ", " + time.slice(0, 5);
      },
    },
    name: "blog",
    components: {},
    data() {
      return {
        page: 1,
        articals: [],
        perPage: 7,
      };
    },
    computed: {
      pagedList() {
        let begin = (this.page - 1) * this.perPage;
        return this.filteredList.slice(begin, begin + this.perPage);
      },
      filteredList() {
        return this.articals.filter((value, index, array) => {
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
    watch: {},
    methods: {},
    created() {},
    mounted() {
      getArtical("", typeMap[this.$props.type]).then((response) => {
        this.articals = response.data;
      });
    },
    activated() {},
  };
</script>
<style scoped></style>
