export function fetchBooks(searchTerm: string) {
    return fetch(`http://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`).then(response => response.json());
}
