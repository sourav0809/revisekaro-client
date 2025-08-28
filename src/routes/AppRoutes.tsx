import { Routes, Route } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import Dashboard from "@/components/dashboard/Dashboard";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";

const Dummy = () => {
  return <div>Dummy</div>;
};

export default function AppRoutes() {
  const routes = [
    { path: "/", element: <Dashboard />, protected: true },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/register", element: <Dummy /> },
    { path: "/dashboard", element: <Dummy />, protected: true },
    { path: "*", element: <Dummy /> },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<AuthGuard route={route} />}
        />
      ))}
    </Routes>
  );
}
