import * as React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import "./app.scss";

// NOTE:
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/static/*",
      // },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
