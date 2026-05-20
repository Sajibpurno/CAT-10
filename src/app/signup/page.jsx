"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaEye, FaGithub, FaHome, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "../../lib/auth-client";

const SignupPage = () => {
  const [isShowPass, setIsShowPass] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());
    console.log(user);
    e.currentTarget.reset(); // Submit hoye gele form clear korar jonno

    // main setup for signup
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.photo,
    });
    console.log(data, error);

    if (data) {
      redirect("/login");
    }
    if (error) {
      alert("signUp faild");
    }
  };

  const handleGoogleLogin =async () => {
      await authClient.signIn.social({
      provider: "google",
      callbackURL: '/',
      });
    }

  return (
    <section className="min-h-screen flex items-center justify-center p-5 sm:p-8 relative bg-[#FAF9F6] dark:bg-[#0a1628]">
      {/* Go Home Button */}
      <Link
        href="/"
        className="absolute top-6 font-bold left-6 flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90 backdrop-blur-md border border-[#1A1A1A]/10 dark:border-white/20 rounded-full shadow-sm text-[#1A1A1A] dark:text-white hover:border-yellow-500 transition-all text-sm"
      >
        <FaHome className="text-black dark:text-white" />
        <span>Go Home</span>
      </Link>

      <div className="w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl shadow-xl shadow-[#1A1A1A]/8 dark:shadow-black/20 p-8 sm:p-10 ring-1 ring-[#1A1A1A]/[0.06] dark:ring-white/10">
        <div className="text-center mb-10 space-y-2">
          <h1 className="font-heading text-3xl sm:text-4xl text-[#1A1A1A] dark:text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-[#1A1A1A] dark:text-gray-400">
          Start your adoption journey today 
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-gray-200 mb-1.5 ml-0.5">
              Full Name
            </label>
            <input
              name="name" // MUST ADD THIS
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-1.5 rounded-2xl border border-[#1A1A1A]/12 dark:border-white/20 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all bg-[#FAF9F6] dark:bg-[#081224] text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/35 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-gray-200 mb-1.5 ml-0.5">
              Email Address
            </label>
            <input
              name="email" // MUST ADD THIS
              type="email"
              placeholder="name@email.com"
              required
              className="w-full px-4 py-1.5 rounded-2xl border border-[#1A1A1A]/12 dark:border-white/20 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all bg-[#FAF9F6] dark:bg-[#081224] text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/35 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-gray-200 mb-1.5 ml-0.5">
              Photo URL (Optional)
            </label>
            <input
              name="photo" // MUST ADD THIS
              type="url"
              placeholder="https://image-link.com"
              className="w-full px-4 py-1.5 rounded-2xl border border-[#1A1A1A]/12 dark:border-white/20 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all bg-[#FAF9F6] dark:bg-[#081224] text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/35 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-gray-200 mb-1.5 ml-0.5">
              Password
            </label>
            <input
              name="password" // MUST ADD THIS
              type={isShowPass ? "text" : "password"}
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full px-4 py-1.5 rounded-2xl border border-[#1A1A1A]/12 dark:border-white/20 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all bg-[#FAF9F6] dark:bg-[#081224] text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/35 dark:placeholder:text-gray-500"
            />
            <span
              className="absolute right-2 top-10 cursor-pointer text-[#1A1A1A]/40 dark:text-gray-400"
              onClick={() => setIsShowPass(!isShowPass)}
            >
              {isShowPass ? <FaEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-gray-200 mb-1.5 ml-0.5">
            Confirm Password
            </label>
            <input
              name="password" // MUST ADD THIS
              type={isShowPass ? "text" : "password"}
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full px-4 py-1.5 rounded-2xl border border-[#1A1A1A]/12 dark:border-white/20 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all bg-[#FAF9F6] dark:bg-[#081224] text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/35 dark:placeholder:text-gray-500"
            />
            <span
              className="absolute right-2 top-10 cursor-pointer text-[#1A1A1A]/40 dark:text-gray-400"
              onClick={() => setIsShowPass(!isShowPass)}
            >
              {isShowPass ? <FaEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          {/* Register Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-full bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90 hover:bg-yellow-500 text-white font-bold py-1.5 shadow-lg shadow-yellow-400/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-[#1A1A1A] dark:text-gray-400 font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
          >
            Login
          </Link>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1A1A1A]/10 dark:border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-wider">
            <span className="bg-white dark:bg-[#0f172a] px-4 text-[#1A1A1A] dark:text-gray-500 font-medium">
              Or register with{" "}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-2">
          <button onClick={handleGoogleLogin}
            type="button"
            className="flex hover:border-yellow-500 hover:ring-2 hover:ring-yellow-500/20 items-center cursor-pointer justify-center gap-2 py-3 border border-[#1A1A1A]/12 dark:border-white/20 rounded-2xl hover:bg-[#1A1A1A]/10 dark:hover:bg-white/10 transition-colors text-sm font-semibold text-[#1A1A1A] dark:text-gray-200"
          >
            <FcGoogle size={20} />
            Google
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default SignupPage;