import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import Less from './components/Error/Less';
import Index from './routes/index';

// import ErrorPage from './components/Error/ErrorPage';


function ErrorBoundary() {
  // const error:ReactNode = useRouteError();
  return <div>There was an error</div>;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorBoundary/>,
    // loader: rootLoader,
    // action: rootAction
    children: [
      {
          // loader: contactLoader,
          // action: contactAction,
        errorElement: <ErrorBoundary />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/contacts",
            element: <Less />,
            // loader: contactLoader,
            // action: contactAction,
          },
    //      {
    //         path: "user/:userId",
    //         element: <User />,
    //         action: userAction,
    //         loade r: userLoader,
    //       },
    //       {
    //         path: "contacts/:contactId/edit",
    //         element: <EditContact />,
    //         loader: contactLoader,
    //         action: editAction
    //       },
    //       {
    //         path: "contacts/:contactId/destroy",
    //         action: destroyAction,
    //         errorElement: <div>Ooops! there was an error.</div>
    //       }
        ],
      },
    ],
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


