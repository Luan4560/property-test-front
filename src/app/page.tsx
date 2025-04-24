"use client";

import useAuth from "@/store/useAuth";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function App() {
  const { accessToken: isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated === null) {
      redirect("/sign-in");
    } else {
      redirect("/home");
    }
  }, [isAuthenticated]);

  return <div />;
}
