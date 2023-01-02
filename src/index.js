import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WhereIsCoat from './components/whereiscoat/WhereIsCoat';
import WhosThisCoat from './components/whoscoat/WhosThisCoat';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/whereiscoat",
    element: <WhereIsCoat />,
  },
  {
    path: "/whosthiscoat",
    element: <WhosThisCoat />,
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider
      router={router} />
  </React.StrictMode>
);
