// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import * as path from "node:path";
import { join } from "node:path";
var __vite_injected_original_dirname = "D:/osuxrq.com/.vuepress";
function getSortedFiles(dir, pattern = null, isNumAsc = true, isAlphaAsc = true) {
  const dirPath = join(process.cwd(), dir);
  console.log("--- \u6B63\u5728\u626B\u63CF\u76EE\u5F55:", dirPath);
  if (!existsSync(dirPath)) {
    console.warn(`\u76EE\u5F55\u4E0D\u5B58\u5728: ${dirPath}`);
    return [];
  }
  const parseName = (name) => {
    const match = name.match(/^(.*?)((\d+\.\d+)|\d+)?$/);
    const prefix = match ? match[1] : "";
    const numStr = match && match[2] !== void 0 ? match[2] : null;
    const num = numStr !== null ? parseFloat(numStr) : NaN;
    return { prefix, num };
  };
  return readdirSync(dirPath).filter((file) => {
    if (!file.endsWith(".md") || file.toLowerCase() === "readme.md") {
      return false;
    }
    const fileNameWithoutExt = file.replace(/\.md$/i, "");
    return !(pattern && !pattern.test(fileNameWithoutExt));
  }).sort((a, b) => {
    const nameA = a.replace(/\.md$/i, "");
    const nameB = b.replace(/\.md$/i, "");
    const isPureNumA = /^\d+$/.test(nameA);
    const isPureNumB = /^\d+$/.test(nameB);
    if (isPureNumA && !isPureNumB) return -1;
    if (!isPureNumA && isPureNumB) return 1;
    if (isPureNumA && isPureNumB) {
      const diff = parseInt(nameA, 10) - parseInt(nameB, 10);
      return isNumAsc ? diff : -diff;
    }
    const parsedA = parseName(nameA);
    const parsedB = parseName(nameB);
    const prefixCompare = parsedA.prefix.localeCompare(parsedB.prefix, void 0, { sensitivity: "base" });
    if (prefixCompare !== 0) {
      return isAlphaAsc ? prefixCompare : -prefixCompare;
    }
    const hasNumA = !isNaN(parsedA.num);
    const hasNumB = !isNaN(parsedB.num);
    if (hasNumA && hasNumB) {
      const numDiff = parsedA.num - parsedB.num;
      return isNumAsc ? numDiff : -numDiff;
    }
    if (!hasNumA && hasNumB) return -1;
    if (hasNumA && !hasNumB) return 1;
    return 0;
  }).map((file) => `/${dir}/${file}`);
}
function getSortedFilesByType(dir) {
  const dirPath = join(process.cwd(), dir);
  if (!existsSync(dirPath)) return [];
  const posts = [];
  const files = readdirSync(dirPath);
  files.forEach((file) => {
    if (!file.endsWith(".md") || file.toLowerCase() === "readme.md") return;
    const filePath = join(dirPath, file);
    const content = readFileSync(filePath, "utf-8");
    const fm = {};
    const lines = content.split(/\r?\n/).slice(0, 50);
    let inFrontmatter = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === "---") {
        if (!inFrontmatter) {
          inFrontmatter = true;
          continue;
        } else {
          break;
        }
      }
      if (inFrontmatter) {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim().toLowerCase();
          let value = line.slice(colonIndex + 1).trim().replace(/^['"](.*)['"]$/, "$1");
          fm[key] = value;
        }
      }
    }
    const slug = file.replace(/\.md$/i, "");
    const cleanDir = dir.trim().replace(/^\/+|\/+$/g, "");
    const rawType = (fm.type || "").trim().toLowerCase();
    let typeName = "\u5E38\u89C4";
    if (rawType === "recommend") typeName = "\u8C31\u9762\u63A8\u8350";
    else if (rawType === "suggest") typeName = "\u6280\u5DE7\u5EFA\u8BAE";
    else if (rawType === "simple") typeName = "\u8A00\u7B80\u610F\u8D45";
    else if (rawType === "unknown") typeName = "\u672A\u77E5";
    posts.push({
      link: `/${cleanDir}/${slug}.html`,
      date: fm.date || "",
      typeName
    });
  });
  posts.sort((a, b) => {
    if (b.date && a.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
  const map = {};
  posts.forEach((post) => {
    if (!map[post.typeName]) map[post.typeName] = [];
    map[post.typeName].push(post);
  });
  const typePriority = {
    "\u8C31\u9762\u63A8\u8350": 1,
    "\u6280\u5DE7\u5EFA\u8BAE": 2,
    "\u5E38\u89C4": 10,
    "\u8A00\u7B80\u610F\u8D45": 21,
    "\u672A\u77E5": 22
  };
  const sortedTypeNames = Object.keys(map).sort((a, b) => {
    const pA = typePriority[a] !== void 0 ? typePriority[a] : 99;
    const pB = typePriority[b] !== void 0 ? typePriority[b] : 99;
    return pA - pB;
  });
  return sortedTypeNames.map((typeName) => ({
    text: typeName,
    children: map[typeName].map((p) => p.link)
  }));
}
function getSortedFilesByYear(dir) {
  const dirPath = join(process.cwd(), dir);
  if (!existsSync(dirPath)) return [];
  const posts = [];
  const files = readdirSync(dirPath);
  files.forEach((file) => {
    if (!file.endsWith(".md") || file.toLowerCase() === "readme.md") return;
    const filePath = join(dirPath, file);
    const content = readFileSync(filePath, "utf-8");
    const fm = {};
    const lines = content.split(/\r?\n/).slice(0, 50);
    let inFrontmatter = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === "---") {
        if (!inFrontmatter) {
          inFrontmatter = true;
          continue;
        } else {
          break;
        }
      }
      if (inFrontmatter) {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim().toLowerCase();
          fm[key] = line.slice(colonIndex + 1).trim().replace(/^['"](.*)['"]$/, "$1");
        }
      }
    }
    const slug = file.replace(/\.md$/i, "");
    const cleanDir = dir.trim().replace(/^\/+|\/+$/g, "");
    let year = "\u672A\u5206\u7C7B";
    if (fm.date) {
      const dateObj = new Date(fm.date);
      if (!isNaN(dateObj.getTime())) {
        year = String(dateObj.getFullYear());
      } else {
        const yearMatch = String(fm.date).match(/\d{4}/);
        if (yearMatch) year = yearMatch[0];
      }
    }
    posts.push({
      link: `/${cleanDir}/${slug}.html`,
      date: fm.date || "",
      year
    });
  });
  posts.sort((a, b) => {
    if (b.date && a.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.year.localeCompare(a.year);
  });
  const map = {};
  posts.forEach((post) => {
    if (!map[post.year]) map[post.year] = [];
    map[post.year].push(post);
  });
  const sortedYears = Object.keys(map).sort((a, b) => {
    if (a === "\u672A\u5206\u7C7B") return 1;
    if (b === "\u672A\u5206\u7C7B") return -1;
    return b.localeCompare(a);
  });
  return sortedYears.map((year) => ({
    text: `${year} \u5E74`,
    children: map[year].map((p) => p.link)
  }));
}
var config_default = defineUserConfig({
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    [
      "link",
      {
        href: "/fonts/Torus-SemiBold.woff2",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "/fonts/Torus-SemiBold.woff",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "/fonts/Torus-Bold.woff2",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "/fonts/Torus-Bold.woff",
        rel: "stylesheet"
      }
    ],
    ["meta", { name: "referrer", content: "no-referrer" }]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "osu! \u65B0\u4EBA\u7FA4",
      description: "\u4E00\u4E2A\u4E3A\u65B0\u4EBA\u800C\u751F\u7684\u7FA4\u804A\u56E2\u4F53\u3002"
    }
  },
  port: 5173,
  alias: {
    "@": path.resolve(__vite_injected_original_dirname, "components")
  },
  theme: defaultTheme({
    locales: {
      "/": {
        navbar: [
          // 导航栏
          "/introduction/how-to-join.md",
          // 下面是永远不会匹配任何东西的 Regex
          // 如果你希望在加群页面也高亮“介绍”的话，
          // 就把加群的 activeMatch 设置为这个 Regex
          // 以避免匹配到
          // ^(?!x)x
          {
            text: "\u4ECB\u7ECD",
            link: "/introduction/",
            activeMatch: "^/introduction/(?!how-to-join)"
          },
          {
            text: "\u5E38\u89C1\u95EE\u9898",
            children: [
              ...getSortedFiles("faq")
            ]
          },
          {
            text: "\u7BA1\u7406",
            children: [
              {
                text: "\u7BA1\u7406\u7EC4\u4ECB\u7ECD",
                link: "/people/",
                activeMatch: "^/people/$"
              },
              "/people/owner.md",
              "/people/administrators.md",
              "/people/alumni.md"
            ]
          },
          {
            text: "\u6D3B\u52A8",
            children: [
              {
                text: "\u6D3B\u52A8\u4ECB\u7ECD",
                link: "/events/README.md",
                activeMatch: "^/events/$"
              },
              "/events/matches/",
              "/events/charts/",
              "/events/collections/"
            ]
          },
          {
            text: "\u6587\u6863",
            children: [
              {
                text: "\u8C31\u9762\u63A8\u8350",
                link: "/article/recommend/README.md",
                activeMatch: "^/article/recommend/$"
              },
              {
                text: "\u51FA\u7FA4\u9057\u8A00",
                link: "/article/lastwords/README.md",
                activeMatch: "^/article/lastwords/$"
              },
              {
                text: "\u6E38\u620F\u6307\u5357",
                link: "/article/tips/README.md",
                activeMatch: "^/article/tips/$"
              }
            ]
          },
          {
            text: "\u66F4\u591A",
            children: [
              {
                text: "\u673A\u5668\u4EBA",
                link: "/misc/bots/"
              },
              {
                text: "\u5409\u7965\u7269",
                link: "/misc/mascots/"
              },
              {
                text: "\u65B0\u4EBA\u7FA4\u7684\u56DE\u5FC6",
                children: [
                  {
                    text: "\u5F00\u542F\u56DE\u5FC6",
                    link: "https://meme.osuxrq.com/"
                  },
                  {
                    text: "\u6DFB\u52A0\u56DE\u5FC6",
                    link: "/misc/meme/"
                  }
                ]
              }
            ]
          },
          {
            text: "\u5143\u4FE1\u606F",
            children: [
              ...getSortedFiles("meta")
            ]
          }
        ],
        sidebar: {
          // 边栏
          "/introduction/": [
            "/introduction/README.md",
            "/introduction/how-to-join.md",
            "/introduction/series.md",
            "/introduction/history.md"
          ],
          "/faq/": [
            ...getSortedFiles("faq")
          ],
          "/events/": [
            {
              text: "\u65B0\u4EBA\u7FA4\u7FA4\u8D5B",
              children: [
                ...getSortedFiles("events/matches", /^[0-9.]+$/, false)
              ]
            },
            {
              text: "\u8FDB\u9636\u7FA4\u7FA4\u8D5B",
              children: [
                ...getSortedFiles("events/matches", /^[ao]/i, false, false)
              ]
            },
            {
              text: "\u5176\u4ED6\u7FA4\u8D5B",
              children: [
                ...getSortedFiles("events/matches", /^(?![0-9.]+$)(?![ao])/i, false)
              ]
            },
            {
              text: "\u6708\u8D5B",
              children: [
                ...getSortedFiles("events/charts", void 0, false)
              ]
            },
            {
              text: "\u60AC\u8D4F",
              children: [
                "/events/rewards/README.md"
              ]
            },
            {
              text: "\u96C6\u9526",
              children: [
                "/events/collections/README.md"
              ]
            }
          ],
          "/article/recommend/": [
            {
              text: "\u8C31\u9762\u63A8\u8350",
              link: "README.md",
              children: getSortedFilesByYear("article/recommend")
            }
          ],
          "/article/lastwords/": [
            {
              text: "\u51FA\u7FA4\u9057\u8A00",
              link: "README.md",
              children: getSortedFilesByType("article/lastwords/users")
            }
          ],
          "/article/tips/": [
            {
              text: "\u6E38\u620F\u6307\u5357",
              link: "README.md",
              children: getSortedFilesByYear("article/tips")
            }
          ],
          "/meta/": [
            {
              text: "\u5143\u4FE1\u606F",
              children: getSortedFiles("meta")
            }
          ],
          "/history/": [
            "/history/README.md"
          ],
          "/people/": [
            "/people/README.md",
            "/people/owner.md",
            "/people/administrators.md",
            "/people/alumni.md"
          ]
        },
        logo: "/images/hero.png",
        editLink: true,
        editLinkText: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875",
        lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0",
        contributorsText: "\u8D21\u732E\u8005",
        tip: "\u63D0\u793A",
        warning: "\u6CE8\u610F",
        danger: "\u8B66\u544A",
        notFound: [
          "\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709\u3002",
          "\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u513F\u6765\u4E86\uFF1F",
          "\u8FD9\u662F\u4E00\u4E2A\u56DB\u3007\u56DB\u9875\u9762\u3002",
          "\u6211\u4EEC\u597D\u50CF\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5\u3002"
        ],
        backToHome: "\u8FD4\u56DE\u9996\u9875",
        openInNewWindow: "\u5728\u65B0\u7A97\u53E3\u6253\u5F00"
      }
    },
    repo: "osuxrq/osuxrq.com",
    lastUpdated: true,
    contributors: true,
    docsRepo: "osuxrq/osuxrq.com",
    docsBranch: "main"
  }),
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L29zdXhycS5jb20vLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxvc3V4cnEuY29tXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L29zdXhycS5jb20vLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7ZGVmaW5lVXNlckNvbmZpZ30gZnJvbSAndnVlcHJlc3MnXHJcbmltcG9ydCB7ZGVmYXVsdFRoZW1lfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcclxuaW1wb3J0IHt2aXRlQnVuZGxlcn0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItdml0ZSdcclxuXHJcbmltcG9ydCB7ZXhpc3RzU3luYywgcmVhZGRpclN5bmMsIHJlYWRGaWxlU3luY30gZnJvbSAnbm9kZTpmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAnbm9kZTpwYXRoJztcclxuaW1wb3J0IHtqb2lufSBmcm9tICdub2RlOnBhdGgnO1xyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NTNENlx1NjM5Mlx1NUU4Rlx1NTQwRVx1NzY4NFx1NjU4N1x1Njg2M1x1NTIxN1x1ODg2OFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyIC0gXHU2MjZCXHU2M0NGXHU3Njg0XHU3NkVFXHU1RjU1XHU4REVGXHU1Rjg0XHJcbiAqIEBwYXJhbSB7UmVnRXhwfSBbcGF0dGVybl0gLSBcdTUzRUZcdTkwMDlcdUZGMENcdTUzMzlcdTkxNERcdTRFMERcdTU0MkJcdTU0MEVcdTdGMDBcdTY1ODdcdTRFRjZcdTU0MERcdTc2ODRcdTZCNjNcdTUyMTlcdTg4NjhcdThGQkVcdTVGMEZcclxuICogQHBhcmFtIHtib29sZWFufSBbaXNOdW1Bc2M9ZmFsc2VdIC0gXHU3RUFGXHU2NTcwXHU1QjU3XHU2MzkyXHU1RThGXHU2NUI5XHU1NDExXHVGRjFBdHJ1ZSBcdTRFM0FcdTZCNjNcdTVFOEYgKDEtPjMzXHVGRjBDXHU5RUQ4XHU4QkE0KVx1RkYwQ2ZhbHNlIFx1NEUzQVx1NTAxMlx1NUU4RiAoMzMtPjEpXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzQWxwaGFBc2M9dHJ1ZV0gLSBcdTk3NUVcdTdFQUZcdTY1NzBcdTVCNTcvXHU1QjU3XHU2QkNEXHU2MzkyXHU1RThGXHU2NUI5XHU1NDExXHVGRjFBdHJ1ZSBcdTRFM0FcdTZCNjNcdTVFOEYgKGEtPnpcdUZGMENcdTlFRDhcdThCQTQpXHVGRjBDZmFsc2UgXHU0RTNBXHU1MDEyXHU1RThGICh6LT5hKVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTb3J0ZWRGaWxlcyhkaXI6IHN0cmluZywgcGF0dGVybjogUmVnRXhwID0gbnVsbCwgaXNOdW1Bc2M6IGJvb2xlYW4gPSB0cnVlLCBpc0FscGhhQXNjOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGRpclBhdGggPSBqb2luKHByb2Nlc3MuY3dkKCksIGRpcik7XHJcblxyXG4gICAgY29uc29sZS5sb2coJy0tLSBcdTZCNjNcdTU3MjhcdTYyNkJcdTYzQ0ZcdTc2RUVcdTVGNTU6JywgZGlyUGF0aCk7XHJcblxyXG4gICAgaWYgKCFleGlzdHNTeW5jKGRpclBhdGgpKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBcdTc2RUVcdTVGNTVcdTRFMERcdTVCNThcdTU3Mjg6ICR7ZGlyUGF0aH1gKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXHU4Rjg1XHU1MkE5XHU1MUZEXHU2NTcwXHVGRjFBXHU1QzA2XHU2NTg3XHU0RUY2XHU1NDBEXHU4OUUzXHU2NzkwXHU0RTNBIFtcdTVCNTdcdTZCQ0QvXHU5NzVFXHU2NTcwXHU1QjU3XHU1MjREXHU3RjAwLCBcdTY1NzBcdTVCNTdcdTU0MEVcdTdGMDBdXHJcbiAgICAvLyBcdTRGOEJcdTU5ODIgXCJhMlwiIC0+IFtcImFcIiwgMl1cdUZGMENcImFcIiAtPiBbXCJhXCIsIE5hTl1cdUZGMENcIjEyM1wiIC0+IFtcIlwiLCAxMjNdXHJcbiAgICBjb25zdCBwYXJzZU5hbWUgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gXHU1MzM5XHU5MTREXHU2NzJCXHU1QzNFXHU1M0VGXHU4MEZEXHU1RTI2XHU1QzBGXHU2NTcwXHU3MEI5XHU3Njg0XHU2NTcwXHU1QjU3XHVGRjA4XHU1OTgyIDEuNSBcdTYyMTYgMlx1RkYwOVxyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gbmFtZS5tYXRjaCgvXiguKj8pKChcXGQrXFwuXFxkKyl8XFxkKyk/JC8pO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcclxuICAgICAgICBjb25zdCBudW1TdHIgPSBtYXRjaCAmJiBtYXRjaFsyXSAhPT0gdW5kZWZpbmVkID8gbWF0Y2hbMl0gOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG51bSA9IG51bVN0ciAhPT0gbnVsbCA/IHBhcnNlRmxvYXQobnVtU3RyKSA6IE5hTjtcclxuICAgICAgICByZXR1cm4geyBwcmVmaXgsIG51bSB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gcmVhZGRpclN5bmMoZGlyUGF0aClcclxuICAgICAgICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5tZCcpIHx8IGZpbGUudG9Mb3dlckNhc2UoKSA9PT0gJ3JlYWRtZS5tZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWVXaXRob3V0RXh0ID0gZmlsZS5yZXBsYWNlKC9cXC5tZCQvaSwgJycpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICEocGF0dGVybiAmJiAhcGF0dGVybi50ZXN0KGZpbGVOYW1lV2l0aG91dEV4dCkpO1xyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lQSA9IGEucmVwbGFjZSgvXFwubWQkL2ksICcnKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZUIgPSBiLnJlcGxhY2UoL1xcLm1kJC9pLCAnJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc1B1cmVOdW1BID0gL15cXGQrJC8udGVzdChuYW1lQSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUHVyZU51bUIgPSAvXlxcZCskLy50ZXN0KG5hbWVCKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEuIFx1N0VBRlx1NjU3MFx1NUI1N1x1NjU4N1x1NEVGNiBcdTRGMThcdTUxNDhcdTdFQTdcdTlBRDhcdTRFOEUgXHU1RTI2XHU1QjU3XHU2QkNEXHU3Njg0XHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICAgIGlmIChpc1B1cmVOdW1BICYmICFpc1B1cmVOdW1CKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGlmICghaXNQdXJlTnVtQSAmJiBpc1B1cmVOdW1CKSByZXR1cm4gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIDIuIFx1N0VBRlx1NjU3MFx1NUI1N1x1OTVGNFx1NzY4NFx1NjM5Mlx1NUU4RlxyXG4gICAgICAgICAgICBpZiAoaXNQdXJlTnVtQSAmJiBpc1B1cmVOdW1CKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gcGFyc2VJbnQobmFtZUEsIDEwKSAtIHBhcnNlSW50KG5hbWVCLCAxMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOdW1Bc2MgPyBkaWZmIDogLWRpZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIDMuIFx1NkRGN1x1NTQwOFx1N0M3Qlx1NTc4QiAoXHU1OTgyIGExLCBhMiwgYjEpIFx1NjJDNlx1NTIwNlx1NkJENFx1OEY4M1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBID0gcGFyc2VOYW1lKG5hbWVBKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQiA9IHBhcnNlTmFtZShuYW1lQik7XHJcblxyXG4gICAgICAgICAgICAvLyAzLjEgXHU1MTQ4XHU2QkQ0XHU4RjgzXHU1MjREXHU3RjAwXHU1QjU3XHU2QkNEXHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZpeENvbXBhcmUgPSBwYXJzZWRBLnByZWZpeC5sb2NhbGVDb21wYXJlKHBhcnNlZEIucHJlZml4LCB1bmRlZmluZWQsIHsgc2Vuc2l0aXZpdHk6ICdiYXNlJyB9KTtcclxuICAgICAgICAgICAgaWYgKHByZWZpeENvbXBhcmUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0FscGhhQXNjID8gcHJlZml4Q29tcGFyZSA6IC1wcmVmaXhDb21wYXJlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAzLjIgXHU1MjREXHU3RjAwXHU3NkY4XHU1NDBDXHU2NUY2XHVGRjBDXHU2QkQ0XHU4RjgzXHU1NDBFXHU3RjAwXHU2NTcwXHU1QjU3XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc051bUEgPSAhaXNOYU4ocGFyc2VkQS5udW0pO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNOdW1CID0gIWlzTmFOKHBhcnNlZEIubnVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNOdW1BICYmIGhhc051bUIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bURpZmYgPSBwYXJzZWRBLm51bSAtIHBhcnNlZEIubnVtO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTnVtQXNjID8gbnVtRGlmZiA6IC1udW1EaWZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBcdTY1RTBcdTY1NzBcdTVCNTdcdTc2ODRcdTYzOTJcdTU3MjhcdTY3MDlcdTY1NzBcdTVCNTdcdTc2ODRcdTUyNERcdTk3NjJcclxuICAgICAgICAgICAgaWYgKCFoYXNOdW1BICYmIGhhc051bUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYgKGhhc051bUEgJiYgIWhhc051bUIpIHJldHVybiAxO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKGZpbGUgPT4gYC8ke2Rpcn0vJHtmaWxlfWApO1xyXG59XHJcblxyXG4vKipcclxuICogXHU0RUZGXHU3MTY3IEVhc3lIb2xkZXIgXHU5MDNCXHU4RjkxXHVGRjFBXHU2MzA5IHR5cGUgXHU0RjE4XHU1MTQ4XHU3RUE3XHU1MjA2XHU3RUM0XHVGRjBDXHU3RUM0XHU1MTg1XHU2MzA5XHU2NUU1XHU2NzFGXHU5NjREXHU1RThGXHU2MzkyXHU1RThGXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgLSBcdTYyNkJcdTYzQ0ZcdTc2ODRcdTc2RUVcdTVGNTVcdThERUZcdTVGODRcclxuICogQHJldHVybnMge09iamVjdFtdfSBcdThGRDRcdTU2REVcdTYzMDkgdHlwZSBcdTUyMDZcdTdFQzRcdTU0MEVcdTc2ODRcdTdFRDNcdTY3ODRcclxuICovXHJcbmZ1bmN0aW9uIGdldFNvcnRlZEZpbGVzQnlUeXBlKGRpcjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkaXJQYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCBkaXIpO1xyXG4gICAgaWYgKCFleGlzdHNTeW5jKGRpclBhdGgpKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgcG9zdHMgPSBbXTtcclxuICAgIGNvbnN0IGZpbGVzID0gcmVhZGRpclN5bmMoZGlyUGF0aCk7XHJcblxyXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5tZCcpIHx8IGZpbGUudG9Mb3dlckNhc2UoKSA9PT0gJ3JlYWRtZS5tZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBqb2luKGRpclBhdGgsIGZpbGUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG5cclxuICAgICAgICAvLyBcdTdCODBcdTUzNTVcdTYzRDBcdTUzRDZcdTUyNEQgNTAgXHU4ODRDXHU3Njg0IEZyb250bWF0dGVyXHJcbiAgICAgICAgY29uc3QgZm06IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoL1xccj9cXG4vKS5zbGljZSgwLCA1MCk7XHJcbiAgICAgICAgbGV0IGluRnJvbnRtYXR0ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKHRyaW1tZWQgPT09ICctLS0nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluRnJvbnRtYXR0ZXIpIHsgaW5Gcm9udG1hdHRlciA9IHRydWU7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgYnJlYWs7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5Gcm9udG1hdHRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb25JbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9uSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gbGluZS5zbGljZSgwLCBjb2xvbkluZGV4KS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsaW5lLnNsaWNlKGNvbG9uSW5kZXggKyAxKS50cmltKCkucmVwbGFjZSgvXlsnXCJdKC4qKVsnXCJdJC8sICckMScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZtW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2x1ZyA9IGZpbGUucmVwbGFjZSgvXFwubWQkL2ksICcnKTtcclxuICAgICAgICBjb25zdCBjbGVhbkRpciA9IGRpci50cmltKCkucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgJycpO1xyXG5cclxuICAgICAgICAvLyBcdTY2MjBcdTVDMDQgdHlwZSBcdTRFMkRcdTY1ODdcdTU0MERcclxuICAgICAgICBjb25zdCByYXdUeXBlID0gKGZtLnR5cGUgfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCB0eXBlTmFtZSA9ICdcdTVFMzhcdTg5QzQnO1xyXG4gICAgICAgIGlmIChyYXdUeXBlID09PSAncmVjb21tZW5kJykgdHlwZU5hbWUgPSAnXHU4QzMxXHU5NzYyXHU2M0E4XHU4MzUwJztcclxuICAgICAgICBlbHNlIGlmIChyYXdUeXBlID09PSAnc3VnZ2VzdCcpIHR5cGVOYW1lID0gJ1x1NjI4MFx1NURFN1x1NUVGQVx1OEJBRSc7XHJcbiAgICAgICAgZWxzZSBpZiAocmF3VHlwZSA9PT0gJ3NpbXBsZScpIHR5cGVOYW1lID0gJ1x1OEEwMFx1N0I4MFx1NjEwRlx1OEQ0NSc7XHJcbiAgICAgICAgZWxzZSBpZiAocmF3VHlwZSA9PT0gJ3Vua25vd24nKSB0eXBlTmFtZSA9ICdcdTY3MkFcdTc3RTUnO1xyXG5cclxuICAgICAgICBwb3N0cy5wdXNoKHtcclxuICAgICAgICAgICAgbGluazogYC8ke2NsZWFuRGlyfS8ke3NsdWd9Lmh0bWxgLFxyXG4gICAgICAgICAgICBkYXRlOiBmbS5kYXRlIHx8ICcnLFxyXG4gICAgICAgICAgICB0eXBlTmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMS4gXHU2NTc0XHU0RjUzXHU2MzA5XHU2NUU1XHU2NzFGXHU5NjREXHU1RThGXHU2MzkyXHU1RThGXHJcbiAgICBwb3N0cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGIuZGF0ZSAmJiBhLmRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMi4gXHU2MzA5IHR5cGUgXHU1MjA2XHU3RUM0XHJcbiAgICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHR5cGVvZiBwb3N0cz4gPSB7fTtcclxuICAgIHBvc3RzLmZvckVhY2gocG9zdCA9PiB7XHJcbiAgICAgICAgaWYgKCFtYXBbcG9zdC50eXBlTmFtZV0pIG1hcFtwb3N0LnR5cGVOYW1lXSA9IFtdO1xyXG4gICAgICAgIG1hcFtwb3N0LnR5cGVOYW1lXS5wdXNoKHBvc3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMy4gXHU4MUVBXHU1QjlBXHU0RTQ5IHR5cGUgXHU0RjE4XHU1MTQ4XHU3RUE3XHU2MzkyXHU1RThGXHJcbiAgICBjb25zdCB0eXBlUHJpb3JpdHk6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XHJcbiAgICAgICAgJ1x1OEMzMVx1OTc2Mlx1NjNBOFx1ODM1MCc6IDEsXHJcbiAgICAgICAgJ1x1NjI4MFx1NURFN1x1NUVGQVx1OEJBRSc6IDIsXHJcbiAgICAgICAgJ1x1NUUzOFx1ODlDNCc6IDEwLFxyXG4gICAgICAgICdcdThBMDBcdTdCODBcdTYxMEZcdThENDUnOiAyMSxcclxuICAgICAgICAnXHU2NzJBXHU3N0U1JzogMjJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc29ydGVkVHlwZU5hbWVzID0gT2JqZWN0LmtleXMobWFwKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcEEgPSB0eXBlUHJpb3JpdHlbYV0gIT09IHVuZGVmaW5lZCA/IHR5cGVQcmlvcml0eVthXSA6IDk5O1xyXG4gICAgICAgIGNvbnN0IHBCID0gdHlwZVByaW9yaXR5W2JdICE9PSB1bmRlZmluZWQgPyB0eXBlUHJpb3JpdHlbYl0gOiA5OTtcclxuICAgICAgICByZXR1cm4gcEEgLSBwQjtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzb3J0ZWRUeXBlTmFtZXMubWFwKHR5cGVOYW1lID0+ICh7XHJcbiAgICAgICAgdGV4dDogdHlwZU5hbWUsXHJcbiAgICAgICAgY2hpbGRyZW46IG1hcFt0eXBlTmFtZV0ubWFwKHAgPT4gcC5saW5rKVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG4vKipcclxuICogXHU0RUZGXHU3MTY3IEVhc3lXYWxsZXQgXHU5MDNCXHU4RjkxXHVGRjFBXHU2MzA5XHU1RTc0XHU0RUZEXHU1MjA2XHU3RUM0XHVGRjBDXHU1RTc0XHU0RUZEXHU5NjREXHU1RThGXHVGRjBDXHU3RUM0XHU1MTg1XHU2MzA5XHU2NUU1XHU2NzFGXHU5NjREXHU1RThGXHU2MzkyXHU1RThGXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgLSBcdTYyNkJcdTYzQ0ZcdTc2ODRcdTc2RUVcdTVGNTVcdThERUZcdTVGODRcclxuICogQHJldHVybnMge09iamVjdFtdfSBcdThGRDRcdTU2REVcdTYzMDlcdTVFNzRcdTRFRkRcdTUyMDZcdTdFQzRcdTU0MEVcdTc2ODRcdTdFRDNcdTY3ODRcclxuICovXHJcbmZ1bmN0aW9uIGdldFNvcnRlZEZpbGVzQnlZZWFyKGRpcjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkaXJQYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCBkaXIpO1xyXG4gICAgaWYgKCFleGlzdHNTeW5jKGRpclBhdGgpKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgcG9zdHMgPSBbXTtcclxuICAgIGNvbnN0IGZpbGVzID0gcmVhZGRpclN5bmMoZGlyUGF0aCk7XHJcblxyXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5tZCcpIHx8IGZpbGUudG9Mb3dlckNhc2UoKSA9PT0gJ3JlYWRtZS5tZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBqb2luKGRpclBhdGgsIGZpbGUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG5cclxuICAgICAgICBjb25zdCBmbTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgvXFxyP1xcbi8pLnNsaWNlKDAsIDUwKTtcclxuICAgICAgICBsZXQgaW5Gcm9udG1hdHRlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAodHJpbW1lZCA9PT0gJy0tLScpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaW5Gcm9udG1hdHRlcikgeyBpbkZyb250bWF0dGVyID0gdHJ1ZTsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyBicmVhazsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbkZyb250bWF0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvbkluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb25JbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBsaW5lLnNsaWNlKDAsIGNvbG9uSW5kZXgpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZtW2tleV0gPSBsaW5lLnNsaWNlKGNvbG9uSW5kZXggKyAxKS50cmltKCkucmVwbGFjZSgvXlsnXCJdKC4qKVsnXCJdJC8sICckMScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbHVnID0gZmlsZS5yZXBsYWNlKC9cXC5tZCQvaSwgJycpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuRGlyID0gZGlyLnRyaW0oKS5yZXBsYWNlKC9eXFwvK3xcXC8rJC9nLCAnJyk7XHJcblxyXG4gICAgICAgIC8vIFx1ODlFM1x1Njc5MFx1NUU3NFx1NEVGRFxyXG4gICAgICAgIGxldCB5ZWFyID0gJ1x1NjcyQVx1NTIwNlx1N0M3Qic7XHJcbiAgICAgICAgaWYgKGZtLmRhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGZtLmRhdGUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGRhdGVPYmouZ2V0VGltZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgeWVhciA9IFN0cmluZyhkYXRlT2JqLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhck1hdGNoID0gU3RyaW5nKGZtLmRhdGUpLm1hdGNoKC9cXGR7NH0vKTtcclxuICAgICAgICAgICAgICAgIGlmICh5ZWFyTWF0Y2gpIHllYXIgPSB5ZWFyTWF0Y2hbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc3RzLnB1c2goe1xyXG4gICAgICAgICAgICBsaW5rOiBgLyR7Y2xlYW5EaXJ9LyR7c2x1Z30uaHRtbGAsXHJcbiAgICAgICAgICAgIGRhdGU6IGZtLmRhdGUgfHwgJycsXHJcbiAgICAgICAgICAgIHllYXJcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFx1NjU3NFx1NEY1M1x1NjMwOVx1NjVFNVx1NjcxRlx1NEVDRVx1NjVCMFx1NTIzMFx1ODAwMVx1NjM5Mlx1NUU4RlxyXG4gICAgcG9zdHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChiLmRhdGUgJiYgYS5kYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYi55ZWFyLmxvY2FsZUNvbXBhcmUoYS55ZWFyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFx1NjMwOVx1NUU3NFx1NEVGRFx1NTIwNlx1N0VDNFxyXG4gICAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgcG9zdHM+ID0ge307XHJcbiAgICBwb3N0cy5mb3JFYWNoKHBvc3QgPT4ge1xyXG4gICAgICAgIGlmICghbWFwW3Bvc3QueWVhcl0pIG1hcFtwb3N0LnllYXJdID0gW107XHJcbiAgICAgICAgbWFwW3Bvc3QueWVhcl0ucHVzaChwb3N0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFx1NUU3NFx1NEVGRFx1OTY0RFx1NUU4Rlx1NjM5Mlx1NTIxN1xyXG4gICAgY29uc3Qgc29ydGVkWWVhcnMgPSBPYmplY3Qua2V5cyhtYXApLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYSA9PT0gJ1x1NjcyQVx1NTIwNlx1N0M3QicpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChiID09PSAnXHU2NzJBXHU1MjA2XHU3QzdCJykgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiBiLmxvY2FsZUNvbXBhcmUoYSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc29ydGVkWWVhcnMubWFwKHllYXIgPT4gKHtcclxuICAgICAgICB0ZXh0OiBgJHt5ZWFyfSBcdTVFNzRgLFxyXG4gICAgICAgIGNoaWxkcmVuOiBtYXBbeWVhcl0ubWFwKHAgPT4gcC5saW5rKVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICAgIGhlYWQ6IFtcclxuICAgICAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2ltYWdlcy9mYXZpY29uLmljbycgfV0sIFtcclxuICAgICAgICAgICAgXCJsaW5rXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL2ZvbnRzL1RvcnVzLVNlbWlCb2xkLndvZmYyXCIsXHJcbiAgICAgICAgICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sIFtcclxuICAgICAgICAgICAgXCJsaW5rXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL2ZvbnRzL1RvcnVzLVNlbWlCb2xkLndvZmZcIixcclxuICAgICAgICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICBcImxpbmtcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogXCIvZm9udHMvVG9ydXMtQm9sZC53b2ZmMlwiLFxyXG4gICAgICAgICAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgIFwibGlua1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBcIi9mb250cy9Ub3J1cy1Cb2xkLndvZmZcIixcclxuICAgICAgICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgWydtZXRhJywgeyBuYW1lOiAncmVmZXJyZXInLCBjb250ZW50OiAnbm8tcmVmZXJyZXInIH1dLFxyXG4gICAgXSxcclxuICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAnLyc6IHtcclxuICAgICAgICAgICAgbGFuZzogJ3poLUNOJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdvc3UhIFx1NjVCMFx1NEVCQVx1N0ZBNCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnXHU0RTAwXHU0RTJBXHU0RTNBXHU2NUIwXHU0RUJBXHU4MDBDXHU3NTFGXHU3Njg0XHU3RkE0XHU4MDRBXHU1NkUyXHU0RjUzXHUzMDAyJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcG9ydDogNTE3MyxcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiY29tcG9uZW50c1wiKSxcclxuICAgIH0sXHJcbiAgICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcclxuICAgICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgICAgICcvJzoge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvaW50cm9kdWN0aW9uL2hvdy10by1qb2luLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU0RTBCXHU5NzYyXHU2NjJGXHU2QzM4XHU4RkRDXHU0RTBEXHU0RjFBXHU1MzM5XHU5MTREXHU0RUZCXHU0RjU1XHU0RTFDXHU4OTdGXHU3Njg0IFJlZ2V4XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU0RjYwXHU1RTBDXHU2NzFCXHU1NzI4XHU1MkEwXHU3RkE0XHU5ODc1XHU5NzYyXHU0RTVGXHU5QUQ4XHU0RUFFXHUyMDFDXHU0RUNCXHU3RUNEXHUyMDFEXHU3Njg0XHU4QkREXHVGRjBDXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU1QzMxXHU2MjhBXHU1MkEwXHU3RkE0XHU3Njg0IGFjdGl2ZU1hdGNoIFx1OEJCRVx1N0Y2RVx1NEUzQVx1OEZEOVx1NEUyQSBSZWdleFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFx1NEVFNVx1OTA3Rlx1NTE0RFx1NTMzOVx1OTE0RFx1NTIzMFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF4oPyF4KXhcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU0RUNCXHU3RUNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2ludHJvZHVjdGlvbi9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWF0Y2g6IFwiXi9pbnRyb2R1Y3Rpb24vKD8haG93LXRvLWpvaW4pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5nZXRTb3J0ZWRGaWxlcygnZmFxJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3QkExXHU3NDA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTdCQTFcdTc0MDZcdTdFQzRcdTRFQ0JcdTdFQ0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9wZW9wbGUvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWF0Y2g6IFwiXi9wZW9wbGUvJFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3Blb3BsZS9vd25lci5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvcGVvcGxlL2FkbWluaXN0cmF0b3JzLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9wZW9wbGUvYWx1bW5pLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NkQzQlx1NTJBOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTZEM0JcdTUyQThcdTRFQ0JcdTdFQ0RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9ldmVudHMvUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWF0Y2g6IFwiXi9ldmVudHMvJFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2V2ZW50cy9tYXRjaGVzL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvZXZlbnRzL2NoYXJ0cy9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2V2ZW50cy9jb2xsZWN0aW9ucy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTY1ODdcdTY4NjMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU4QzMxXHU5NzYyXHU2M0E4XHU4MzUwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCIvYXJ0aWNsZS9yZWNvbW1lbmQvUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWF0Y2g6IFwiXi9hcnRpY2xlL3JlY29tbWVuZC8kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1MUZBXHU3RkE0XHU5MDU3XHU4QTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCIvYXJ0aWNsZS9sYXN0d29yZHMvUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWF0Y2g6IFwiXi9hcnRpY2xlL2xhc3R3b3Jkcy8kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2RTM4XHU2MjBGXHU2MzA3XHU1MzU3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCIvYXJ0aWNsZS90aXBzL1JFQURNRS5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1hdGNoOiBcIl4vYXJ0aWNsZS90aXBzLyRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NjZGNFx1NTkxQScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTY3M0FcdTU2NjhcdTRFQkFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9taXNjL2JvdHMvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTU0MDlcdTc5NjVcdTcyNjlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9taXNjL21hc2NvdHMvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTY1QjBcdTRFQkFcdTdGQTRcdTc2ODRcdTU2REVcdTVGQzZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NUYwMFx1NTQyRlx1NTZERVx1NUZDNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCJodHRwczovL21lbWUub3N1eHJxLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NkRGQlx1NTJBMFx1NTZERVx1NUZDNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCIvbWlzYy9tZW1lL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1MTQzXHU0RkUxXHU2MDZGJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdldFNvcnRlZEZpbGVzKCdtZXRhJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgc2lkZWJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFx1OEZCOVx1NjgwRlxyXG4gICAgICAgICAgICAgICAgICAgIFwiL2ludHJvZHVjdGlvbi9cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9pbnRyb2R1Y3Rpb24vUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ludHJvZHVjdGlvbi9ob3ctdG8tam9pbi5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9pbnRyb2R1Y3Rpb24vc2VyaWVzLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ludHJvZHVjdGlvbi9oaXN0b3J5Lm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBcIi9mYXEvXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZ2V0U29ydGVkRmlsZXMoJ2ZhcScpLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvZXZlbnRzL1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2NUIwXHU0RUJBXHU3RkE0XHU3RkE0XHU4RDVCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdldFNvcnRlZEZpbGVzKCdldmVudHMvbWF0Y2hlcycsIC9eWzAtOS5dKyQvLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OEZEQlx1OTYzNlx1N0ZBNFx1N0ZBNFx1OEQ1QlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5nZXRTb3J0ZWRGaWxlcygnZXZlbnRzL21hdGNoZXMnLCAvXlthb10vaSwgZmFsc2UsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1MTc2XHU0RUQ2XHU3RkE0XHU4RDVCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdldFNvcnRlZEZpbGVzKCdldmVudHMvbWF0Y2hlcycsIC9eKD8hWzAtOS5dKyQpKD8hW2FvXSkvaSwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTY3MDhcdThENUJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZ2V0U29ydGVkRmlsZXMoJ2V2ZW50cy9jaGFydHMnLCB1bmRlZmluZWQsIGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2MEFDXHU4RDRGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2V2ZW50cy9yZXdhcmRzL1JFQURNRS5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTk2QzZcdTk1MjZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvZXZlbnRzL2NvbGxlY3Rpb25zL1JFQURNRS5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiL2FydGljbGUvcmVjb21tZW5kL1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU4QzMxXHU5NzYyXHU2M0E4XHU4MzUwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIlJFQURNRS5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGdldFNvcnRlZEZpbGVzQnlZZWFyKCdhcnRpY2xlL3JlY29tbWVuZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvYXJ0aWNsZS9sYXN0d29yZHMvXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTUxRkFcdTdGQTRcdTkwNTdcdThBMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IFwiUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZ2V0U29ydGVkRmlsZXNCeVR5cGUoJ2FydGljbGUvbGFzdHdvcmRzL3VzZXJzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiL2FydGljbGUvdGlwcy9cIjpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2RTM4XHU2MjBGXHU2MzA3XHU1MzU3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIlJFQURNRS5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGdldFNvcnRlZEZpbGVzQnlZZWFyKCdhcnRpY2xlL3RpcHMnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvbWV0YS9cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NTE0M1x1NEZFMVx1NjA2RlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGdldFNvcnRlZEZpbGVzKCdtZXRhJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiL2hpc3RvcnkvXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvaGlzdG9yeS9SRUFETUUubWRcIixcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiL3Blb3BsZS9cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9wZW9wbGUvUkVBRE1FLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL3Blb3BsZS9vd25lci5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9wZW9wbGUvYWRtaW5pc3RyYXRvcnMubWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIvcGVvcGxlL2FsdW1uaS5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbG9nbzogXCIvaW1hZ2VzL2hlcm8ucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBlZGl0TGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVkaXRMaW5rVGV4dDogJ1x1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1JyxcclxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkVGV4dDogXCJcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yc1RleHQ6IFwiXHU4RDIxXHU3MzJFXHU4MDA1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXA6ICdcdTYzRDBcdTc5M0EnLFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogJ1x1NkNFOFx1NjEwRicsXHJcbiAgICAgICAgICAgICAgICBkYW5nZXI6ICdcdThCNjZcdTU0NEEnLFxyXG4gICAgICAgICAgICAgICAgbm90Rm91bmQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAnXHU4RkQ5XHU5MUNDXHU0RUMwXHU0RTQ4XHU5MEZEXHU2Q0ExXHU2NzA5XHUzMDAyJyxcclxuICAgICAgICAgICAgICAgICAgICAnXHU2MjExXHU0RUVDXHU2MDBFXHU0RTQ4XHU1MjMwXHU4RkQ5XHU1MTNGXHU2NzY1XHU0RTg2XHVGRjFGJyxcclxuICAgICAgICAgICAgICAgICAgICAnXHU4RkQ5XHU2NjJGXHU0RTAwXHU0RTJBXHU1NkRCXHUzMDA3XHU1NkRCXHU5ODc1XHU5NzYyXHUzMDAyJyxcclxuICAgICAgICAgICAgICAgICAgICAnXHU2MjExXHU0RUVDXHU1OTdEXHU1MENGXHU4RkRCXHU1MTY1XHU0RTg2XHU5NTE5XHU4QkVGXHU3Njg0XHU5NEZFXHU2M0E1XHUzMDAyJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrVG9Ib21lOiAnXHU4RkQ0XHU1NkRFXHU5OTk2XHU5ODc1JyxcclxuICAgICAgICAgICAgICAgIG9wZW5Jbk5ld1dpbmRvdzogJ1x1NTcyOFx1NjVCMFx1N0E5N1x1NTNFM1x1NjI1M1x1NUYwMCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBvOiAnb3N1eHJxL29zdXhycS5jb20nLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gICAgICAgIGNvbnRyaWJ1dG9yczogdHJ1ZSxcclxuICAgICAgICBkb2NzUmVwbzogJ29zdXhycS9vc3V4cnEuY29tJyxcclxuICAgICAgICBkb2NzQnJhbmNoOiAnbWFpbicsXHJcbiAgICB9KSxcclxuICAgIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVAsU0FBUSx3QkFBdUI7QUFDaFIsU0FBUSxvQkFBbUI7QUFDM0IsU0FBUSxtQkFBa0I7QUFFMUIsU0FBUSxZQUFZLGFBQWEsb0JBQW1CO0FBQ3BELFlBQVksVUFBVTtBQUN0QixTQUFRLFlBQVc7QUFObkIsSUFBTSxtQ0FBbUM7QUFnQnpDLFNBQVMsZUFBZSxLQUFhLFVBQWtCLE1BQU0sV0FBb0IsTUFBTSxhQUFzQixNQUFnQjtBQUN6SCxRQUFNLFVBQVUsS0FBSyxRQUFRLElBQUksR0FBRyxHQUFHO0FBRXZDLFVBQVEsSUFBSSw2Q0FBZSxPQUFPO0FBRWxDLE1BQUksQ0FBQyxXQUFXLE9BQU8sR0FBRztBQUN0QixZQUFRLEtBQUssbUNBQVUsT0FBTyxFQUFFO0FBQ2hDLFdBQU8sQ0FBQztBQUFBLEVBQ1o7QUFJQSxRQUFNLFlBQVksQ0FBQyxTQUFpQjtBQUVoQyxVQUFNLFFBQVEsS0FBSyxNQUFNLDBCQUEwQjtBQUNuRCxVQUFNLFNBQVMsUUFBUSxNQUFNLENBQUMsSUFBSTtBQUNsQyxVQUFNLFNB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
