---
title: 贡献指南
lang: zh-CN
---

# 贡献指南

欢迎为本站提交内容修改或补充。
本站使用 [VuePress](https://v2.vuepress.vuejs.org/zh/) 构建，内容使用 Markdown 编写。

## 基本步骤

若要贡献，请遵循下列步骤。

1. 在网站中点击右上角 GitHub 跳转至仓库
2. Fork 仓库并克隆`git clone`到本地
3. 下载安装 [Node.js](https://nodejs.org/zh-cn)。
4. 运行 `npm install` 安装依赖
5. 修改或新增页面
6. 本地预览、验证您的修改或新增效果
7. 提交更改并发起 Pull Request

::: warning 管理组须知
虽然管理组有直接修改的权限，但为避免冲突，请通过 Pull Request 提交更改，避免直接修改仓库。
:::

## 如何创建页面

### 新建 Markdown 文件

在合适的文件夹创建合适的`.md`文件。文件路径将直接决定页面URL。文件名为“README.md”则为该目录。

- `/folder/README.md` → `/folder/`
- `/folder/page.md` → `/folder/page`

页面结构：

```md
# 页面标题
正文内容
```

::: details 过时的信息

~~然后在文件中添加 frontmatter：~~

```plaintext
---
title: 群赛
lang: zh-CN
---
```

:::tip
无需添加 frontmatter，但添加也无妨。
:::

正文使用 Markdown 语法，不再使用一级标题。

如果不会 Markdown，请自行搜索 Markdown 语法.

参考资料：

- [Markdown 基本语法](https://markdown.com.cn/basic-syntax/)
- [VuePress 默认主题的 Markdown 容器](https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html)
- [VuePress Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html)

### 更新导航（可选）

如果增加、删除或重命名了文件，并且有必要添加到导航栏或边栏中，
在 .vuepress/config.ts 中更新导航栏和侧边栏配置。

参考文档：

[VuePress 官方文档](https://v2.vuepress.vuejs.org/zh/)

[导航栏配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/navbar/zh.ts)
[侧边栏配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/configs/sidebar/zh.ts)
[主配置](https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/config.ts)

## 本地实时查看效果

::: tip
推荐使用 VS Code 进行开发。
:::
启动开发服务器：

```bash
npm install    # 安装依赖
npm run docs:dev  # 启动预览
```

点击显示的本地链接即可查看效果。如不熟悉 VuePress，请务必在提交 Pull Request 前检查。

## 模块

本项目开发了部分 Vue Component，可以合理使用。

### 名人堂

使用了项目中的 AlumniList.vue 和 Card.vue 模块。

这个模块已经和腾讯表格联动：填写[表格](https://docs.qq.com/form/page/DUnV4TlRPUUNTQ2FO)即可完成添加。

### 谱面推荐和出群遗言

使用了项目中的 Beatmap.vue、Score.vue、Player.vue 模块。

可以通过调用雨沐机器人 (YumuBot) 的特殊指令，来快速获取需要填写的属性。

#### 展示谱面

可以使用指令 **!gw** 快速获取。

参数可以填多个谱面编号 (BID)，可以按逗号分隔，数量如果多于 5 个，则会打包成文件发送。

以下是需要写在文档里的属性和示例：

<Beatmap
bid=1268419
sid=600246
preview="Yousei Teikoku - Shadow Corps (Lune Hivernale) [Insane]"
star=4.90
max=1597
/>

```vue
<Beatmap
  bid=1268419
  sid=600246
  preview="Yousei Teikoku - Shadow Corps (Lune Hivernale) [Insane]"
  star=4.90
  max=1597
/>
```

机器人会给您提供前 5-6 个属性。

注意，自行构建时，需要按照 **艺术家** `-` **曲名** `(` 谱师 `)` `[` 难度名 `]` 的格式填写。

color 为自定义属性，可以修改这个组件的最左侧颜色，与星级颜色区分开（方便归类谱面）

以下是示例。您可以自行尝试。

<Beatmap
bid=1268419
sid=600246
preview="Yousei Teikoku - Shadow Corps (Lune Hivernale) [Insane]"
star=4.90
max=1597
disabled=true
color="#92e"
alias="影之军团"
/>

```vue
<Beatmap
  bid=1268419
  sid=600246
  preview="Yousei Teikoku - Shadow Corps (Lune Hivernale) [Insane]"
  star=4.90
  max=1597
  disabled=true
  color="#92e"
  alias="影之军团"
/>
```

##### 关于别名：alias

机器人会在谱面有非 ASCII 的原标题时，提供给您 alias 字段。您可以尽量标准化它，来确保简体中文浏览者能马上理解歌曲标题的含义：

- 如果原标题是日文汉字占主导的标题，或是别名含有舶来语（通常原标题就是那个英语单词或者法语单词等），可以尝试翻译它。
  - 比如：`モノクロ・インザナイト` -> `Monochrome In the Night` -> `夜色中的单色`
  - 可以丢给 AI 来翻译。它们比翻译软件做得好。
- 如果原标题是自造语言或者无意义的形声词，可以保持原样。
  - 比如：`La gis sulva za Celow`
  - 比如：`チュルリラ・チュルリラ・ダッダッダ！` 一般不翻译成 `啾噜哩啦·啾噜哩啦·哒哒哒！`
- 如果原标题是英文单词组合，或是比较无意义的音游曲标题，可以直接删掉 alias。
- 如果原标题完全是简体中文，直接保留即可。
- 如果原标题含有繁体中文，可以尽量改成简体中文。
  - 比如：`下一站．與你` -> `下一站．与你`
- 如果原标题中有 (TV Size) 这样的附加标签，可以酌情删去。
- 有特殊或者重大意义或者特别出名的谱面，可以直接使用它最容易辨认的那个别名，
  - 比如：`Kobito of the Shining Needle ~ Little Princess` -> `小公主`
  - 比如：`Silent Voyage to Eternity` -> `鼠之力`
  - 比如：`Emotional Skyscraper ~ World's End` -> `2012`

修改别名不强求。如果没有更好的标准化方法，可以留着或者保持原样。

##### 关于无法下载：disabled

如果谱面无法下载，机器人会提供 disabled=true 选项。此时，谱面预览会变黑，也不允许玩家直接点击访问谱面页。

您也可以在自己构建一个不存在的谱面（比如已经删除，但是小夜还能下载）时，手动填写 disabled=true。

如果谱面被版权，但是机器人没有提供 disabled=true 时，你也可以补上。

#### 展示谱面集

可以使用指令 **!gy** 快速获取。

参数可以填多个谱面编号 (SID)，可以按逗号分隔，数量如果多于 5 个，则会打包成文件发送。

以下是需要写在文档里的属性和示例：

<Beatmap
sid=2260829
preview="Tsukasa (Arte Refact) - Fragrance (XinBai-HW Remix) (MeAqua tete)"
star=7.13
difficulties=[2.44,3.84,4.68,5.73,7.08,7.13]
/>

```vue
<Beatmap
  sid=2260829
  preview="Tsukasa (Arte Refact) - Fragrance (XinBai-HW Remix) (MeAqua tete)"
  star=7.13
  difficulties=[2.44,3.84,4.68,5.73,7.08,7.13]
/>
```

机器人会给您提供前 4 个属性。

前面提到的附加属性 disabled 和 color 也能用。

#### 展示玩家

可以使用指令 **!gu** 快速获取。

参数可以填单个玩家名，或 id=...，或 @。

以下是需要写在文档里的属性和示例：

<Player
id=7183040
name="Sayori_yui"
country=0
global=6570
from="CN"
accuracy=98.41
level=101
progress=41
performance=7532
/>

```vue
<Player 
  id=7183040
  name="Sayori_yui"
  country=0
  global=6570
  from="CN"
  accuracy=98.41
  level=101
  progress=41
  performance=7532
/>
```

#### 展示成绩

可以使用指令 **!gx** 快速生成。

参数需要填写 1-5 个：谱面编号 (BID)、准确率 (0-10000)、连击数、评级 (SS-D)、表现分 (PP)。

以下是需要写在文档里的属性和示例：

<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="a"
performance=727
/>

```vue
<Score
  bid=658127
  sid=292301
  preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
  star=7.17
  max=2402
  mode="o"
  accuracy=99.06
  combo=2364
  rank="a"
  performance=727
/>
```

如果对应的成绩没有可用的表现分，可以在 performance 的位置填入 "..." 的字符串，PP 字样会自动消失。

### 时间线

测试使用。

<Timeline :items="[
{ date: '2023-03-16', title: '项目初始化', description: '完成搭建与框架选型' },
{ date: '2026-05-20', title: '发布 V1.0 正式版', description: '上线核心功能组件' },
{ date: '2026-03-01', title: '测试版本发布', description: '内部 Beta 测试' }
]" />

```vue
<Timeline :items="[
  { date: '2023-03-16', title: '项目初始化', description: '完成搭建与框架选型' },
  { date: '2026-05-20', title: '发布 V1.0 正式版', description: '上线核心功能组件' },
  { date: '2026-03-01', title: '测试版本发布', description: '内部 Beta 测试' }
]" />
```

## 许可声明

除非另有说明，本站内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans) 协议授权。
提交贡献即表示您同意将内容置于相同协议之下。

## 测试代码：色盲无障碍模式

<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="ssh"
performance=727
/>

<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="ss"
performance=727
/>

<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="sh"
performance=727
/>


<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="s"
performance=727
/>


<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="a"
performance=727
/>


<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="b"
performance=727
/>


<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="c"
performance=727
/>

<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="d"
performance=727
/>


<Score
bid=658127
sid=292301
preview="xi - Blue Zenith (Asphyxia) [FOUR DIMENSIONS]"
star=7.17
max=2402
mode="o"
accuracy=99.06
combo=2364
rank="f"
performance=727
/>


