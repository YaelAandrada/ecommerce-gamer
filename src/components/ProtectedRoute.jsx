import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children, OnlyAdmin }) {
  const [status, setStatus] = useState("loading"); 
  // loading | allowed | forbidden | unauthorized

  useEffect(() => {
    const checkAccess = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setStatus("unauthorized");
        return;
      }

      try {
        const url = OnlyAdmin
          ? "http://localhost:3000/api/admin/check-admin"
          : "http://localhost:3000/api/auth/verify";

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 403) {
          toast.error("No tenés permisos para acceder a esta sección");
          setStatus("forbidden");
          return;
        }

        if (res.status === 401) {
          setStatus("unauthorized");
          return;
        }

        if (res.ok) {
          setStatus("allowed");
        } else {
          setStatus("unauthorized");
        }

      } catch (error) {
        setStatus("unauthorized");
      }
    };

    checkAccess();
  }, [OnlyAdmin]);

  if (status === "loading") return null;

  if (status === "unauthorized") {
    return <Navigate to="/login" />;
  }

  if (status === "forbidden") {
    return <Navigate to="/home" />;
  }

  return children;
}

export default ProtectedRoute;
