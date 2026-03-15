"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Hammer, Lock, User } from "lucide-react";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, using a simple local storage based auth for demo
        // In production, this would use Supabase Auth
        if (password === "admin123") {
            localStorage.setItem("admin_auth", "true");
            router.push("/admin");
        } else {
            setError("Invalid password. Try 'admin123'");
        }
    };

    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
                <div className="bg-safety-orange p-8 text-center">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                        <Hammer className="w-8 h-8 text-safety-orange" />
                    </div>
                    <h1 className="text-2xl font-black text-navy uppercase tracking-tighter">Admin Portal</h1>
                    <p className="text-navy/70 font-semibold">SECBUILD Management System</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-navy font-bold text-sm uppercase tracking-wider block">Admin Access</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter administrator password"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-600 text-sm font-bold bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-navy hover:bg-navy/90 text-white font-black py-4 rounded-lg text-lg transition-all shadow-lg shadow-navy/20"
                        >
                            Secure Login
                        </button>
                    </form>

                    <p className="text-center text-gray-400 text-xs mt-8">
                        © 2026 SECBUILD Construction • Authorized Personnel Only
                    </p>
                </div>
            </div>
        </div>
    );
}
