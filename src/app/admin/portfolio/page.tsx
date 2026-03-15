"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, ImageIcon, Upload, Search, Filter } from "lucide-react";

export default function PortfolioAdmin() {
    const [projects, setProjects] = useState([
        { id: 1, title: "Eco-Industrial Complex", category: "Industrial", image: "/images/industrial.png" },
        { id: 2, title: "Skyline Corporate Hub", category: "Commercial", image: "/images/commercial.png" },
        { id: 3, title: "Azure Residences", category: "Residential", image: "/images/residential.png" },
        { id: 4, title: "Modern Rooftop Garden", category: "Renovation", image: "/images/roofing.png" },
    ]);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-navy mb-2">Portfolio Gallery</h1>
                    <p className="text-gray-500 text-sm">Manage the projects showcased in your master gallery.</p>
                </div>
                <button className="flex items-center gap-2 bg-safety-orange hover:bg-safety-orange-hover text-navy font-black py-3 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                    <Plus className="w-5 h-5" />
                    Add New Project
                </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Search projects..." className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 focus:ring-1 focus:ring-safety-orange focus:outline-none text-sm" />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-bold text-navy hover:bg-gray-100 transition-colors">
                        <Filter className="w-4 h-4" />
                        All Categories
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Upload Slot */}
                <div className="group relative aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 hover:border-safety-orange hover:bg-orange-50 transition-all cursor-pointer overflow-hidden">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-safety-orange/20 transition-colors">
                        <Upload className="w-6 h-6 text-gray-400 group-hover:text-safety-orange" />
                    </div>
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest group-hover:text-safety-orange">Upload New Image</span>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>

                {projects.map((project) => (
                    <div key={project.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
                        <div className="aspect-square relative">
                            <Image src={project.image} alt={project.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
                                <button className="p-3 bg-white text-navy rounded-full hover:bg-safety-orange hover:text-navy transition-all transform hover:scale-110">
                                    <ImageIcon className="w-5 h-5" />
                                </button>
                                <button className="p-3 bg-white text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="p-4">
                            <span className="text-[10px] font-black text-safety-orange uppercase tracking-widest">{project.category}</span>
                            <h3 className="text-sm font-bold text-navy mt-1 truncate">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
