export const TAG_COLORS = {
    Wellness: { bg: '#e0f7fa', fg: '#0277bd' },
    Market: { bg: '#fff7ed', fg: '#c2410c' },
    Workshop: { bg: '#eef2ff', fg: '#3730a3' },
    Photography: { bg: '#f5f3ff', fg: '#6d28d9' },
    Community: { bg: '#fef3c7', fg: '#b45309' },
    Running: { bg: '#dcfce7', fg: '#15803d' },
    Games: { bg: '#ecfeff', fg: '#0e7490' },
    'Guided Walk': { bg: '#e0f2fe', fg: '#0369a1' },
    Class: { bg: '#fae8ff', fg: '#a21caf' },
    Music: { bg: '#fde68a', fg: '#92400e' },
    Social: { bg: '#e6f0ff', fg: '#1d4ed8' },

    'CDC Vouchers': { bg: '#eef2f7', fg: '#374151' },
    'Culture Pass': { bg: '#eef2f7', fg: '#374151' },
};

const LABEL_ALIASES = {
    'cdc': 'CDC Vouchers',
    'cdc vouchers': 'CDC Vouchers',
    'cdc-vouchers': 'CDC Vouchers',

    'culturepass': 'Culture Pass',
    'culture pass': 'Culture Pass',
    'culture-pass': 'Culture Pass',
};

const findKey = (obj, name = '') =>
    Object.keys(obj).find(k => k.toLowerCase() === String(name).toLowerCase());

export function canonicalTagLabel(name = '') {
    const raw = String(name).trim();
    const alias = LABEL_ALIASES[raw.toLowerCase()];
    return alias || raw;
}

export function tagStyles(name) {
    const label = canonicalTagLabel(name);
    const key = findKey(TAG_COLORS, label);
    return key ? TAG_COLORS[key] : { bg: '#f3f4f6', fg: '#374151' };
}

export const BADGE_COLORS = {
    Outdoor: { bg: '#16a34a', fg: '#ffffff' },
    'Pop-up': { bg: '#0369a1', fg: '#ffffff' },
    'Hands-on': { bg: '#065f46', fg: '#ffffff' },
    Live: { bg: '#dc2626', fg: '#ffffff' },
    Dance: { bg: '#1d4ed8', fg: '#ffffff' },
    Indoor: { bg: '#6d28d9', fg: '#ffffff' },
    Nature: { bg: '#15803d', fg: '#ffffff' },
    Fitness: { bg: '#0ea5e9', fg: '#ffffff' },
    Culture: { bg: '#9333ea', fg: '#ffffff' },
    Art: { bg: '#f59e0b', fg: '#111827' },
    Tech: { bg: '#0f766e', fg: '#ffffff' },
    Sustainable: { bg: '#22c55e', fg: '#0b3d19' },
};

export function badgeStyles(name) {
    const key = findKey(BADGE_COLORS, name);
    return key ? BADGE_COLORS[key] : { bg: '#085702', fg: '#ffffff' };
}
