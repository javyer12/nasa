// import React from 'react';
// import { createBrowserRouter, RouterProvider, Route,createRoutesFromElements } from 'react-router-dom';
// import { useRouteError } from 'react-router-dom';

// import ReactDOM from 'react-dom/client';
// import Root from './routes/root';
// import Index from './routes/index';

// // import ErrorPage from './components/Error/ErrorPage';
 

// function ErrorBoundary() {
//   // const error:ReactNode = useRouteError();
//   return <div>There was an error</div>;
// }

// // const router = createBrowserRouter([
// //   {
// //         // main right child
// //     path: "/",
// //     element: <Root/>,
// //     errorElement: <ErrorBoundary/>,
// //     // loader: rootLoader,
// //     // action: rootAction
// //     children: [
// //       {
// //           // loader: contactLoader,
// //           // action: contactAction,
// //         errorElement: <ErrorBoundary />,
// //         children: [
// //         // main left child
// //           // { index: true, element: <Index/> },
         
// //          {
// //             path: "/user",
// //             element: <Index />,
// //             // action: userAction,
// //             // loade r: userLoader,
// //           },
// //     //       {
// //     //         path: "contacts/:contactId/edit",
// //     //         element: <EditContact />,
// //     //         loader: contactLoader,
// //     //         action: editAction
// //     //       },
// //     //       {
// //     //         path: "contacts/:contactId/destroy",
// //     //         action: destroyAction,
// //     //         errorElement: <div>Ooops! there was an error.</div>
// //     //       }
// //         ],
// //       },
// //     ],
// //   },

// // ]);


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="/index" element={<Index />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Index from './routes/index';
import ErrorPage from "./components/Error/ErrorPage";
import Less from "./components/Error/Less";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
    errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "index",
            element: <Less />,
          },
        ]
      }
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
