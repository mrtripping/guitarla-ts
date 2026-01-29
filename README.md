
# Guitarla (TypeScript + React + Vite)

[![CI](https://github.com/mrtripping/guitarla-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/mrtripping/guitarla-ts/actions/workflows/ci.yml)
[![Build Status](https://github.com/mrtripping/guitarla-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/mrtripping/guitarla-ts/actions/workflows/ci.yml)

## The project

Guitarla is a small e-commerce demo built with React, TypeScript and Vite. It showcases a simple product catalog of guitars, a cart system, and a lightweight project structure for learning or prototyping.

## Features

- **Product catalog:** Static product list in `src/data/db.ts`.
- **Add to cart:** Component-level cart interactions using React state/hooks.
- **TypeScript:** Typed components and models in `src/types`.
- **Vite:** Fast dev server and production build.

## Tech Stack

- React 19
- TypeScript
- Vite
- ESLint

## Quick Start

Requirements: Node.js 18+ and npm.

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Project Structure

- `src/` — application source
  - `data/db.ts` — static product data
  - `components/` — React UI components (e.g. `Guitar.tsx`, `Header.tsx`)
  - `hooks/` — custom hooks (cart logic)
  - `types/` — shared TypeScript types

## Notable Files

- `package.json` — scripts and dependencies
- `vite.config.ts` — Vite configuration

## Contributing

Contributions are welcome. Open an issue or submit a PR with a clear description of the change.

## License

This project does not include a license file. Add a `LICENSE` if you want to make usage terms explicit.

---
If you'd like, I can add a GitHub Actions workflow for CI, badges, or expand the README with screenshots and deployment steps.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
