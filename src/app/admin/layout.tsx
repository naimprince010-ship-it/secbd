"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    Image as ImageIcon,
    Settings,
    Briefcase,
    BarChart3,
    Mail,
    LogOut,
    Hammer,
    ChevronRight,
    Menu,
    X,
    Award
} from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        const isAuth = localStorage.getItem("admin_auth");
        if (!isAuth && pathname !== "/admin/login") {
            router.push("/admin/login");
        }
    }, [pathname, router]);

    const handleLogout = () => {
        localStorage.removeItem("admin_auth");
        router.push("/admin/login");
    };

    if (!isMounted) return null;
    if (pathname === "/admin/login") return <>{children}</>;

    const menuItems = [
        { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { label: "Certificates", icon: Award, href: "/admin/certificates" },
        { label: "Hero Section", icon: ImageIcon, href: "/admin/hero" },
        { label: "Services", icon: Briefcase, href: "/admin/services" },
        { label: "Stats", icon: BarChart3, href: "/admin/stats" },
        { label: "Portfolio", icon: ImageIcon, href: "/admin/portfolio" },
        { label: "Contact Info", icon: Mail, href: "/admin/contact" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className={`bg-navy text-white transition-all duration-300 z-50 ${isSidebarOpen ? "w-64" : "w-20"} fixed h-full flex flex-col`}>
                <div className="p-6 flex items-center gap-3 border-b border-white/10 h-20 overflow-hidden">
                    <div className="bg-safety-orange p-1.5 rounded flex-shrink-0">
                        <Hammer className="w-5 h-5 text-navy" />
                    </div>
                    {isSidebarOpen && <span className="font-black text-xl tracking-tighter whitespace-nowrap">SEC<span className="text-safety-orange">ADMIN</span></span>}
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-2 mt-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 p-3 rounded-lg transition-all group ${isActive ? "bg-safety-orange text-navy" : "hover:bg-white/5 active:bg-white/10"
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-navy" : "text-safety-orange"}`} />
                                {isSidebarOpen && <span className="font-bold text-sm tracking-wide">{item.label}</span>}
                                {isSidebarOpen && isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={handleLogout}
                    className="p-6 flex items-center gap-4 border-t border-white/10 hover:bg-red-500/10 transition-colors text-gray-400 hover:text-red-400 group"
                >
                    <LogOut className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                    {isSidebarOpen && <span className="font-bold text-sm">Sign Out</span>}
                </button>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"} flex flex-col`}>
                <header className="bg-white h-20 shadow-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-navy"
                    >
                        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-black text-navy leading-none">Admin User</p>
                            <p className="text-xs font-bold text-safety-orange uppercase tracking-widest mt-1 italic">Master Control</p>
                        </div>
                        <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-black border-2 border-safety-orange shadow-md">
                            A
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
