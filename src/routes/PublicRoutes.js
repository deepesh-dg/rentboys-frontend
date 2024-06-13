import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../error-page";
import AdvertiserProfileDetail from "../pages/AdvertiserProfileDetail";
import AdvertiserProfileList from "../pages/AdvertiserProfileList";

export const PublicRoutes = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/", element: <AdvertiserProfileDetail />, errorElement: <ErrorPage /> },
  { path: "/", element: <AdvertiserProfileList />, errorElement: <ErrorPage /> },

  { path: "*", element: <Navigate to="/" replace /> },
]);
