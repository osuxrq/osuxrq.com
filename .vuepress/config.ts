import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import * as path from "node:path";

export default defineUserConfig({
    head: [
        ["link", {
            "rel": "icon",
            "href": "/images/hero.png",
        }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'osu! 新人群',
            description: '一个为新人而生的群聊团体。',
        }
    },
    port:5173,
    alias: {
        "@": path.resolve(__dirname, "components"),
    },
    theme: defaultTheme({
        locales: {
            '/': {
                navbar: [
                    // 导航栏
                    "/introduction/how-to-join.md",
                    // 下面是永远不会匹配任何东西的 Regex
                    // 如果你希望在加群页面也高亮“介绍”的话，
                    // 就把加群的 activeMatch 设置为这个 Regex
                    // 以避免匹配到
                    // ^(?!x)x
                    {
                        text: "介绍",
                        link: "/introduction/",
                        activeMatch: "^/introduction/(?!how-to-join)",
                    },
                    {
                        text: "常见问题",
                        link: "/faq/",
                    },
                    {
                        text: "管理",
                        children: [
                            {
                                text: "管理组",
                                link: "/people/",
                                activeMatch: "^/people/$",
                            },
                            "/people/owner.md",
                            "/people/administrators.md",
                            "/people/alumni.md",
                        ]
                    },
                    {
                        text: '活动',
                        children: [
                            {
                                text: "活动",
                                link: "/events/README.md",
                                activeMatch: "^/events/$",
                            },
                            "/events/matches/",
                            "/events/charts/",
                            "/events/collections/"
                        ]
                    },
                    {
                        text: '更多',
                        children: [
                            {
                                text: "机器人",
                                link: "/misc/bots/"
                            },
                            {
                                text: "吉祥物",
                                link: "/misc/mascots/"
                            },
                            {
                                text: "出群遗言",
                                link: "/misc/lastwords/"
                            },
                            {
                                text: "新人群的回忆",
                                children: [
                                    {
                                        text: "开启回忆",
                                        link: "https://meme.osuxrq.com/"
                                    },
                                    {
                                        text: "添加回忆",
                                        link: "/misc/meme/"
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Meta',
                        children: [
                            "/meta/contribution-guide",
                            "/meta/contributors.md",
                            "/meta/events.md",
                        ]
                    },
                ],
                sidebar: {
                    // 边栏
                    "/introduction/": [
                        "/introduction/README.md",
                        "/introduction/how-to-join.md",
                        "/introduction/series.md",
                        "/introduction/history.md",
                    ],
                    "/events/": [
                        "/events/README.md",
                        {
                            text: "群赛",
                            children: [
                                "/events/matches/README.md",
                                "/events/matches/33.md",
                                "/events/matches/32.md",
                                "/events/matches/31.md",
                                "/events/matches/30.md",
                                "/events/matches/29.md",
                                "/events/matches/28.md",
                                "/events/matches/27.md",
                                "/events/matches/26.md",
                                "/events/matches/25.md",
                                "/events/matches/24.md",
                                "/events/matches/23.md",
                                "/events/matches/22.md",
                                "/events/matches/21.md",
                                "/events/matches/20.md",
                                "/events/matches/2.md",
                                "/events/matches/a2.md",
                                "/events/matches/a1.md",
                                "/events/matches/y4.md",
                                "/events/matches/y3.md",
                                "/events/matches/y2.md",
                                "/events/matches/y1.md",
                            ],
                        },
                        {
                            text: "月赛",
                            children: [
                                "/events/charts/README.md",
                                "/events/charts/h2312.md",
                                "/events/charts/h2311.md",
                                "/events/charts/h2310.md",
                                "/events/charts/h2309.md",
                                "/events/charts/h2308.md",
                                "/events/charts/h2307.md",
                                "/events/charts/h2306.md",
                                "/events/charts/h2305.md",
                                "/events/charts/h2304.md",
                                "/events/charts/h2303.md",
                            ],
                        },
                        {
                            text: "悬赏",
                            children: [
                                "/events/rewards/README.md",
                            ],
                        },
                        {
                            text: "集锦",
                            children: [
                                "/events/collections/README.md",
                            ],
                        },
                    ],
                    "/meta/": [
                        "/meta/contribution-guide.md",
                        "/meta/contributors.md",
                        "/meta/events.md",
                    ],
                    "/history/": [
                        "/history/README.md",
                    ],
                    "/people/": [
                        "/people/README.md",
                        "/people/owner.md",
                        "/people/administrators.md",
                        "/people/alumni.md",
                    ],
                    "/misc/": false
                },
                logo: "/images/hero.png",
                editLink: true,
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: "上次更新",
                contributorsText: "贡献者",
                tip: '提示',
                warning: '注意',
                danger: '警告',
                notFound: [
                    '这里什么都没有。',
                    '我们怎么到这儿来了？',
                    '这是一个四〇四页面。',
                    '我们好像进入了错误的链接。',
                ],
                backToHome: '返回首页',
                openInNewWindow: '在新窗口打开',
            },
        },
        repo: 'osuxrq/osuxrq.com',
        lastUpdated: true,
        contributors: true,
        docsRepo: 'osuxrq/osuxrq.com',
        docsBranch: 'main',
    }),
    bundler: viteBundler(),
})
