import {navbar} from "vuepress-theme-hope";
// 导航栏
export default navbar([
    "/",
    "/demo/",
    "/blog/",
    "/booksnotes/",
    "/link",
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/guide/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
]);
