import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { router } from './router';
import { NextUIProvider } from '@nextui-org/react';
import { TanStackProvider } from './plugins/TanStackProvider';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </TanStackProvider>
  </React.StrictMode>
);
