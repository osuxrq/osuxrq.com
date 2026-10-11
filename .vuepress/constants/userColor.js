// 移植自 osu!lazer 的 32 种默认用户名/编号预设颜色池
const DEFAULT_USERNAME_COLOURS = [
    "#588c7e", "#b2a367", "#c98f65", "#bc5151", "#5c8bd6", "#7f6ab7", "#a368ad", "#aa6880",
    "#6fad9b", "#f2e394", "#f2ae72", "#f98f8a", "#7daef4", "#a691f2", "#c894d3", "#d895b0",
    "#53c4a1", "#eace5c", "#ea8c47", "#fc4f4f", "#3d94ea", "#7760ea", "#af52c6", "#e25696",
    "#677c66", "#9b8732", "#8c5129", "#8c3030", "#1f5d91", "#4335a5", "#812a96", "#992861"
];

/**
 * osu.Game/Overlays/Chat/ChatLine.cs
 * 根据用户的编号或名称生成一个固定的 Hex 色彩
 * @param {number|string} input - 用户的数字 ID 或字符串用户名
 * @returns {string} Hex 颜色代码（例如 "#588c7e"）
 */
export function getUserColour(input) {
    let hash = 0;

    if (typeof input === "number") {
        // 如果传入的是数字 ID，直接使用
        hash = Math.abs(input);
    } else if (typeof input === "string") {
        // 如果传入的是用户名字符串，通过简单的字符累加计算出一个哈希值
        for (let i = 0; i < input.length; i++) {
            hash = input.charCodeAt(i) + ((hash << 5) - hash);
        }
        hash = Math.abs(hash);
    } else {
        // 兜底默认值
        hash = 0;
    }

    // 通过数组长度取模，保证颜色在预设范围内循环且固定
    const index = hash % DEFAULT_USERNAME_COLOURS.length;
    return DEFAULT_USERNAME_COLOURS[index] ?? '#e3f2fd';
}