function searchSites() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        alert("Please enter a search keyword!");
        return;
    }

    // List of sites with their search URLs
    const sites = [
        { name: "Jio Mart", url: `https://www.jiomart.com/search/${query}` },
        { name: "Flipkart", url: `https://www.flipkart.com/search?q=${query}` },
        { name: "Amazon", url: `https://www.amazon.in/s?k=${query}` }
    ];

    // Open each search in a separate tab
    for (let i = 0; i < sites.length; i++) {
        // Delay each tab opening to avoid browser blocking
        setTimeout(() => {
            window.open(sites[i].url, '_blank');
        }, i * 500); // Open tabs with a delay of 500ms
    }
}
a
