import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRouter from "../PrivateRoute/PrivateRouter";
import Logout from "../components/Logout";
import Products from "../dashboard/Products";
import Users from "../dashboard/User";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  // Public routes (with Navbar)
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/logout",
    element: <Logout/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/book/${params.id}`);
          if (!res.ok) throw new Response("Book not found", { status: 404 });
          return res.json();
        }
      }
    ],
  },

  // Admin routes (NO Navbar, Dashboard layout only)
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <PrivateRouter><Dashboard/></PrivateRouter>
      },
      {
        path: "upload", // /admin/dashboard/upload
        element: <UploadBooks />
      },
      {
        path: "manage",
        element: <ManageBooks/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "editbooks/:id",
        element: <EditBooks/>,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/book/${params.id}`);
          if (!res.ok) throw new Response("Book not found", { status: 404 });
          return res.json();
        }
      }
    ]
  }
]);

export default router;
