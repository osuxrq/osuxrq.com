export
// ================= 1. Mod 颜色与全称配置表 (可在此自由扩充) =================
const MOD_CONFIG = {
    // 标准 / 通用 Mod
    NF: { name: 'No Fail', bg: '#0068B7', color: '#FFFFFF' },
    EZ: { name: 'Easy', bg: '#22AC38', color: '#FFFFFF' },
    TD: { name: 'Touch Device', bg: '#7ECEF4', color: '#000000' },
    HD: { name: 'Hidden', bg: '#F8B551', color: '#FFFFFF' },
    HR: { name: 'Hard Rock', bg: '#D32F2F', color: '#FFFFFF' },
    SD: { name: 'Sudden Death', bg: '#FF9800', color: '#FFFFFF' },
    DT: { name: 'Double Time', bg: '#00A0E9', color: '#FFFFFF' },
    RX: { name: 'Relax', bg: '#BFC31F', color: '#FFFFFF' },
    HT: { name: 'Half Time', bg: '#BDBDBD', color: '#000000' },
    NC: { name: 'Nightcore', bg: '#9922EE', color: '#FFFFFF' },
    FL: { name: 'Flashlight', bg: '#000000', color: '#FFFFFF' },
    AT: { name: 'Autoplay', bg: '#00B7EE', color: '#FFFFFF' },
    SO: { name: 'Spun Out', bg: '#B28850', color: '#FFFFFF' },
    AP: { name: 'Auto Pilot', bg: '#B3D465', color: '#FFFFFF' },
    PF: { name: 'Perfect', bg: '#FFF100', color: '#000000' },

    // 其他 Lazer Mod
    DC: { name: 'Daycore', bg: '#DADADA', color: '#000000' },
    BL: { name: 'Blinds', bg: '#EB6100', color: '#FFFFFF' },
    ST: { name: 'Strict Tracking', bg: '#D32F2F', color: '#FFFFFF' },
    // AC: { name: 'Accuracy Challenge', bg: '#9E040D', color: '#FFFFFF' },
    TP: { name: 'Target Practice', bg: '#920783', color: '#FFFFFF' },
    DA: { name: 'Difficulty Adjust', bg: '#601986', color: '#FFFFFF' },
    CL: { name: 'Classic', bg: '#920783', color: '#FFFFFF' },
    RD: { name: 'Random', bg: '#009944', color: '#FFFFFF' },
    MR: { name: 'Mirror', bg: '#007130', color: '#FFFFFF' },
    // AL: { name: 'Alternate', bg: '#F16DAA', color: '#FFFFFF' },
    // SG: { name: 'Single Tap', bg: '#F59AC3', color: '#000000' },
    CN: { name: 'Cinema', bg: '#00B7EE', color: '#FFFFFF' },
    // TR: { name: 'Transform', bg: '#EA68A2', color: '#FFFFFF' },
    // WG: { name: 'Wiggle', bg: '#EA68A2', color: '#FFFFFF' },
    // SI: { name: 'Spin In', bg: '#EA68A2', color: '#FFFFFF' },
    // GR: { name: 'Grow', bg: '#EA68A2', color: '#FFFFFF' },
    // DF: { name: 'Deflate', bg: '#EA68A2', color: '#FFFFFF' },
    // WU: { name: 'Wind Up', bg: '#EA68A2', color: '#FFFFFF' },
    // WD: { name: 'Wind Down', bg: '#EA68A2', color: '#FFFFFF' },
    // TC: { name: 'Traceable', bg: '#EA68A2', color: '#FFFFFF' },
    // BR: { name: 'Barrel Roll', bg: '#EA68A2', color: '#FFFFFF' },
    // AD: { name: 'Approach Different', bg: '#EA68A2', color: '#FFFFFF' },
    // MU: { name: 'Muted', bg: '#EA68A2', color: '#FFFFFF' },
    // NS: { name: 'No Scope', bg: '#EA68A2', color: '#FFFFFF' },
    // MG: { name: 'Magnetised', bg: '#EA68A2', color: '#FFFFFF' },
    // RP: { name: 'Repel', bg: '#EA68A2', color: '#FFFFFF' },
    // AS: { name: 'Adaptive Speed', bg: '#EA68A2', color: '#FFFFFF' },
    // FR: { name: 'Freeze Frame', bg: '#EA68A2', color: '#FFFFFF' },
    // BU: { name: 'Bubbles', bg: '#EA68A2', color: '#FFFFFF' },
    // SY: { name: 'Synesthesia', bg: '#EA68A2', color: '#FFFFFF' },
    // DP: { name: 'Depth', bg: '#EA68A2', color: '#FFFFFF' },
    // BM: { name: 'Bloom', bg: '#9E005E', color: '#FFFFFF' },
    V2: { name: 'Score V2', bg: '#000000', color: '#FFFFFF' },
    SV2: { name: 'Score V2', bg: '#000000', color: '#FFFFFF' },
    SW: { name: 'Swap', bg: '#7B0046', color: '#FFFFFF' },
    // CS: { name: 'Constant Speed', bg: '#A086BF', color: '#FFFFFF' },
    // FF: { name: 'Floating Fruits', bg: '#EA68A2', color: '#FFFFFF' },
    // SR: { name: 'Simplified Rhythm', bg: '#EA68A2', color: '#FFFFFF' },
    // MF: { name: 'Moving Fast', bg: '#EA68A2', color: '#FFFFFF' },
    // NR: { name: 'No Release', bg: '#68BE8D', color: '#FFFFFF' },
    FI: { name: 'Fade In', bg: '#F8B551', color: '#000000' },
    CO: { name: 'Cover', bg: '#F8B551', color: '#000000' },
    DS: { name: 'Dual Stages', bg: '#9E005E', color: '#FFFFFF' },
    IN: { name: 'Invert', bg: '#5F5BA8', color: '#FFFFFF' },
    HO: { name: 'Hold Off', bg: '#8781BE', color: '#FFFFFF' },

    // Key Mods
    '1K': { name: '1 Key', bg: '#616161', color: '#FFFFFF' },
    '2K': { name: '2 Keys', bg: '#616161', color: '#FFFFFF' },
    '3K': { name: '3 Keys', bg: '#616161', color: '#FFFFFF' },
    '4K': { name: '4 Keys', bg: '#616161', color: '#FFFFFF' },
    '5K': { name: '5 Keys', bg: '#616161', color: '#FFFFFF' },
    '6K': { name: '6 Keys', bg: '#616161', color: '#FFFFFF' },
    '7K': { name: '7 Keys', bg: '#616161', color: '#FFFFFF' },
    '8K': { name: '8 Keys', bg: '#616161', color: '#FFFFFF' },
    '9K': { name: '9 Keys', bg: '#616161', color: '#FFFFFF' },
    '10K': { name: '10 Keys', bg: '#616161', color: '#FFFFFF' },

    // 比赛 / 特殊
    NM: { name: 'No Mod', bg: '#22AC38', color: '#FFFFFF', desc: "不允许玩家选择模组" },
    RC: { name: 'Rice', bg: '#22AC38', color: '#FFFFFF', desc: "含有大量普通音符的图" },
    LN: { name: 'Lone Note', bg: '#F8B551', color: '#FFFFFF', desc: "含有大量长按音符的图" },
    FE: { name: 'Free Mod', bg: '#B57BFF', color: '#FFFFFF', alias: 'FM', desc: "允许玩家任意选择模组" },
    FR: { name: 'Free Mod', bg: '#B57BFF', color: '#FFFFFF', alias: 'FM', desc: "允许玩家任意选择模组" },
    FM: { name: 'Force Mod', bg: '#9922EE', color: '#FFFFFF', desc: "玩家必须选择模组" },
    HB: { name: 'Hybrid', bg: '#00A0E9', color: '#FFFFFF', desc: "各种音符交错繁杂的图" },
    SV: { name: 'Speed Variation', bg: '#9922EE', color: '#FFFFFF', desc: "含有下落速度突变的图" },
    TB: { name: 'Tiebreaker', bg: '#000000', color: '#FFFFFF', desc: "决胜图"  },

    AC: { name: 'Accuracy', bg: '#FF9800', color: '#000000', desc: "按准确率高低排名赋分" },
    ACC: { name: 'Accuracy', bg: '#FF9800', color: '#000000', desc: "按准确率高低排名赋分" },
    EX: { name: 'Extra', bg: '#FF9800', color: '#000000', desc: "额外图" },
    SP: { name: 'Special', bg: '#9E040D', color: '#FFFFFF', desc: "特殊图" },
    JB: { name: 'Jiba', bg: '#9E040D', color: '#FFFFFF', desc: "特别难打或卡手的图" },

    SV1: { name: 'ScoreV1', bg: '#000000', color: '#FFFFFF', desc: "需要采用第一版计分规则" },
    V1: { name: 'ScoreV1', bg: '#000000', color: '#FFFFFF', desc: "需要采用第一版计分规则" },

    EP: { name: 'Easy Plus', bg: '#22AC38', color: '#FFFFFF', desc: "新手追加" },
    NP: { name: 'Normal Plus', bg: '#22AC38', color: '#FFFFFF', desc: "新手追加" },

    NS: { name: 'Normal Short', bg: '#BDBDBD', color: '#000000', desc: "常规短图" },
    NL: { name: 'Normal Long', bg: '#616161', color: '#000000', desc: "常规长图" },
    HS: { name: 'Hard Short', bg: '#D32F2F', color: '#FFFFFF', desc: "困难短图" },
    HL: { name: 'Hard Long', bg: '#9E040D', color: '#FFFFFF', desc: "困难长图" },
    HP: { name: 'Hard Plus', bg: '#9922EE', color: '#FFFFFF', desc: "高手追加" },
    RU: { name: 'Rush', bg: '#FF9800', color: '#000000', desc: "冲刺图，一般很简单，让玩家多次游玩来冲刺最高分" },

    DEFAULT: { name: 'Unknown', bg: '#555555', color: '#FFFFFF', desc: "未知模组" }
}

const VALID_MOD_KEYS = new Set(
    Object.keys(MOD_CONFIG).filter(k => k !== 'DEFAULT')
)

export const getModInfo = (modKey) => {
    if (!modKey) return MOD_CONFIG.DEFAULT
    const key = modKey.toString().toUpperCase().trim()
    return MOD_CONFIG[key] || { name: key, ...MOD_CONFIG.DEFAULT }
}

/**
 * 将传入的 mods 属性解析为统一的大写数组
 * 支持：
 *  - 数组：['HD', 'HR']
 *  - 字符串：'HDHR' / 'HD, HR' / 'HD+HR' / '[HDHR]'
 *  - 单个 mod：'HD'
 * @param {Array|String|undefined|null} mods
 * @returns {string[]}
 */
export function parseMods(mods) {
    if (!mods) return []

    if (Array.isArray(mods)) {
        return mods
            .map(m => m.toString().toUpperCase().trim())
            .filter(Boolean)
    }

    if (typeof mods === 'string') {
        const str = mods.toString().replace(/[+\[\]]/g, '').trim()

        if (!str) return []

        // 单个 mod，如 "HD"
        if (str.length <= 3 && VALID_MOD_KEYS.has(str.toUpperCase())) {
            return [str.toUpperCase()]
        }

        // 逗号分隔，如 "HD, HR"
        if (str.includes(',')) {
            return str
                .split(',')
                .map(m => m.trim().toUpperCase())
                .filter(Boolean)
        }

        // 自动按两字符拆分，如 "HDHR" -> ["HD", "HR"]
        const matches = str.match(/.{1,2}/g) || []
        return matches.map(m => m.toUpperCase())
    }

    return []
}