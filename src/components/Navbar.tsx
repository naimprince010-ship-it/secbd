"use client";

import { Hammer, Menu, Phone, X, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-navy text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-safety-orange p-2 rounded-md">
                            <Hammer className="w-6 h-6 text-navy" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">SEC<span className="text-safety-orange">BUILD</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="hover:text-safety-orange transition-colors">Services</a>
                        <a href="#portfolio" className="hover:text-safety-orange transition-colors">Portfolio</a>
                        <a href="#about" className="hover:text-safety-orange transition-colors">About</a>
                        <a href="/verify" className="hover:text-safety-orange transition-colors flex items-center gap-1 text-sm font-bold bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10">
                            <ShieldCheck className="w-4 h-4 text-safety-orange" /> Verify Certificate
                        </a>
                        <a href="#contact" className="bg-safety-orange hover:bg-safety-orange-hover text-navy font-bold py-2 px-6 rounded-md transition-all">Get a Quote</a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-navy-dark border-t border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                    <a href="#services" className="py-2 hover:text-safety-orange" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#portfolio" className="py-2 hover:text-safety-orange" onClick={() => setIsOpen(false)}>Portfolio</a>
                    <a href="#about" className="py-2 hover:text-safety-orange" onClick={() => setIsOpen(false)}>About</a>
                    <a href="/verify" className="py-2 hover:text-safety-orange flex items-center gap-1" onClick={() => setIsOpen(false)}>
                        <ShieldCheck className="w-4 h-4 text-safety-orange" /> Verify Certificate
                    </a>
                    <a href="#contact" className="bg-safety-orange text-navy font-bold py-3 px-6 rounded-md text-center" onClick={() => setIsOpen(false)}>Get a Quote</a>
                </div>
            )}
        </nav>
    );
}
