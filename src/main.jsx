import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../routes/Home.jsx";
import ProjetoEja from "../routes/ProjetoEja.jsx";
import ProjetoEnemMax from "../routes/ProjetoEnemMax.jsx";
import ErrorPage from "../ErrorPage.jsx";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projeto-eja",
    element: <ProjetoEja />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projeto-enem-max",
    element: <ProjetoEnemMax />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
