class NavTabs extends HTMLElement 
{
  connectedCallback() 
  {
    this.innerHTML = `
      <nav class="tab-container">
        <a href="index.html" class="tab" data-page="index.html">Home</a>
        <a href="about.html" class="tab" data-page="about.html">About</a>
        <a href="campaigns.html" class="tab" data-page="campaigns.html">Campaigns</a>
        <a href="gallery.html" class="tab" data-page="gallery.html">Gallery</a>
        <a href="testimonials.html" class="tab" data-page="testimonials.html">Testimonials</a>
        <a href="faqs.html" class="tab" data-page="faqs.html">FAQs</a>
        <a href="contact.html" class="tab" data-page="contact.html">Contact</a>
      </nav>
    `;
    this.setActiveTab();
  }

   setActiveTab() 
   {
        let currentPage = window.location.pathname.split("/").pop();
        
        // Handles when the site loads on the root domain (/) without "index.html"
        if (currentPage === "") 
        {
            currentPage = "index.html";
        }

        const activeLink = this.querySelector(`[data-page="${currentPage}"]`);
        if (activeLink) 
        {
            activeLink.classList.add("active");
        }
  }
}

customElements.define('nav-tabs', NavTabs);