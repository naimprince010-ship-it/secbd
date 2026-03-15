"use client";

import { BarChart3, Briefcase, CheckCircle, Clock, Image as ImageIcon, Users } from "lucide-react";

export default function AdminDashboard() {
    const quickStats = [
        { label: "Total Projects", value: "850", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Active Services", value: "3", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
        { label: "Team Members", value: "45", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
        { label: "Galleries", value: "12", icon: ImageIcon, color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div>
                <h1 className="text-3xl font-black text-navy mb-2">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome to your site control center. Manage your content with precision.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickStats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-3xl font-black text-navy">{stat.value}</p>
                            </div>
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-500 bg-green-50 w-fit px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            <span>Synced 2m ago</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dashboard Sections */}
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold text-navy flex items-center gap-2">
                            <Clock className="w-5 h-5 text-safety-orange" />
                            Recent Activity
                        </h2>
                        <button className="text-xs font-black text-safety-orange uppercase hover:underline">View All</button>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-4 items-start border-l-2 border-gray-100 pl-6 relative">
                                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-safety-orange"></div>
                                <div>
                                    <p className="text-sm font-bold text-navy">New Portfolio Item Added</p>
                                    <p className="text-xs text-gray-400 mt-1">Today at 14:23 • by Admin</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-navy p-8 rounded-2xl shadow-sm relative overflow-hidden group">
                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-safety-orange/10 rounded-full blur-3xl group-hover:bg-safety-orange/20 transition-all"></div>
                    <h2 className="text-2xl font-black text-white mb-4 relative z-10">Database Status</h2>
                    <p className="text-gray-400 mb-8 relative z-10">Supabase connection is not yet established. Please configure your environment variables to enable live data syncing.</p>
                    <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold relative z-10">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                        Waiting for Credentials
                    </div>
                </div>
            </div>
        </div>
    );
}
