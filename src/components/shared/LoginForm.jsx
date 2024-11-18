"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hook";

// Define validation schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (userData) => {
    console.log("Form Data:", userData);
    try {
      const response = await axios.post(
        "https://practiceserver.vercel.app/api/user/login",
        userData
      );
      // localStorage.setItem("Authorization", response.data.toke);
      // localStorage.setItem("userDetails", JSON.stringify(response.data.data));
      // console.log(response.data.data);
      // Set user details in context
      dispatch(
        setUser({
          toke: response.data.toke,
          userDetails: response.data.data,
        })
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-[500px] mx-auto bg-white p-6 rounded-md shadow-sm"
    >
      <h1 className="text-4xl font-semibold">Login Form</h1>
      <div>
        <Label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 py-6 text-xl"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-lg text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="password"
          className="block text-lg font-medium text-gray-700"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          className="mt-1 py-6 text-lg"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-lg text-red-600 mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full text-lg py-6">
        Login
      </Button>
      <div className="flex flex-col items-center">
        <p className="mb-4 text-lg">or</p>
        <Button className="w-full text-lg py-6">
          <Link href="/register">Create an Account</Link>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
