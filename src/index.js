import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { ThemeProvider } from '@ui5/webcomponents-react';
import { BrowserRouter } from "react-router-dom";

import "./index.css"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);


