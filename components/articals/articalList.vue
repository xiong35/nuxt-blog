// dependency: //
<template>
  <div>
    <p v-for="(item, index) in pagedList" :key="index">{{ item }}</p>
    <v-pagination
      v-model="page"
      :total-visible="9"
      :length="15"
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
    name: "blog",
    components: {},
    data() {
      return {
        page: 0,
        articals: [],
        perPage: 7,
      };
    },
    computed: {
      pagedList() {
        let begin = this.page * this.perPage;
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
