import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {viteBundler} from '@vuepress/bundler-vite'

import {existsSync, readdirSync} from 'node:fs';
import * as path from 'node:path';
import {join} from 'node:path';

/**
 * 获取排序后的文档列表
 * @param {string} dir - 扫描的目录路径
 * @param {RegExp} [pattern] - 可选，匹配不含后缀文件名的正则表达式
 * @param {boolean} [isNumAsc=false] - 纯数字排序方向：true 为正序 (1->33，默认)，false 为倒序 (33->1)
 * @param {boolean} [isAlphaAsc=true] - 非纯数字/字母排序方向：true 为正序 (a->z，默认)，false 为倒序 (z->a)
 * @returns {string[]}
 */
function getSortedFiles(dir: string, pattern: RegExp = null, isNumAsc: boolean = true, isAlphaAsc: boolean = true): string[] {
    const dirPath = join(process.cwd(), dir);

    console.log('--- 正在扫描目录:', dirPath);

    if (!existsSync(dirPath)) {
        console.warn(`目录不存在: ${dirPath}`);
        return [];
    }

    // 辅助函数：将文件名解析为 [字母/非数字前缀, 数字后缀]
    // 例如 "a2" -> ["a", 2]，"a" -> ["a", NaN]，"123" -> ["", 123]
    const parseName = (name: string) => {
        // 匹配末尾可能带小数点的数字（如 1.5 或 2）
        const match = name.match(/^(.*?)((\d+\.\d+)|\d+)?$/);
        const prefix = match ? match[1] : '';
        const numStr = match && match[2] !== undefined ? match[2] : null;
        const num = numStr !== null ? parseFloat(numStr) : NaN;
        return { prefix, num };
    };

    return readdirSync(dirPath)
        .filter(file => {
            if (!file.endsWith('.md') || file.toLowerCase() === 'readme.md') {
                return false;
            }

            const fileNameWithoutExt = file.replace(/\.md$/i, '');

            return !(pattern && !pattern.test(fileNameWithoutExt));


        })
        .sort((a, b) => {
            const nameA = a.replace(/\.md$/i, '');
            const nameB = b.replace(/\.md$/i, '');

            const isPureNumA = /^\d+$/.test(nameA);
            const isPureNumB = /^\d+$/.test(nameB);

            // 1. 纯数字文件 优先级高于 带字母的文件
            if (isPureNumA && !isPureNumB) return -1;
            if (!isPureNumA && isPureNumB) return 1;

            // 2. 纯数字间的排序
            if (isPureNumA && isPureNumB) {
                const diff = parseInt(nameA, 10) - parseInt(nameB, 10);
                return isNumAsc ? diff : -diff;
            }

            // 3. 混合类型 (如 a1, a2, b1) 拆分比较
            const parsedA = parseName(nameA);
            const parsedB = parseName(nameB);

            // 3.1 先比较前缀字母
            const prefixCompare = parsedA.prefix.localeCompare(parsedB.prefix, undefined, { sensitivity: 'base' });
            if (prefixCompare !== 0) {
                return isAlphaAsc ? prefixCompare : -prefixCompare;
            }

            // 3.2 前缀相同时，比较后缀数字
            const hasNumA = !isNaN(parsedA.num);
            const hasNumB = !isNaN(parsedB.num);

            if (hasNumA && hasNumB) {
                const numDiff = parsedA.num - parsedB.num;
                return isNumAsc ? numDiff : -numDiff;
            }

            // 无数字的排在有数字的前面
            if (!hasNumA && hasNumB) return -1;
            if (hasNumA && !hasNumB) return 1;

            return 0;
        })
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

        ['meta', { name: 'referrer', content: 'no-referrer' }],
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
                        children: [
                            ...getSortedFiles('faq'),
                        ],
                    },
                    {
                        text: "管理",
                        children: [
                            {
                                text: "管理组介绍",
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
                                text: "活动介绍",
                                link: "/events/README.md",
                                activeMatch: "^/events/$",
                            },
                            "/events/matches/",
                            "/events/charts/",
                            "/events/collections/"
                        ]
                    },
                    {
                        text: '文档',
                        children: [
                            {
                                text: "谱面推荐",
                                link: "/article/recommend/README.md",
                                activeMatch: "^/article/recommend/$",
                            },
                            {
                                text: "出群遗言",
                                link: "/article/lastwords/README.md",
                                activeMatch: "^/article/lastwords/$",
                            },
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
                    "/faq/": [
                        ...getSortedFiles('faq'),
                    ],
                    "/events/": [
                        {
                            text: "新人群群赛",
                            children: [
                                ...getSortedFiles('events/matches', /^[0-9.]+$/, false),
                            ],
                        },
                        {
                            text: "进阶群群赛",
                            children: [
                                ...getSortedFiles('events/matches', /^[ao]/i, false, false),
                            ],
                        },
                        {
                            text: "其他群赛",
                            children: [
                                ...getSortedFiles('events/matches', /^(?![0-9.]+$)(?![ao])/i, false),
                            ],
                        },
                        {
                            text: "月赛",
                            children: [
                                ...getSortedFiles('events/charts', undefined, false),
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
                    "/article/recommend/": [
                        {
                            text: "谱面推荐",
                            children: getSortedFiles('article/recommend'),
                        },
                    ],
                    "/article/lastwords/": [
                        {
                            text: "出群遗言",
                            children: getSortedFiles('article/lastwords/users'),
                        }
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
