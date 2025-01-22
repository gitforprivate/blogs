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
        appId: "U4P4BYB619",
        apiKey: "3594d30fcd796aadf2df9838929e6302",
        indexName: "gitforprivateio",
      },
    },

    logo: "/doraemon.png",
  },
});
