import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {viteBundler} from '@vuepress/bundler-vite'

import {existsSync, readdirSync} from 'node:fs';
import * as path from 'node:path';
import {join} from 'node:path';

function getSortedFiles(dir: string): string[] {
    // process.cwd() 获取项目根目录 (通常是包含 docs 的那一层)
    const dirPath = join(process.cwd(), dir);

    // 打印一下路径，确保它指向了正确的文件夹
    console.log('--- 正在扫描目录:', dirPath);

    if (!existsSync(dirPath)) {
        console.warn(`目录不存在: ${dirPath}`);
        return [];
    }

    return readdirSync(dirPath)
        .filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md')
        .sort((a, b) => {
            const nameA = a.replace('.md', '');
            const nameB = b.replace('.md', '');

            const isNumA = /^\d+$/.test(nameA);
            const isNumB = /^\d+$/.test(nameB);

            // 1. 数字在前
            if (isNumA && !isNumB) return -1;
            if (!isNumA && isNumB) return 1;

            // 2. 纯数字倒序 (33 -> 2)
            if (isNumA && isNumB) {
                return parseInt(nameB) - parseInt(nameA);
            }

            // 3. 字母正序 (a -> z)
            return nameA.localeCompare(nameB);
        })
        // VuePress 的侧边栏路径需要以 / 开头
        .map(file => `/${dir}/${file}`);
}

export default defineUserConfig({
    head: [
        [
            "link",
            {
                "rel": "icon",
                "href": "/images/hero.png",
            },
        ], [
            "link",
            {
                href: "/fonts/Torus-SemiBold.woff2",
                rel: "stylesheet",
            },
        ], [
            "link",
            {
                href: "/fonts/Torus-SemiBold.woff",
                rel: "stylesheet",
            },
        ], [
            "link",
            {
                href: "/fonts/Torus-Bold.woff2",
                rel: "stylesheet",
            },
        ], [
            "link",
            {
                href: "/fonts/Torus-Bold.woff",
                rel: "stylesheet",
            },
        ],
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
                                link: "/misc/lastwords/",
                                activeMatch: "^/misc/lastwords/$",
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
                                ...getSortedFiles('events/matches'),
                            ],
                        },
                        {
                            text: "月赛",
                            children: [
                                "/events/charts/README.md",
                                ...getSortedFiles('events/charts'),
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
                    "/misc/": [
                        {
                            text: "出群遗言",
                            children: [
                                "/misc/lastwords/README.md",
                                ...getSortedFiles('misc/lastwords/users'),
                            ]
                        }
                    ]
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
