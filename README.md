# The Reading Room — starter website

A static 4-page site (home, catalog, agenda, contact) styled as a library card-catalog / zine look.
No build tools — just HTML, CSS and vanilla JS, so it's ready for GitHub Pages.

## Publishing it on GitHub Pages

1. Create a new repository in your account, e.g. `reading-room-website`.
2. Upload every file in this folder, keeping the same structure (`index.html` at the root, `css/`, `js/`,
   `data/`, `images/` alongside it).
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `root`** → Save.
4. Your site will appear at `https://YOUR-USERNAME.github.io/reading-room-website/` within a minute or two.
5. If you want a custom domain later, add it in the same Pages settings screen and add the DNS records
   GitHub gives you.

## Editing content

- **Home page banner photos**: in `index.html`, each rotating photo is a `<div class="slide">` block inside
  `<div class="banner">`. Replace the `src` and `alt` on the `<img>`, and the caption text in `<p class="cap">`.
  Add more slides by copying a whole `.slide` block; remove some the same way. Real photos of your shelves,
  events or reading corner will read much better than the placeholder stock photos currently in there.
- **About text / location / hours**: edit directly in `index.html` and `contact.html`.
- **Catalog**: edit `data/books.json`. Each book is one entry — add, remove or change fields directly in
  GitHub's web editor (click the file, click the pencil icon, edit, commit). No local setup needed.
- **Agenda**: this page embeds your group's page on radar.squat.net — see below.

## The book catalog & lending tracker — now via TinyCat

The catalog page embeds [TinyCat](https://www.librarycat.org), LibraryThing's catalog/circulation system for
small libraries, instead of a hand-rolled data file. TinyCat handles cataloging (scan an ISBN and it pulls in
title, author, cover, metadata), public search/browse, and circulation (check in/out, due dates, who has
what) all in one place.

**Setup:**
1. Sign up at [librarycat.org](https://www.librarycat.org) and catalog your books there.
2. Your public catalog lives at `librarycat.org/lib/YOUR_LIBRARY_ID`.
3. In `catalog.html`, replace `YOUR_LIBRARY_ID` (it appears twice — in the iframe `src` and the button link
   below it) with your actual TinyCat library ID.

**Who sees what:** anyone with the link can search and browse the catalog with no login — that's the point
of embedding it here. Borrowing history and patron details are only visible to someone logged into their own
patron account (their own history only) or to your team logged in as admin. Nothing borrower-related is
exposed to a visitor just browsing the embedded catalog.

**Managing loans:** all done inside TinyCat's own admin interface — check items in/out, see who's overdue,
edit records. Nothing on this website needs updating when the catalog or loan status changes; the embed just
reflects TinyCat live.

**Cost:** cataloging on LibraryThing itself is free; TinyCat (the public catalog + circulation layer) is a
paid add-on, with plans starting cheap for small/volunteer libraries — worth checking their current pricing
page, since it may have changed.

## About WorldCat

WorldCat is a separate, global union catalog run by OCLC that shows which (mostly large, institutional)
libraries hold a given title — it's not a format or hosting option for your own catalog, and getting your
library listed on it involves an OCLC membership that's usually priced for institutions, not volunteer-run
spaces. For a project this size it's more useful as an outward-facing reference: the catalog page already
links out to WorldCat and Open Library so visitors can look up a book you don't stock. If you'd like, each
entry in `books.json` could also carry an ISBN and link straight to that book's WorldCat/Open Library page.

## Agenda / radar.squat.net

1. Create (or find) your group on [radar.squat.net](https://radar.squat.net/en) and note its group ID
   (the number at the end of your group's URL).
2. In `agenda.html`, replace `YOUR_GROUP_ID` in the iframe `src` and the link below it with that number.
3. Add and edit events on Radar itself — the embedded list updates automatically, nothing to change on
   your own site.
4. If you'd rather not use an iframe, Radar also has a lightweight JavaScript widget and a WordPress plugin —
   see their [embedding guide](https://radar.squat.net/en/show-radar-events-your-website) for both.

## Contact form

The contact form currently opens the visitor's email client via a `mailto:` action (works with zero setup,
but feels a bit clunky and doesn't work for everyone). For a proper "press submit and it just sends" form
with no backend, sign up for a free plan at [Formspree](https://formspree.io) and swap the form's `action`
URL for the one they give you — everything else about the form can stay the same.
