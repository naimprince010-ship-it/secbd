"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface ContactProps {
    address?: string;
    phone?: string;
    email?: string;
}

export function Contact({ address, phone, email }: ContactProps) {
    const [fullName, setFullName] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [serviceType, setServiceType] = useState("Residential Construction");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName || !emailInput || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsSending(true);
        const { error } = await supabase
            .from('contact_messages')
            .insert([
                { 
                    full_name: fullName, 
                    email: emailInput, 
                    service_type: serviceType, 
                    message: message 
                }
            ]);

        setIsSending(false);
        if (!error) {
            setShowSuccess(true);
            setFullName("");
            setEmailInput("");
            setMessage("");
            setTimeout(() => setShowSuccess(false), 5000);
        } else {
            alert("Error: " + error.message);
        }
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <span className="text-safety-orange font-bold uppercase tracking-widest text-sm">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mt-2 mb-8">Ready to Start Your Project?</h2>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                            Contact us today for a free consultation and quote. Our experts are ready to bring your vision to life with precision and care.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white text-safety-orange rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold text-xl mb-1">Our Headquarters</h4>
                                    <p className="text-gray-600">{address || "123 Construction Ave, Skyline City, SC 54321"}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white text-safety-orange rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold text-xl mb-1">Call Us Anywhere</h4>
                                    <p className="text-gray-600">{phone || "(555) 123-4567"}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white text-safety-orange rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold text-xl mb-1">Email Support</h4>
                                    <p className="text-gray-600">{email || "contact@secbuild.com"}</p>
                                </div>
                            </div>
                        </div>
                        {/* Map iframe */}
                        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 h-64 relative bg-gray-100">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(address || "123 Construction Ave, Skyline City, SC 54321")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative">
                        {/* Decorative element */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-safety-orange/5 rounded-full -z-0"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy/5 rounded-full -z-0"></div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            {showSuccess && (
                                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-center gap-3 animate-in fade-in duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <p className="font-bold">Message sent successfully! We will get back to you soon.</p>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-navy font-bold text-sm uppercase tracking-wider">Full Name</label>
                                    <input 
                                        type="text" 
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="John Doe" 
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-navy font-bold text-sm uppercase tracking-wider">Email Address</label>
                                    <input 
                                        type="email" 
                                        value={emailInput}
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        placeholder="john@example.com" 
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-navy font-bold text-sm uppercase tracking-wider">Service Type</label>
                                <select 
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all"
                                >
                                    <option>Residential Construction</option>
                                    <option>Commercial Projects</option>
                                    <option>Renovation & Remodel</option>
                                    <option>Industrial Infrastructure</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-navy font-bold text-sm uppercase tracking-wider">Message</label>
                                <textarea 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell us about your project..." 
                                    rows={6} 
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSending}
                                className="w-full bg-navy hover:bg-navy-dark text-white font-black py-4 rounded-lg text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl shadow-navy/20 disabled:opacity-50"
                            >
                                {isSending ? "Sending..." : "Send Message"} <Send className="w-5 h-5 text-safety-orange" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
