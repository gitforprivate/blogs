import { defineConfig } from "vitepress";
import nav from "./navData";
import sidebar from "./sideData";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blogs",
  description: "Record everything",
  base: "/blogs/",
  head: [["link", { rel: "icon", href: "/blogs/favicon.ico" }]],
  // md文档放置的地方
  srcDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "algolia",
      options: {
        appId: "NWIQVP5JEI",
        apiKey: "7dea3d00db991ffaae5ff829f96dd4c9",
        indexName: "blogs",
      },
    },

    logo: "/doraemon.png",
  },
});
