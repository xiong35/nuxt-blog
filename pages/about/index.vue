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
        <div class="ma-1" :class="getPadding()">
          <v-btn
            text
            rounded
            :elevation="getElevation()"
            class="font-weight-light"
            v-if="category.category == 'I can'"
          >
            L<sup>A</sup>T<sub>E</sub>X
          </v-btn>
        </div>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  let about = [
    {
      category: "I am",
      items: [
        {
          icon: null,
          name: "a HUSTer",
        },
        {
          icon: "華",
          name: "a 华一er",
          color: "red darken-2",
        },
        {
          icon: null,
          name: "a 566er",
        },
        {
          icon: "mdi-handshake",
          name: "warm hearted",
        },
        {
          icon: "mdi-head-sync-outline",
          name: "thinking",
        },
        {
          icon: "mdi-keyboard-variant",
          name: "a coder",
          color: "green darken-2",
        },
        {
          icon: "mdi-guy-fawkes-mask",
          name: "hiding my emotion",
        },
        {
          name: "🤣 interesting",
        },
      ],
    },
    {
      category: "I like",
      items: [
        {
          name: "🏸 badminton",
        },
        {
          name: "👨‍💻 coding",
        },
        {
          name: "🤸‍♂️ parkour",
        },
        {
          name: "🚴‍♂️ biking",
        },
        {
          name: "👨‍👦 my friends",
        },
        {
          icon: "mdi-battlenet",
          name: "hearth stone",
        },
        {
          icon: "mdi-feather",
          name: "English calligraphy",
        },
        {
          name: "☕ coffee",
        },
        {
          icon: "mdi-cards-playing-outline",
          name: "card games",
        },
        {
          name: "🐱 cats",
        },
        {
          name: "🎧 music",
        },
        {
          name: "🎬 movies",
        },
        {
          name: "MARVEL",
          color: "rgb(163, 16, 0)",
        },
        {
          name: "知乎",
          color: "rgb(0, 132, 255)",
        },
        {
          name: "Bilibili",
          color: "rgb(251, 114, 153)",
        },
      ],
    },
    {
      category: "I can",
      items: [
        {
          icon: null,
          name: "mysql",
          color: "rgb(0, 118, 150)",
        },
        {
          icon: "mdi-git",
          name: "git",
          color: "rgb(245, 77, 39)",
        },
        {
          icon: "mdi-jquery",
          name: "jquery",
          color: "rgb(6, 105, 173)",
        },
        {
          icon: "mdi-language-csharp",
        },
        {
          icon: "mdi-language-css3",
          name: "css",
          color: "rgb(48, 150, 216)",
        },
        {
          icon: "mdi-language-html5",
          name: "html",
          color: "rgb(228, 79, 38)",
        },
        {
          icon: "mdi-language-javascript",
          color: "rgb(245, 222, 25)",
          name: "javascript",
        },
        {
          icon: "mdi-language-markdown-outline",
          color: "rgb(117, 88, 56)",
          name: "markdown",
        },
        {
          icon: "mdi-language-kotlin",
          color: "rgb(102, 118, 224)",
          name: "kotlin",
        },
        {
          icon: "mdi-nuxt",
          color: "rgb(0, 197, 142)",
          name: "nuxt",
        },
        {
          icon: "mdi-vuejs",
          name: "vue",
          color: "rgb(65, 184, 131)",
        },
        {
          icon: "mdi-vuetify",
          name: "vuetify",
          color: "rgb(123, 198, 255)",
        },
        {
          icon: "mdi-regex",
          name: "regex",
        },
        {
          icon: "mdi-material-design",
          name: "material design",
        },
        {
          icon: "mdi-microsoft-visual-studio-code",
          name: "vscode",
          color: "rgb(34, 165, 241)",
        },
        {
          icon: "mdi-language-cpp",
        },
        {
          icon: null,
          name: "django",
          color: "rgb(12, 75, 51)",
        },
        {
          icon: null,
          name: "keras",
          color: "rgb(208, 0, 0)",
        },
        {
          icon: "mdi-language-c",
        },
        {
          icon: null,
          name: "tensorflow",
          color: "rgb(255, 133, 0)",
        },
        {
          icon: null,
          name: "numpy",
          color: "rgb(110, 140, 191)",
        },
        {
          icon: null,
          name: "matplotlib",
          color: "rgb(17, 85, 124)",
        },
        {
          icon: null,
          name: "pandas",
          color: "rgb(19, 6, 84)",
        },
        {
          icon: "mdi-centos",
          name: "linux",
        },
        {
          icon: "mdi-language-python",
          color: "rgb(245, 206, 61)",
          name: "python",
        },
      ],
    },
  ];

  export default {
    name: "index",
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
  };
</script>
<style scoped></style>
