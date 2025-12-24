# Copilot Instructions for ews-website

## Project Overview

- This is a Docusaurus v3-based static website with TypeScript and React.
- Main content is organized under `docs/` (documentation), `blog/` (blog posts), and `src/pages/` (custom React/MDX pages).
- Internationalization (i18n) is enabled for English and Simplified Chinese (`i18n/zh-CN/`).

## Key Workflows

- **Install dependencies:** `pnpm install`
- **Start local dev server:** `pnpm start` (auto-reloads on changes)
- **Build static site:** `pnpm build` (output in `build/`)
- **Deploy:**
  - With SSH: `USE_SSH=true pnpm deploy`
  - With GitHub: `GIT_USER=<username> pnpm deploy`
- **Type checking:** `pnpm typecheck`
- **Clear cache:** `pnpm clear`

## Project Structure & Conventions

- **Docs:** Markdown/MDX in `docs/`, organized by topic. Sidebars defined in `sidebars.ts`.
- **Blog:** Markdown/MDX in `blog/`, supports tags/authors via YAML files.
- **Pages:** Custom React/MDX pages in `src/pages/` (e.g., `index.tsx`, `products.tsx`).
- **Components:** Reusable React components in `src/components/`.
- **Styling:** Use CSS modules (e.g., `styles.module.css`) for component styles. Global styles in `src/css/custom.css`.
- **i18n:** Translations in `i18n/`, with plugin-specific JSON files.
- **Config:** Main config in `docusaurus.config.ts` (site metadata, theme, plugins, i18n, navbar/footer).

## Patterns & Tips

- Use TypeScript for all React components and config files.
- Prefer MDX for docs/blogs needing embedded React components.
- Use the `editUrl` in config to enable "Edit this page" links (update to your repo URL).
- For new docs/blogs, update sidebars/tags/authors as needed.
- Use `docusaurus swizzle` to customize theme components.

## External Integrations

- No custom backend; all content is statically generated.
- Deployment assumes GitHub Pages or SSH-accessible static hosting.

## Examples

- See `src/pages/index.tsx` for a custom homepage.
- See `docs/tutorial-basics/` for documentation structure.
- See `blog/` for blog post and author/tag conventions.

---

For more, see [README.md](../README.md) and [docusaurus.config.ts](../docusaurus.config.ts).
