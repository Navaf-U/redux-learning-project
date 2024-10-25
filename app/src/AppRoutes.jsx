import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RouteLayout from "./components/RouteLayout";

function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default AppRoutes;
