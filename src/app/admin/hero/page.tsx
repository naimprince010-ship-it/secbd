"use client";

import { useState } from "react";
import { Save, AlertCircle, CheckCircle2 } from "lucide-react";

export default function HeroAdmin() {
    const [title, setTitle] = useState("Building Your Vision With Unmatched Precision");
    const [subtitle, setSubtitle] = useState("From residential masterpieces to complex industrial infrastructures, we deliver quality that stands the test of time.");
    const [isSaving, setIsSaving] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setStatus(null);

        // Simulate Supabase Update
        setTimeout(() => {
            setIsSaving(false);
            setStatus({ type: 'success', msg: 'Hero section updated successfully! Changes will be live shortly.' });
        }, 1500);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-navy mb-2">Hero Section</h1>
                    <p className="text-gray-500 text-sm">Update the main headline and subtext of your landing page.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-navy font-bold text-sm uppercase tracking-wider">Main Headline</label>
                            <textarea
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                rows={3}
                                placeholder="Enter a powerful headline..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all font-black text-2xl text-navy resize-none"
                            />
                            <p className="text-xs text-gray-400 font-medium">Tip: Use bold action verbs to capture attention immediately.</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-navy font-bold text-sm uppercase tracking-wider">Sub-headline / Description</label>
                            <textarea
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                rows={4}
                                placeholder="Briefly describe your company's value proposition..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all text-gray-600 leading-relaxed resize-none"
                            />
                        </div>

                        {status && (
                            <div className={`p-4 rounded-xl border flex items-center gap-3 animate-in zoom-in duration-300 ${status.type === 'success' ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'
                                }`}>
                                {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                <span className="text-sm font-bold">{status.msg}</span>
                            </div>
                        )}

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={isSaving}
                                className={`flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-black py-4 px-10 rounded-xl text-lg transition-all shadow-lg shadow-navy/20 ${isSaving ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSaving ? "Saving..." : "Save Changes"}
                                <Save className="w-5 h-5 text-safety-orange" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Preview Section */}
            <div className="bg-navy p-10 rounded-3xl border-8 border-white/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-safety-orange text-navy px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest z-10">Live Preview</div>
                <div className="max-w-2xl relative z-10 transition-all duration-300">
                    <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">{title}</h1>
                    <p className="text-sm text-gray-400 leading-relaxed">{subtitle}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-safety-orange/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
