class NavTabs extends HTMLElement 
{
  connectedCallback() 
  {
    this.innerHTML = `
      <nav class="tab-container">
        <button class="hamburger-menu" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="tabs-list">
          <a href="index.html" class="tab" data-page="index.html">Home</a>
          <a href="about.html" class="tab" data-page="about.html">About</a>
          <a href="services.html" class="tab" data-page="services.html">Services</a>
          <a href="gallery.html" class="tab" data-page="gallery.html">Gallery</a>
          <a href="testimonials.html" class="tab" data-page="testimonials.html">Testimonials</a>
          <a href="faqs.html" class="tab" data-page="faqs.html">FAQs</a>
          <a href="contact.html" class="tab" data-page="contact.html">Contact</a>
        </div>
      </nav>
    `;
    this.setActiveTab();
    this.initMobileMenu();
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

  initMobileMenu() 
  {
    const burger = this.querySelector('.hamburger-menu');
    const tabsList = this.querySelector('.tabs-list');

    burger.addEventListener('click', () => 
    {
      // Toggle CSS classes to animate the burger and show the dropdown
      burger.classList.toggle('open');
      tabsList.classList.toggle('open');
    });
  }
}

customElements.define('nav-tabs', NavTabs);