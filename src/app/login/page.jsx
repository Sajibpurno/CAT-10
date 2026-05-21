"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaGithub, FaHome, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '../../lib/auth-client';
import { toast } from 'react-toastify';
// import { redirect } from 'next/navigation';

const LoginPage = () => {
    const [isShowPass, setIsShowPass] = useState(false);

    // Form submission logic
    const onSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            
            const user = Object.fromEntries(formData.entries());
            // console.log(user); 
            e.currentTarget.reset(); // Submit hoye gele form clear korar jonno
    
            // main setup for signup
            const { data, error } = await authClient.signIn.email
            ({
            email: user.email,
            password: user.password,
            rememberMe: true,
            callbackURL: "/"        
        })

         console.log(data, error);
    
         if (error) {
            toast.warning(error.message)
         }
         if(data){
            toast.success("Login Successful");
         }
        }
    const handleGoogleLogin =async () => {
    await authClient.signIn.social({
    provider: "google",
    });
}
    return (
        <div className="min-h-screen flex items-center justify-center p-5 sm:p-8 relative bg-[#FAF9F6] dark:bg-[#0a1628]">

            {/* Go Home Button */}
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md border border-[#1A1A1A]/10 dark:border-white/20 rounded-full shadow-sm text-[#1A1A1A] dark:text-white hover:border-yellow-500 transition-all text-sm font-medium"
            >
                <FaHome className="text-yellow-500" />
                <span>Go Home</span>
            </Link>

            <div className="w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl shadow-xl shadow-[#1A1A1A]/8 dark:shadow-black/20 p-8 sm:p-10 ring-1 ring-[#1A1A1A]/[0.06] dark:ring-white/10">

                <div className="text-center mb-10 space-y-2">
                    <h1 className="font-heading text-3xl sm:text-4xl text-[#1A1A1A] dark:text-white tracking-tight">Welcome Back</h1>
                    <p className="text-[#1A1A1A] dark:text-gray-400">Please enter your details to sign in</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-gray-200 mb-1.5 ml-0.5">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="name@email.com"
                            required
                            className="w-full px-4 py-2 rounded-2xl border border-[#1A1A1A]/12 dark:border-white/20 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all bg-[#FAF9F6] dark:bg-[#081224] text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/35 dark:placeholder:text-gray-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <div className="flex justify-between items-center mb-1.5 ml-0.5">
                            <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-gray-200">Password</label>
                            {/* ERROR FIXED: 'disable' attribute removed */}
                            <Link href="/forgot-password" title="Feature coming soon" className="text-xs text-yellow-500 hover:text-yellow-600 font-medium transition-colors">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                name="password"
                                type={isShowPass ? "text" : "password"}
                                placeholder="••••••••"
                                required
                                className="w-full px-4 py-2 rounded-2xl border border-[#1A1A1A]/12 dark:border-white/20 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all bg-[#FAF9F6] dark:bg-[#081224] text-[#1A1A1A] dark:text-white placeholder:text-[#1A1A1A]/35 dark:placeholder:text-gray-500"
                            />
                            <span 
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#1A1A1A] dark:text-gray-500 hover:text-yellow-500 transition-colors" 
                                onClick={() => setIsShowPass(!isShowPass)}
                            >
                                {isShowPass ? <FaEye size={18} /> : <FaRegEyeSlash size={18} />}
                            </span>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center ml-0.5">
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 rounded border-[#1A1A1A]/25 text-yellow-500 focus:ring-yellow-500/40 cursor-pointer"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-[#1A1A1A] dark:text-gray-400 cursor-pointer">
                            Remember me
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-full bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90 hover:bg-yellow-500 text-white font-bold py-1.5 shadow-lg shadow-yellow-400/20 transition-all active:scale-[0.98] cursor-pointer"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Register Link */}
                <div className="mt-8 text-center text-sm text-[#1A1A1A] dark:text-gray-400 font-medium">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
                        Signup now
                    </Link>
                </div>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#1A1A1A]/10 dark:border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase tracking-wider">
                        <span className="bg-white dark:bg-[#0f172a] px-4 text-[#1A1A1A] dark:text-gray-500 font-medium">Or login with</span>
                    </div>
                </div>

                {/* Social Logins */}
                <div className="flex mb-2">
                    <button onClick={handleGoogleLogin}
                        type="button"
                        className="flex items-center justify-center gap-2 py-2 border border-[#1A1A1A]/12 w-full dark:border-white/20 rounded-2xl hover:border-yellow-500 hover:ring-2 hover:ring-yellow-500/20 hover:bg-[#1A1A1A]/[0.02] dark:hover:bg-white/10 transition-all text-sm font-semibold text-[#1A1A1A] dark:text-gray-200 cursor-pointer"
                    >
                        <FcGoogle size={20} />
                        Google
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default LoginPage;