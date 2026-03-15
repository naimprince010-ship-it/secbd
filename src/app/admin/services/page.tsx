"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Home as HomeIcon, Building2, Pickaxe, Save, X } from "lucide-react";

export default function ServicesAdmin() {
    const [services, setServices] = useState([
        { id: 1, title: "Residential Construction", description: "Tailored living spaces designed with modern aesthetics and structural integrity.", icon: HomeIcon },
        { id: 2, title: "Commercial Projects", description: "High-spec office buildings, retail spaces, and mixed-use developments.", icon: Building2 },
        { id: 3, title: "Renovation & Remodel", description: "Transforming existing spaces into contemporary environments with expert craftsmanship.", icon: Pickaxe },
    ]);

    const [isEditing, setIsEditing] = useState<number | null>(null);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-navy mb-2">Manage Services</h1>
                    <p className="text-gray-500 text-sm">Add, remove or edit the core services your company offers.</p>
                </div>
                <button className="flex items-center gap-2 bg-safety-orange hover:bg-safety-orange-hover text-navy font-black py-3 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                    <Plus className="w-5 h-5" />
                    Add New Service
                </button>
            </div>

            <div className="grid gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transform transition-all hover:shadow-md">
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-16 h-16 bg-navy text-safety-orange rounded-xl flex items-center justify-center flex-shrink-0">
                                <service.icon className="w-8 h-8" />
                            </div>

                            <div className="flex-1 space-y-2">
                                {isEditing === service.id ? (
                                    <input
                                        className="text-xl font-bold text-navy w-full border-b-2 border-safety-orange focus:outline-none bg-orange-50/50 p-2"
                                        value={service.title}
                                        onChange={(e) => {
                                            const newServices = [...services];
                                            newServices.find(s => s.id === service.id)!.title = e.target.value;
                                            setServices(newServices);
                                        }}
                                    />
                                ) : (
                                    <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                                )}

                                {isEditing === service.id ? (
                                    <textarea
                                        className="text-gray-600 w-full border-b-2 border-safety-orange focus:outline-none bg-orange-50/50 p-2 mt-2"
                                        value={service.description}
                                        rows={2}
                                        onChange={(e) => {
                                            const newServices = [...services];
                                            newServices.find(s => s.id === service.id)!.description = e.target.value;
                                            setServices(newServices);
                                        }}
                                    />
                                ) : (
                                    <p className="text-gray-600">{service.description}</p>
                                )}
                            </div>

                            <div className="flex gap-2">
                                {isEditing === service.id ? (
                                    <>
                                        <button onClick={() => setIsEditing(null)} className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                            <Save className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => setIsEditing(null)} className="p-3 bg-gray-100 text-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
                                            <X className="w-5 h-5" />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setIsEditing(service.id)} className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                        <button className="p-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
