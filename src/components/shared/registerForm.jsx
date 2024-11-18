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

// Define validation schema
const loginSchema = z.object({
  name: z.string({ message: "Name must be string" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    try {
      axios
        .post("https://practiceserver.vercel.app/api/user", data)
        .then((res) => console.log(res));
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-[500px] mx-auto bg-white p-6 rounded-md shadow-sm"
    >
      <h1 className="text-4xl font-semibold">Register Form</h1>
      <div>
        <Label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
        >
          Name
        </Label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          className="mt-1 py-6 text-xl"
          placeholder="Enter your name"
        />
      </div>
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
        Register
      </Button>
      <div className="flex flex-col items-center">
        <p className="mb-4 text-lg">or</p>
        <Button className="w-full text-lg py-6">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
