import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiLock, FiMail } from "react-icons/fi";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const route = useRouter();

  const handleChange = (e: any) => {
    e.preventDefault();
    setLoginData({ ...loginData, ...{ [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      if (
        loginData.email === "admin@gmail.com" &&
        loginData.password === "admin"
      ) {
        toast.success("Login Successfully");
        route.push("/");
      } else {
        toast.error("Incorrect Email or Password");
      }
    } else {
      toast.error("Email or Password is missing");
    }
  };

  return (
    <main className="p-20 m-auto h-screen">
      <div className="w-full h-full grid lg:grid-cols-2 gap-5 rounded-lg border">
        <section className="relative hidden lg:flex justify-center items-center w-full h-full">
          <Image
            src="/static/images/login_bg.jpg"
            width="500"
            height="500"
            objectFit="cover"
            alt="Login"
          />
        </section>
        <section className="w-full flex items-center justify-center">
          <div className="w-full pl-20 lg:pl-0 pr-20">
            <div className="grid gap-4 pb-8">
              <h1 className="font-semibold text-gray-600">Login</h1>
              <p className="text-gray-600">
                Welcome back, please login to your account.
              </p>
            </div>
            <form className="grid gap-5">
              <div className="relative w-full rounded-lg h-12 border bg-white hover:border-primary/30 focus:border-primary text-gray-500">
                <span className="absolute left-2 top-3.5">
                  <FiMail size={20} />
                </span>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="email"
                  className="w-full h-full rounded-lg pl-10 text-lg text-gray-500"
                  name="email"
                  placeholder="Enter your name"
                />
              </div>
              <div className="relative w-full rounded-lg h-12 border bg-white hover:border-primary/30 focus:border-primary text-gray-500">
                <span className="absolute left-2 top-3.5">
                  <FiLock size={20} />
                </span>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type={"password"}
                  className="w-full h-full rounded-lg pl-10 text-lg"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  className="bg-primary text-white btn px-10 font-semibold"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
