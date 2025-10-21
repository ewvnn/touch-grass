let _cache;

export async function loadEvents() {
    if (_cache) return _cache;
    const url = `${import.meta.env.BASE_URL}data/events.json`;
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`Failed to load events: HTTP ${res.status}`);
    _cache = await res.json();
    return _cache;
}
