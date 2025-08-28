import SidebarLayout from "@/components/common/layouts/SidebarLayout";
import { useState, type JSX } from "react";
import { Navigate } from "react-router-dom";

export function AuthGuard({
  route,
}: {
  route: { path: string; element: JSX.Element; protected?: boolean };
}) {
  const [isAuthenticated] = useState(false);
  const { path, protected: isProtected, element } = route;

  // Case 1: Already logged in → block login page
  if (path === "/login" && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Case 2: Protected route but not logged in → redirect to login
  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Case 3: Protected & logged in → wrap with sidebar
  if (isProtected && isAuthenticated) {
    return <SidebarLayout>{element}</SidebarLayout>;
  }

  // Default → allow
  return element;
}
