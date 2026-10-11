const starToIndex = (star) => {
    // 保留 1 位小数（四舍五入），乘以 10 变整数
    return Math.round(star * 10);
};

const MIN_INDEX = 1;   // 0.1
const MAX_INDEX = 90;  // 9.0

const defaultColor = '#AAAAAA'
const maxColor = '#000'

export const getStarColor = (starValue) => {
    const star = parseFloat(starValue);

    // 保底 1：NaN 或小于 0.1（含负数）
    if (Number.isNaN(star)) {
        return defaultColor;
    }

    const idx = Math.round(star * 10);

    if (idx < MIN_INDEX) {
        return defaultColor;
    }

    // 保底 2：超过 9.0
    if (idx > MAX_INDEX) {
        return maxColor;
    }

    // 正常范围：查表
    return STAR_COLOR_TABLE[idx] ?? defaultColor;
};

const GAMMA = 2.2;

const STAR_STOPS = [
    [0.1, 66, 144, 251],
    [1.25, 79, 192, 255],
    [2, 79, 255, 213],
    [2.5, 124, 255, 79],
    [3.3, 246, 240, 92],
    [4.2, 255, 104, 104],
    [4.9, 255, 78, 111],
    [5.8, 198, 69, 184],
    [6.7, 101, 99, 222],
    [7.7, 24, 21, 142],
    [9, 0, 0, 0]
];

// 计算单个星数的颜色（不缓存，仅用于生成表）
const computeStarColor = (star) => {
    if (star < 0.1) return '#AAAAAA';
    if (star >= 9) return '#000000';

    let i = STAR_STOPS.findIndex(stop => star < stop[0]);
    if (i === -1) i = STAR_STOPS.length - 1;

    const [bottom, r0, g0, b0] = STAR_STOPS[i - 1];
    const [top, r1, g1, b1] = STAR_STOPS[i];
    const s = (star - bottom) / (top - bottom);

    const interpolate = (c0, c1) => {
        const val = Math.pow(
            (1 - s) * Math.pow(c0, GAMMA) + s * Math.pow(c1, GAMMA),
            1 / GAMMA
        );
        return Math.round(val).toString(16).padStart(2, '0');
    };

    return `#${interpolate(r0, r1)}${interpolate(g0, g1)}${interpolate(b0, b1)}`;
};

// 模块级常量：索引 0~100 对应的颜色，只算一次
// index = round(star * 10)，范围 0 ~ 100
const STAR_COLOR_TABLE = (() => {
    const table = new Array(101); // 0 ~ 100
    for (let i = 0; i <= 100; i++) {
        table[i] = computeStarColor(i / 10);
    }
    return table;
})();