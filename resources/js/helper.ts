export function formatCategory(category: string): string {
    return category
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}
