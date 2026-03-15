import { Building2, Home as HomeIcon, Layout, Pickaxe } from "lucide-react";

const services = [
    {
        title: "Residential Construction",
        description: "Tailored living spaces designed with modern aesthetics and structural integrity. From custom homes to luxury villas.",
        icon: HomeIcon,
        image: "/images/residential.png"
    },
    {
        title: "Commercial Projects",
        description: "High-spec office buildings, retail spaces, and mixed-use developments that drive business growth and efficiency.",
        icon: Building2,
        image: "/images/commercial.png"
    },
    {
        title: "Renovation & Remodel",
        description: "Transforming existing spaces into contemporary environments with expert craftsmanship and minimal disruption.",
        icon: Pickaxe,
        image: "/images/renovation.png"
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-safety-orange font-bold uppercase tracking-widest text-sm">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-2">Specialized Construction Services</h2>
                    <div className="w-20 h-1.5 bg-safety-orange mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col items-center p-8 text-center hover:-translate-y-2">
                            <div className="w-16 h-16 bg-navy text-safety-orange rounded-lg flex items-center justify-center mb-6 group-hover:bg-safety-orange group-hover:text-navy transition-colors duration-300">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <a href="#contact" className="text-navy font-bold flex items-center gap-2 group-hover:text-safety-orange transition-colors">
                                Learn More <Layout className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
