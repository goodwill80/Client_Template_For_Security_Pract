import { Fragment } from "react/jsx-runtime";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Loan from "./Pages/Loan";
import Balance from "./Pages/Balance";
import Card from "./Pages/Card";
import Notices from "./Pages/Notices";
import PageNotFound from "./Pages/PageNotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <PageNotFound /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <Contact /> },
  { path: "/account", element: <Account /> },
  { path: "/loan", element: <Loan /> },
  { path: "/balance", element: <Balance /> },
  { path: "/card", element: <Card /> },
  { path: "/notices", element: <Notices /> },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
