# Talevo Animations — Portfolio Website

A responsive, futuristic portfolio website for **Talevo Animations**, built with HTML, CSS and vanilla JavaScript. Designed for free GitHub Pages hosting.

## Project files

```text
talevo-animations-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── brand-mark.svg
    └── favicon.svg
```

## Run locally

1. Extract the ZIP file.
2. Open the `talevo-animations-portfolio` folder.
3. Double-click `index.html` to preview it in Chrome.

No build tools, package installation, backend or API key are required.

## Publish with GitHub Pages

1. Sign in to GitHub and create a **new public repository**. A suggested name is `talevo-animations-portfolio`.
2. Open the repository and choose **Add file → Upload files**.
3. Upload the contents of this folder (upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder—not the ZIP itself).
4. Commit the files to the `main` branch.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch `main` and folder `/ (root)`, then click **Save**.
8. Wait for GitHub Pages to publish. Your site will be available at:

   `https://YOUR-USERNAME.github.io/talevo-animations-portfolio/`

If you name the repository `YOUR-USERNAME.github.io`, the website URL will instead be `https://YOUR-USERNAME.github.io/`.

## Personalize the site

### Update the YouTube link

The channel link is already set to:

`https://www.youtube.com/@TalevoAnimations`

If your channel handle changes, search the project files for `youtube.com/@TalevoAnimations` and replace it.

### Add your own videos

The showcase currently links to your channel rather than displaying invented video entries. To add actual videos:

1. Open YouTube and copy a video's ID (the text after `v=` in a standard video URL, or after `youtu.be/`).
2. Add a video section/card in `index.html` using this embed URL:

   `https://www.youtube-nocookie.com/embed/VIDEO_ID`

3. Replace `VIDEO_ID` with your real video ID and give the card the correct title and thumbnail.

Example embed:

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="Talevo Animations video"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>
```

### Update the social preview URL

In `index.html`, replace `YOUR-USERNAME` and `YOUR-REPOSITORY` in the `og:url` meta tag after publishing.

### Change colors

Open `style.css` and edit the CSS variables at the top:

```css
:root {
  --bg: #090711;
  --purple: #a855f7;
  --violet: #7138e8;
  --blue: #4d8dff;
}
```

## Notes

- Google Fonts are loaded from Google Fonts when internet access is available. The site remains readable with fallback fonts if they are unavailable.
- All brand artwork in `assets/` is original SVG created for this site.
- The category cards are visual category links, not claims that specific projects or videos have been published.
- This is a static website: it does not collect personal data or require a server.
