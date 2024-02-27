import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';

import BioFeature from './components/bioFeature/index.jsx'
import ContactFeature from './components/contact/ContactFeature'
import AboutMe from './about/AboutMe.jsx'
import ProjectFeature from './components/projects/ProjectFeature'


/**
 * React Boostrap Config
 */
import "react-bootstrap/dist/react-bootstrap.js"
import './App.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      children: [
          {
              index: true,
              element: <BioFeature/>
          },
          {
            path: '/contact',
            element: <ContactFeature/>
          },
          {
            path: '/about',
            element: <AboutMe/>
          },
          {
            path: '/projects',
            element: <ProjectFeature/>
          }

      ]
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
