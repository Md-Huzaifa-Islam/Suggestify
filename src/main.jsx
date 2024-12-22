import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ErrorPage from "./Components/ErrorPage";
import AuthProvider from "./Providers/AuthProvider";
import ProtectedRoute from "./Providers/ProtectedRoute";
import AddQuery from "./Components/AddQuery";
import MyQueries from "./Components/MyQueries";
import AllQueriesContainer from "./Components/AllQueriesContainer";
import QueryDetails from "./Components/QueryDetails";
import MyRecommendationsContainer from "./Components/MyRecommendationsContainer";
import RecommendationForMeContainer from "./Components/RecommendationForMeContainer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addquery",
        element: <AddQuery />,
      },
      {
        path: "/myqueries",
        element: <MyQueries />,
      },
      {
        path: "/queries",
        element: <AllQueriesContainer />,
      },
      {
        path: "/queryDetails",
        element: <QueryDetails />,
      },
      {
        path: "/myrecommendations",
        element: <MyRecommendationsContainer />,
      },
      {
        path: "/recommendationsforme",
        element: <RecommendationForMeContainer />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
