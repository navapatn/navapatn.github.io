# Navapat Nananukul Portfolio

This repository now contains the React-based portfolio site for `navapatn.github.io`, migrated from the previous Jekyll academic-pages setup.

## Local development

1. Install dependencies with `npm install`.
   If that fails on a newer Node/npm setup, use `npm install --ignore-scripts`.
2. Start the dev server with `npm start`.
3. Create a production build with `npm run build`.

The scripts already include `NODE_OPTIONS=--openssl-legacy-provider`, which is needed for this older `react-scripts` setup on newer Node versions.

## Content locations

- Site data: `src/Util/data.js`
- Main sections: `src/components/*`
- Public assets: `public/files/`
- Profile images: `src/assets/navapat/`

## Deployment

This repo keeps both the React source and the generated static files needed for GitHub Pages at the repository root. After updating content, run `npm run build` and sync the fresh `build/` output to the repo root before pushing.
