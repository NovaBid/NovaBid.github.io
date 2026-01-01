function loadComponent(url, placeholderId, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load component: ${url}`);
            }
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = data;
                if (callback) {
                    callback();
                }
            } else {
                console.error(`Placeholder element with ID '${placeholderId}' not found.`);
            }
        })
        .catch(error => console.error('Error loading component:', error));
}
