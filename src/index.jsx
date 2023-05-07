import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/styles/index.scss';

import { Application } from 'src/components/Application';
import 'src/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
