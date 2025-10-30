document.addEventListener("DOMContentLoaded", () => {
  const siteUrlInput = document.getElementById("siteUrl");
  const output = document.getElementById("output");
  const errorMsg = document.getElementById("errorMsg");
  const copyMsg = document.getElementById("copyMsg");
  const yearEl = document.getElementById("year");
  const generateBtn = document.getElementById("generateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.querySelector(".nav-list");

  // Set current year
  yearEl.textContent = new Date().getFullYear();

  // Generate Robots.txt
  generateBtn.addEventListener("click", () => {
    let siteUrl = siteUrlInput.value.trim();
    if (!siteUrl) {
      errorMsg.style.display = "block";
      output.value = "";
      return;
    } else {
      errorMsg.style.display = "none";
    }

    // Normalize URL
    siteUrl = siteUrl.replace(/^https?:\/\//, "");
    siteUrl = "https://" + siteUrl.replace(/\/+$/, "");

    const robotsTxt = `# This robots.txt file is generated using the free Robots.txt Generator by It Is Unique Official - itisuniqueofficial.com
User-agent: *

# Allow all content except restricted pages
Allow: /

# Block search result pages and paginated duplicate content
Disallow: /search?q=
Disallow: /*?updated-max=
Disallow: /*?max-results=

# Sitemaps for better indexing
Sitemap: ${siteUrl}/sitemap.xml
Sitemap: ${siteUrl}/sitemap-pages.xml`;

    output.value = robotsTxt;
    copyMsg.style.display = "none";
  });

  // Copy to clipboard
  copyBtn.addEventListener("click", () => {
    if (output.value.trim() !== "") {
      output.select();
      output.setSelectionRange(0, 99999);
      document.execCommand("copy");

      copyMsg.style.display = "block";
      copyMsg.textContent = "Robots.txt copied to clipboard!";
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.style.display === "flex";
    navList.style.display = isOpen ? "none" : "flex";
  });

  // Close menu when clicking link
  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 900) navList.style.display = "none";
    });
  });
});
