import { sidebar } from "vuepress-theme-hope";
// 侧边栏
export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
  "/links": [
    {
      text: "链接",
      icon: "book",
      prefix: "",
      children: "structure",
    },
  ]
});
