"use client";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully...");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-96 mx-auto border py-5 mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
      <h1 className="text-sm text-center">
        Already Have An Account ? Please
        <Link href={"/pages/login"} className="ml-1">
          Login
        </Link>
      </h1>
    </div>
  );
};

export default SignUpPage;
