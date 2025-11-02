export function toTitleCase(name = '') {
    return name
        .trim()
        .split(/\s+/)
        .map(w =>
            w
                .split(/(-|')/)
                .map(part =>
                    /^[A-Za-zÀ-ÖØ-öø-ÿ]/.test(part)
                        ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
                        : part
                )
                .join('')
        )
        .join(' ');
}