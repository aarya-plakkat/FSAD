import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import ResumeHeader from './header.js';
import ResumePersonInfo from './Resume_Person_Info.js';
import Education from './Education.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ResumeHeader />
    <ResumePersonInfo />
    <Education />
  </React.StrictMode>
);
