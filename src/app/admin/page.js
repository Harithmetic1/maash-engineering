"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const login = useStore((state) => state.login);

  const mutation = useMutation({
    queryKey: "login",
    mutationFn: (loginDetails) =>
      login(loginDetails.username, loginDetails.password.toString()),
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    // const response = await login(username, password);
    const response = await mutation.mutateAsync({ username, password });
    if (response.accessToken) {
      router.push("/admin/products");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[80vh] w-full">
        <h1 className="text-4xl font-bold pb-4">Admin Login</h1>
        {mutation.isSuccess ? (
          <div className="bg-green-500 text-white p-2 w-1/3 text-center">
            Login successful
          </div>
        ) : (
          ""
        )}
        {mutation.isError ? (
          <div className="bg-red-500 text-white p-2 w-1/3 text-center">
            {mutation.error.message}
          </div>
        ) : (
          ""
        )}
        <form
          className="flex flex-col gap-4 w-1/3 shadow p-10"
          onSubmit={handleLogin}
        >
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300"
          />
          <button className="bg-black text-white font-bold py-2 flex justify-center items-center">
            Login{" "}
            {mutation.isPending ? (
              <span className="flex justify-center items-center w-10 h-[30] animate-spin text-white">
                <Image
                  src="/loading_white.svg"
                  className="text-white"
                  alt="loader"
                  width={30}
                  height={30}
                />
              </span>
            ) : (
              ""
            )}
          </button>
          <div className="forgot-password">
            <a href="#" className="text-blue-500">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
