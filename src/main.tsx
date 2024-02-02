import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { router } from './router';
import { TanStackProvider } from './plugins/TanStackProvider';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <RouterProvider router={router} />
    </TanStackProvider>
  </React.StrictMode>
);
