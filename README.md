# React-mui-template

This project template was bootstrapped with [Vite](https://vitejs.dev/).
It features the following libraries:
- [React](https://reactjs.org/)
- [MUI](https://mui.com/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Zustand](https://github.com/pmndrs/zustand)
- [i18next](https://www.i18next.com/)

## Project Layout

```
.
├── LICENSE
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── footer
│   │   │   ├── copyright.tsx
│   │   │   ├── custom-icon-button.tsx
│   │   │   └── index.tsx
│   │   ├── header
│   │   │   ├── drawer-content.tsx
│   │   │   ├── index.tsx
│   │   │   └── theme-selector.tsx
│   │   ├── layout
│   │   │   └── index.tsx
│   │   └── main
│   │       └── index.tsx
│   ├── i18n
│   │   ├── de
│   │   │   ├── index.ts
│   │   │   └── main.ts
│   │   ├── en
│   │   │   ├── index.ts
│   │   │   └── main.ts
│   │   └── index.ts
│   ├── main.tsx
│   ├── pages
│   │   └── home
│   │       └── index.tsx
│   ├── routes.tsx
│   ├── theme.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Importand files

### `src/components`

This folder contains all components that are used in the project. The components are divided into the following subfolders:
- `header`: Contains the header component
- `footer`: Contains the footer component
- `layout`: Contains the layout component

### `src/routes.tsx`

This file contains all routes that are used in the project.
The routes are also displayed in the header and app drawer if the `showInHeader` or `showInDrawer` property is set to `true`.

### `src/theme.ts`

This file contains the theme of the project. The theme is used in the `src/components/layout/index.tsx` file.
It is created using the mui theme creator [here](https://zenoo.github.io/mui-theme-creator).

### `src/i18n`

This folder contains all translations of the project. The translations are divided into the following subfolders:
- `en`: Contains the english translations
- `de`: Contains the german translations
If you want to add more languages, you have to create a new folder in the `src/i18n` folder and add the translations there.
The translations are then merged in the `src/i18n/index.ts` file.
The i18n folder is then included in the `src/main.tsx` file to execute the initialization implemented in the `src/i18n/index.ts` file.

### `src/pages`

This folder contains all pages of the project. The pages are divided into the following subfolders:
- `home`: Contains the home page
If you want to add more pages, you have to create a new folder in the `src/pages` folder and add the page there.
The pages are then included in the `src/routes.tsx` file.

### `src/App.tsx`

This file contains the main component of the project. It is included in the `src/main.tsx` file.
Only the layout component is included here.

### `src/main.tsx`

This file is the main entrypoint of the project. It is included in the `src/index.html` file.

### `src/index.html`

This file is the main html file of the project.
Google fonts is included here to use the material icons font.
if you want to host the font yourself, you have to change it there.

### `src/assets`

This folder contains all assets of the project and copied to the `dist/assets` folder when building the project.

### `src/components/layout/index.tsx`

This file contains the main layout component of the project. It is included in the `src/App.tsx` file.

### `src/components/header/index.tsx`

This file contains the header component of the project. It is included in the `src/components/layout/index.tsx` file.

### `src/components/main/index.tsx`

This file contains the main content of the project. It is included in the `src/components/layout/index.tsx` file.

### `src/components/footer/index.tsx`

This file contains the footer component of the project. It is included in the `src/components/layout/index.tsx` file.
