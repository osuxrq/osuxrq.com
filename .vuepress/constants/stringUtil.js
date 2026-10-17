import rawData from '../../assets/aliasDB.json';
import stringSimilarity from "string-similarity-js";

// 核心逻辑：(?<![a-zA-Z]) 确保前面不能是英文字母
const featPattern = /(?<![a-zA-Z])\b(?:[(\\[-]\s*)?(?:feat\.?|ft\.?|featuring|covered?\s+by|cover)\b.*$/i;

// 2a. 末尾带括号的版本标记（必须成对匹配 () 或 []）
const versionParenPattern = new RegExp(
    "\\s*(?:" +
    "\\(" + // 匹配左圆括号 (
    "(?:" +
    "TV\\s*Size|" +
    "Short\\s*(?:Ver\\.?|Version|Size)?|" +
    "Game\\s*(?:Ver\\.?|Version|Size)?|" +
    "Movie\\s*(?:Ver\\.?|Version|Cut)?|" +
    "Cut\\s*Ver\\.?|" +
    "Extended\\s*(?:Edit|Version|Mix)?|" +
    "Spee?d\\s*Up(?:\\s*&\\s*Cut)?\\s*Ver\\.?|" +
    "Nightcore(?:\\s*&\\s*Cut)?\\s*Mix|" +
    "Live\\s*(?:Ver\\.?|Version)?|" +
    "Karaoke\\s*(?:Ver\\.?|Version)?|" +
    "[^)]*?\\b(?:Ver|Version|Size|Edit|Mix|Cut|Remix|Bootleg|Mashup)\\b\\.?[^)]*" +
    ")" +
    "\\)" + // 匹配右圆括号 )
    "|" +
    "\\[" + // 匹配左方括号 [
    "(?:" +
    "TV\\s*Size|" +
    "Short\\s*(?:Ver\\.?|Version|Size)?|" +
    "Game\\s*(?:Ver\\.?|Version|Size)?|" +
    "Movie\\s*(?:Ver\\.?|Version|Cut)?|" +
    "Cut\\s*Ver\\.?|" +
    "Extended\\s*(?:Edit|Version|Mix)?|" +
    "Spee?d\\s*Up(?:\\s*&\\s*Cut)?\\s*Ver\\.?|" +
    "Nightcore(?:\\s*&\\s*Cut)?\\s*Mix|" +
    "Live\\s*(?:Ver\\.?|Version)?|" +
    "Karaoke\\s*(?:Ver\\.?|Version)?|" +
    "[^\\]]*?\\b(?:Ver|Version|Size|Edit|Mix|Cut|Remix|Bootleg|Mashup)\\b\\.?[^\\]]*" +
    ")" +
    "\\]" + // 匹配右方括号 ]
    ")\\s*$",
    "i" // 对应 Kotlin 的 RegexOption.IGNORE_CASE
);

// 2b. 末尾不带括号的裸版本标记
const versionBarePattern = new RegExp(
    "\\s+(?:" +
    "TV\\s*Size|" +
    "Short\\s*(?:Ver\\.?|Version)|" +
    "Game\\s*(?:Ver\\.?|Version)|" +
    "Movie\\s*(?:Ver\\.?|Version|Cut)|" +
    "Extended\\s*(?:Edit|Version|Mix)|" +
    "Spee?d\\s*Up(?:\\s*&\\s*Cut)?\\s*Ver\\.?|" +
    "Nightcore(?:\\s*&\\s*Cut)?\\s*Mix|" +
    "Live\\s*(?:Ver\\.?|Version)|" +
    "Karaoke\\s*(?:Ver\\.?|Version)" +
    ")\\s*$",
    "i"
);

// 辅助常量
const REGEX_SPACE_MORE = /\s+/g;
// 使用 /u 开启 Unicode 属性支持，完美对应 Kotlin 的 [\p{P}\p{S}]
const REGEX_NOT_LETTER = /[\p{P}\p{S}]/gu;

/**
 * 移除 osu! 标题中不必要的版本标签，以及 feat. / ft. 及其之后的所有内容
 * @param {string|null|undefined} str
 * @returns {string}
 */
function removeSongSuffix(str) {
    if (!str) return "";

    let result = str;

    // 先移除 feat. / ft. 及其之后的内容
    result = result.replace(featPattern, "");

    // 再循环移除末尾的版本后缀
    // 阶段 1：循环剥离尾部所有「带括号的版本标记」
    while (true) {
        const next = result.replace(versionParenPattern, "");
        if (next === result) break;
        result = next;
    }

    // 阶段 2：循环剥离尾部所有「裸版本标记」
    while (true) {
        const next = result.replace(versionBarePattern, "");
        if (next === result) break;
        result = next;
    }

    return result.replace(REGEX_SPACE_MORE, " ").trim();
}

/**
 * 这个是用来标准化罗马字的
 * @param {string|null|undefined} str
 * @returns {string}
 */
function formatted(str) {
    if (!str) return "";

    return str.toLowerCase()
        .replace(REGEX_SPACE_MORE, "")
        .replace(REGEX_NOT_LETTER, "");
}

class AliasQuery {
    constructor(data) {
        // 转换为 Map，O(1) 复杂度查找
        this.map = new Map(Object.entries(data));

        // 如果需要“通过中文反查英文 key”，可以建立一个反向 Map
        // this.reverseMap = new Map(Object.entries(data).map(([k, v]) => [v, k]));
    }

    /** 1. 通过 Key 获取 Value (例如: "lastwish" -> "遗愿") */
    get(key) {
        return this.map.get(formatted(removeSongSuffix(key))) || null;
    }

    /** 2. 通过 Value 反查 Key (例如: "遗愿" -> "lastwish") */
    // getKeyByValue(value) {
    //     return this.reverseMap.get(value) || null;
    // }

    /** 3. 模糊搜索（支持 Key 或 Value 的部分匹配） */
    search(keyword) {
        if (!keyword) return null;

        const yek = formatted(removeSongSuffix(keyword));
        // const results = [];

        for (const [key, value] of this.map.entries()) {
            if (stringSimilarity(yek, key) > 0.75) {
                return String(value)
                // results.push({ key, value });
            }
        }

        // return results?.[0];
        return null;
    }

    /** 4. 获取全部数据列表 */
    getAll() {
        return Array.from(this.map.entries()).map(([key, value]) => ({ key, value }));
    }
}

// 导出单例
export const aliasQuery = new AliasQuery(rawData);