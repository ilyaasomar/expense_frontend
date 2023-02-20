import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Transections from "../pages/transections/Transections";
import AddTransection from "../pages/transections/AddTransection";
import Signin from "../pages/authentication/Signin";
import Signup from "../pages/authentication/Signup";

// protected routes
import UpdateTransection from "../pages/transections/UpdateTransaction";
import Statements from "../pages/transections/Statements";
import ProtectedRoutes from "../middleware/ProtectedRoutes";
import Profile from "../pages/profile/Profile";
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
            path="/statements"
            element={
              <ProtectedRoutes>
                <Statements />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
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
