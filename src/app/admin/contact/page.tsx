"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Save, CheckCircle2, Globe, Clock as ClockIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactAdmin() {
    const [contact, setContact] = useState({
        address: "",
        phone: "",
        email: "",
        hours: "",
        website: "",
    });

    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const fetchSettings = async () => {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('site_settings')
                .select('*')
                .eq('id', 1)
                .single();

            if (data && !error) {
                setContact({
                    address: data.address || "",
                    phone: data.phone || "",
                    email: data.email || "",
                    hours: data.hours || "",
                    website: data.website || "",
                });
            }
            setIsLoading(false);
        };

        fetchSettings();
    }, []);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        const { error } = await supabase
            .from('site_settings')
            .upsert({
                id: 1, // Ensure update on the single row
                address: contact.address,
                phone: contact.phone,
                email: contact.email,
                hours: contact.hours,
                website: contact.website,
                updated_at: new Date().toISOString()
            });

        setIsSaving(false);
        if (!error) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        } else {
            alert("Error saving settings: " + error.message);
        }
    };

    if (isLoading) {
        return <div className="p-8 text-center text-navy font-bold text-lg">Loading Settings...</div>;
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-black text-navy mb-2">Contact Information</h1>
                <p className="text-gray-500 text-sm">Update your company's physical address and contact methods.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <form onSubmit={handleSave} className="p-8 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Address */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-safety-orange" />
                                Physical Address
                            </label>
                            <textarea
                                value={contact.address}
                                onChange={(e) => setContact({ ...contact, address: e.target.value })}
                                rows={3}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all font-bold text-navy resize-none"
                            />
                        </div>

                        {/* Business Hours */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <ClockIcon className="w-3 h-3 text-safety-orange" />
                                Business Hours
                            </label>
                            <input
                                value={contact.hours}
                                onChange={(e) => setContact({ ...contact, hours: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all font-bold text-navy"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <Phone className="w-3 h-3 text-safety-orange" />
                                Phone Number
                            </label>
                            <input
                                value={contact.phone}
                                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all font-bold text-navy"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <Mail className="w-3 h-3 text-safety-orange" />
                                Email Address
                            </label>
                            <input
                                value={contact.email}
                                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all font-bold text-navy"
                            />
                        </div>

                        {/* Website */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <Globe className="w-3 h-3 text-safety-orange" />
                                Website Address
                            </label>
                            <input
                                value={contact.website}
                                onChange={(e) => setContact({ ...contact, website: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all font-bold text-navy"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div>
                            {showSuccess && (
                                <div className="flex items-center gap-2 text-green-600 font-bold animate-in slide-in-from-left duration-300">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Contact info updated!
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-black py-4 px-10 rounded-xl text-lg transition-all shadow-lg shadow-navy/20"
                        >
                            {isSaving ? "Saving..." : "Save Information"}
                            <Save className="w-5 h-5 text-safety-orange" />
                        </button>
                    </div>
                </form>
            </div>

            {/* Social Preview */}
            <div className="bg-gray-100 rounded-3xl p-8 flex flex-wrap gap-12 items-center justify-center">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Globe className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Website</p>
                        <p className="font-bold text-navy">{contact.website || "www.secbuild.com"}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <MapPin className="w-6 h-6 text-safety-orange" />
                    </div>
                    <p className="max-w-[150px] text-xs font-bold text-navy leading-tight">{contact.address}</p>
                </div>
            </div>
        </div>
    );
}
