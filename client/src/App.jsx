import { createBrowserRouter, RouterProvider } from "react-router-dom";


// local imports
import {
  About, AddProduct, Contact, Dashboard, EditProduct, Error, HomeLayout, Landing, Login, Products, SingleProduct, Register, Admin
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "products/:id",
        element: <SingleProduct />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Admin />
          },
          {
            path: "edit-product/:id",
            element: <EditProduct />
          },
          {
            path: "add-product",
            element: <AddProduct />
          }
        ]
      }
    ]
  }

]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;