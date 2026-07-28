# Trash Wranglers

This is a static Vite/React site configured for **GitHub Pages branch deployment**. It does not use GitHub Actions.

## Publish with GitHub Pages

1. Install dependencies with `npm install`.
2. Create the Pages-ready site with `npm run build`. This writes the complete static site to `docs/`.
3. Commit and push the source files **and the generated `docs/` directory** to the branch you want to publish (usually `main`).
4. On GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select that branch and the **`/docs`** folder. Save.

GitHub will publish the URL shown on that settings page after it finishes processing the commit. The Vite base path is relative, so the same build works for either a project site (`https://<owner>.github.io/<repository>/`) or a custom domain.

## Local development

```bash
npm install
npm run dev
```

Use `npm run preview` after building to check the generated static site locally. Run `npm run lint` to type-check the project.
