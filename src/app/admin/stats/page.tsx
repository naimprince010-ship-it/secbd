"use client";

import { useState } from "react";
import { Briefcase, Clock, Users, Save, CheckCircle2 } from "lucide-react";

export default function StatsAdmin() {
    const [stats, setStats] = useState([
        { id: 1, label: "Projects Completed", value: "850+", icon: Briefcase },
        { id: 2, label: "Years of Experience", value: "25+", icon: Clock },
        { id: 3, label: "Happy Clients", value: "620+", icon: Users },
    ]);

    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-black text-navy mb-2">Success Counters</h1>
                <p className="text-gray-500 text-sm">Update the metrics that demonstrate your company's track record.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <form onSubmit={handleSave} className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={stat.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
                                <div className="w-12 h-12 bg-navy text-safety-orange rounded-lg flex items-center justify-center">
                                    <stat.icon className="w-6 h-6" />
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Label</label>
                                        <input
                                            className="w-full bg-white border border-gray-200 rounded-lg p-3 text-sm font-bold text-navy focus:ring-2 focus:ring-safety-orange focus:outline-none"
                                            value={stat.label}
                                            onChange={(e) => {
                                                const newStats = [...stats];
                                                newStats[index].label = e.target.value;
                                                setStats(newStats);
                                            }}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Value (e.g. 500+)</label>
                                        <input
                                            className="w-full bg-white border border-gray-200 rounded-lg p-3 text-2xl font-black text-navy focus:ring-2 focus:ring-safety-orange focus:outline-none"
                                            value={stat.value}
                                            onChange={(e) => {
                                                const newStats = [...stats];
                                                newStats[index].value = e.target.value;
                                                setStats(newStats);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div>
                            {showSuccess && (
                                <div className="flex items-center gap-2 text-green-600 font-bold animate-in slide-in-from-left duration-300">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Stats updated successfully!
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-black py-4 px-10 rounded-xl text-lg transition-all shadow-lg shadow-navy/20"
                        >
                            {isSaving ? "Updating..." : "Update Stats"}
                            <Save className="w-5 h-5 text-safety-orange" />
                        </button>
                    </div>
                </form>
            </div>

            {/* Visual Preview */}
            <div className="bg-navy rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-safety-orange text-navy px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest z-10">Live Preview</div>
                <div className="grid grid-cols-3 gap-4 relative z-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{stat.label}</div>
                        </div>
                    ))}
                </div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-safety-orange/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
