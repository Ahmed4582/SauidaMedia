import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy loading للمكونات
const Home = React.lazy(() => import("../pages/Home"));
const Error = React.lazy(() => import("../pages/Error"));
const SaudiArabiaEvents = React.lazy(() =>
  import("../pages/SaudiArabiaEvents")
);
const ForumAward = React.lazy(() => import("../pages/ForumAward"));
const Exhibition = React.lazy(() => import("../pages/Exhibition"));

// إنشاء التوجيه باستخدام createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "saudi-arabia-events",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SaudiArabiaEvents />
          </Suspense>
        ),
      },
      {
        path: "forum-award",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ForumAward />
          </Suspense>
        ),
      },
      {
        path: "exhibition",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Exhibition />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
