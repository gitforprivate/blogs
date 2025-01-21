import { link } from "fs";

const navData = [
  {
    text: "前端",
    items: [
      {
        text: "JavaScript",
        items: [
          {
            text: "ES",
            link: "/frontend/javascript/es/index",
          },
          {
            text: "TS",
            link: "/frontend/javascript/ts/index",
          },
        ],
      },
      { text: "CSS", link: "/frontend/css/index" },
      {
        text: "框架",
        items: [
          { text: "Vue", link: "/frontend/fragment/vue/index" },
          {
            text: "React",
            link: "frontend/fragment/react/index",
          },
          {
            text: "小程序",
            link: "frontend/fragment/wechat/index",
          },
        ],
      },
      { text: "前端安全", link: "/frontend/safe/index" },
      {
        text: "其他",
        items: [
          {
            text: "测试",
            link: "/frontend/other/test/index",
          },
          {
            text: "构建工具",
            link: "/frontend/other/build/index",
          },
          {
            text: "性能优化",
            link: "/frontend/other/performance/index",
          },
          {
            text: "前端监控",
            link: "/frontend/other/monitor/index",
          },
        ],
      },
    ],
  },
  {
    text: "项目",
    link: "/projects/index",
  },
  {
    text: "面试",
    link: "/interview/index",
  },
];
export default navData;
