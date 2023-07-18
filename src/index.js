import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { ThemeProvider } from '@ui5/webcomponents-react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);


