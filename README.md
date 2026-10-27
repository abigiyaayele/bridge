# The Bridge – Rebuilding Families

**The Bridge (Dildiy)** helps people find their roots and restore family connections in Ethiopia. It serves adoptees searching for their biological families, members of the Ethiopian diaspora, and adoptive families who want to stay connected to a child's heritage. The team is based in Addis Ababa.

This repository holds the organization's website.

## What the site offers

| Page | What it does |
| --- | --- |
| **Home** | Full-screen photo slideshow with the main menu and a "Find My Family" button. |
| **Our Mission** | Explains why The Bridge exists and how it works. |
| **Our Services** | The four services: Find My Family, Support a Family, Visit & Connect, and Explore Ethiopia. |
| **Success Stories** | Example reunion and support stories. |
| **Explore Ethiopia** | Heritage tours: culture, markets and historic sites such as Lalibela, Axum and Gondar. |
| **Get in Touch** | Contact details, office hours, and a message form with an option to request a Google Meet. |
| **Find My Family** | A two-step search request form: birth details, orphanage, adoptive parents and contact email. |

## How the forms work

The site has no server or database yet. When someone submits the **Find My Family** form or the **Send a Message** form, the site opens their email app with everything they typed already filled in, addressed to `info@thebridgeethiopia.com`. They press send, and the message arrives in that inbox.

To change the address, edit `CONTACT_EMAIL` in `src/contact.ts`.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install      # first time only
npm run dev      # start the site at http://localhost:3000
```

Other commands:

```bash
npm run lint     # check the code for type errors
npm run build    # build the finished site into the dist/ folder
npm run preview  # preview the built site
```

Every push and pull request on GitHub runs `lint` and `build` automatically (see `.github/workflows/ci.yml`).

## Project layout

```
index.html                   Page title, description and fonts
src/main.tsx                 Starts the app
src/App.tsx                  Home screen, menu, slideshow and page switching
src/contact.ts               Contact email address and the email hand-off for forms
src/components/              One file per page (Mission, Services, Stories, Explore, Contact, Find My Family)
src/index.css                Tailwind CSS setup and fonts
```

Built with React 19, TypeScript, Vite, Tailwind CSS 4, Motion (animations) and Lucide (icons).

## Before going live

These parts of the site are still placeholders and should be replaced with real information:

- **Phone number** `+251 11 123 4567` and the address on the contact page.
- **Social media buttons** (Instagram, Facebook, Twitter) on the contact page don't link anywhere yet.
- **Photos** come from Unsplash. To use your own, put them in a `public/` folder and change the image links in `src/App.tsx`, `src/components/StoriesPage.tsx`, `src/components/ExploreEthiopiaPage.tsx` and `src/components/MissionPage.tsx`.
- **Success stories** are examples. Replace them with real stories, shared with the families' permission.
- **Forms** rely on the visitor's email app. If you'd rather receive submissions directly, a form service such as Formspree or a small backend can replace `openEmail` in `src/contact.ts`.
