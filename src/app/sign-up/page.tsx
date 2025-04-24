"use client";

import useAuth from "@/store/useAuth";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { signUpSchema } from "@/schemas/signUpSchema";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

export default function SignUp() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const { setSignUp, accessToken: isAuthenticated, loading, error } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !loading) {
      redirect("/home");
    }
  }, [isAuthenticated, loading, router]);

  const onSubmit = handleSubmit(async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const validation = signUpSchema.safeParse(formData);
    if (validation.success) {
      await setSignUp(validation.data);
    }
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        width="25rem"
        display="flex"
        flexDirection="column"
        gap={4}
        as="form"
        onSubmit={onSubmit}
      >
        <Input
          padding={4}
          type="text"
          placeholder="name"
          {...register("name")}
        />

        <Input
          padding={4}
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <Input
          padding={4}
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Button padding={4} type="submit">
          Sign Up
        </Button>
      </Box>
      {error && (
        <Text color="red">
          {(error as AxiosError<ErrorResponse>).response?.data?.message ||
            error.message}
        </Text>
      )}
      <Box marginTop={4}>
        <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
        </Text>
      </Box>
    </Box>
  );
}
