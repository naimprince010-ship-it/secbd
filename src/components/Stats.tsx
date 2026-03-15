import { Briefcase, Clock, Users } from "lucide-react";

const stats = [
    { label: "Projects Completed", value: "850+", icon: Briefcase },
    { label: "Years of Experience", value: "25+", icon: Clock },
    { label: "Happy Clients", value: "620+", icon: Users },
];

export function Stats() {
    return (
        <section className="bg-navy py-20 text-white overflow-hidden relative">
            {/* Decorative safety stripe */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-safety-orange via-safety-orange-hover to-safety-orange"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-full bg-safety-orange/10 border border-safety-orange/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <stat.icon className="w-8 h-8 text-safety-orange" />
                            </div>
                            <div className="text-5xl font-black mb-2 text-white tabular-nums tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
