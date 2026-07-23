// Wait for the HTML to fully load
document.addEventListener("DOMContentLoaded", () => 
{
    // Get the current page filename (e.g., "about.html" or "media.html")
    const currentPage = window.location.pathname.split("/").pop();

    // Select all links inside your tab container
    const tabs = document.querySelectorAll(".tab-container .tab");

    tabs.forEach(tab => 
    {
        // Get the filename from the link's href attribute
        const tabTarget = tab.getAttribute("href");

        // If the URL matches the link, add the active class. Otherwise, remove it.
        if (currentPage === tabTarget) 
        {
            tab.classList.add("active");
        } 
        else if (currentPage === "" && tabTarget === "index.html") 
        {
            // Edge case: Handles when the site loads on the root domain (/) without "index.html"
            tab.classList.add("active");
        } 
        else 
        {
            tab.classList.remove("active");
        }
    });
});