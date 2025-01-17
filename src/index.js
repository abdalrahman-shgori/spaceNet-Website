

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './ThemeProvider';
import { SettingsProvider } from './pagedirection';
import './i18n'
import { HelmetProvider } from 'react-helmet-async';
import { hydrate, render } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <ThemeProvider>
          <HelmetProvider>
          <App />
          </HelmetProvider>
        </ThemeProvider>
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
