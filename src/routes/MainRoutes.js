import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Customer from "../pages/Customers";
import Orders from "../pages/Orders";
import InputGroup from "../pages/custom/InputGroup";
import ElementForm from "../pages/custom/ElementForm";
import Transections from "../pages/transections/Transections";
import AddTransection from "../pages/transections/AddTransection";
import Signin from "../pages/authentication/Signin";
import Signup from "../pages/authentication/Signup";

// protected routes
import ProtectedRoutes from "../components/utils/ProtectedRoutes";
import UpdateTransection from "../pages/transections/UpdateTransaction";
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Layout />
            </ProtectedRoutes>
          }
        >
          <Route path="/" element={<Navigate replace to="/dashboard" />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/customers"
            element={
              <ProtectedRoutes>
                <Customer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/add-transaction"
            element={
              <ProtectedRoutes>
                <AddTransection />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoutes>
                <Transections />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/edit-transaction/:id"
            element={
              <ProtectedRoutes>
                <UpdateTransection />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/input-group"
            element={
              <ProtectedRoutes>
                <InputGroup />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/element-form"
            element={
              <ProtectedRoutes>
                <ElementForm />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/orders",
//         element: <Orders />,
//       },
//       {
//         path: "/customers",
//         element: <Customer />,
//       },
//       {
//         path: "/transactions",
//         element: <Transections />,
//       },
//       {
//         path: "/input-group",
//         element: <InputGroup />,
//       },
//       {
//         path: "/element-form",
//         element: <ElementForm />,
//       },
//     ],

//   },
// ]);
