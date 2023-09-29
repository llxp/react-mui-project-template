import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes as RouteObject[],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
