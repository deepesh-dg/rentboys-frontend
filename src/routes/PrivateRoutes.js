import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LayoutOne from "../Layout/LayoutOne";

const SignUp = lazy(() => import("../pages/SignUp"));
const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const AdvertiserProfileDetail = lazy(() =>
  import("../pages/AdvertiserProfileDetail")
);
const AdvertiserProfileList = lazy(() =>
  import("../pages/AdvertiserProfileList")
);
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const Messenger = lazy(() => import("../pages/Messenger"));
const MyFavourite = lazy(() => import("../pages/MyFavourite"));
const MyPhotos = lazy(() => import("../pages/MyPhotos"));
const MyVideos = lazy(() => import("../pages/MyVideos"));
const Profile = lazy(() => import("../pages/Profile"));
const UpdatePhoneNo = lazy(() => import("../pages/UpdatePhoneNo"));
const UploadID = lazy(() => import("../pages/UploadID"));
const ErrorPage = lazy(() => import("../error-page"));

export const PrivateRoutes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/change-password", element: <ChangePassword /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/messenger", element: <Messenger /> },
      { path: "/my-favourite", element: <MyFavourite /> },
      { path: "/my-photos", element: <MyPhotos /> },
      { path: "/my-videos", element: <MyVideos /> },
      { path: "/profile", element: <Profile /> },
      { path: "/update-phone", element: <UpdatePhoneNo /> },
      { path: "/upload-id", element: <UploadID /> },
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      {
        path: "/advertiser-profile-detail",
        element: <AdvertiserProfileDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/advertiser-profile-list",
        element: <AdvertiserProfileList />,
        errorElement: <ErrorPage />,
      },
      { path: "*", element: <Navigate to="/about" replace /> },
    ],
  },
  {
    element: <LayoutOne />,
    errorElement: <ErrorPage />,
    children: [{ path: "/signup", element: <SignUp /> }],
  },
]);
