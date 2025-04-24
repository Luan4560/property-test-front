/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useAuth from "@/store/useAuth";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const { accessToken: isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const handleGoBack = () => {
    router.push("/");
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("auth-storage");
    router.push("/sign-in");
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    }
  }, []);

  return (
    <Box
      as="header"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      padding={4}
      marginTop={4}
    >
      <Button width="4rem" onClick={handleGoBack}>
        Home
      </Button>

      <Box display="flex" gap={4}>
        {isAuthenticated ? (
          <Button width="4rem" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button width="4rem" onClick={handleSignIn}>
              SignIn
            </Button>

            <Button width="4rem" onClick={handleSignUp}>
              SignUp
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
