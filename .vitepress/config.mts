import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blogs",
  description: "Record everything",
  base: "/blogs",
  head: [["link", { rel: "icon", href: "/blogs/favicon.ico" }]],
  // md文档放置的地方
  srcDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "algolia",
      options: {
        appId: "",
        apiKey: "",
        indexName: "",
      },
    },

    logo: "/doraemon.png",
  },
});
