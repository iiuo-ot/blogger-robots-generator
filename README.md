# Blogger Robots.txt Generator

**Generate an SEO-friendly custom robots.txt file for your Blogger site in one click.**

A free, web-based tool built with **HTML, CSS, and JavaScript** that helps Blogger users create a perfectly optimized `robots.txt` file for better SEO and indexing — no technical knowledge required.

---

## Features

* Instantly generate a valid and SEO-friendly `robots.txt` for Blogger
* Automatically detect your blog’s domain and generate sitemap entries
* Preconfigured to allow important content and block duplicate pages
* Copy the generated code easily with one click
* 100% client-side — no data is stored or sent anywhere
* Clean, responsive UI for desktop and mobile

---

## Example

**Input:**

```
https://thatdisplayed.blogspot.com/
```

**Output:**

```
# This robots.txt file is generated using the free Robots.txt Generator by It Is Unique Official - itisuniqueofficial.com
User-agent: *

# Allow all content except restricted pages
Allow: /

# Block search result pages and paginated duplicate content
Disallow: /search?q=
Disallow: /*?updated-max=
Disallow: /*?max-results=

# Sitemaps for better indexing
Sitemap: https://thatdisplayed.blogspot.com/sitemap.xml
Sitemap: https://thatdisplayed.blogspot.com/sitemap-pages.xml
```

---

## How to Use

1. Enter your **Blogger site URL** (e.g., `https://example.blogspot.com/`).
2. Click **Generate Robots.txt**.
3. Copy the generated code.
4. Paste it into your Blogger Dashboard → Settings → Crawlers and indexing → Custom robots.txt.

---

## Demo

👉 **[Open Tool](https://iiuo-ot.github.io/blogger-robots-generator/)**
Try it live in your browser — no installation required.

---

## Files in this repository

```
blogger-robots-generator/
├── index.html       # Main HTML page
├── styles.css       # Styling (CSS)
├── script.js        # JS logic for generation
├── README.md        # This file
└── LICENSE          # Optional: MIT License
```

---

## How it Works

* Takes your Blogger site URL as input.
* Generates a clean, SEO-optimized `robots.txt` file structure.
* Automatically includes sitemap URLs for blog posts and pages.
* Uses JavaScript regex and string templates to produce the file.

---

## Developer

Developed by **Jaydatt Khodave**.

---

## License

This project is open source and available under the **MIT License**.
