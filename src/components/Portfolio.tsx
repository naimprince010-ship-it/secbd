import Image from "next/image";

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
}

interface PortfolioProps {
    data?: PortfolioItem[];
}

export function Portfolio({ data }: PortfolioProps) {
    const displayProjects = data || [
        { id: 1, title: "Eco-Industrial Complex", category: "Industrial", image: "/images/industrial.png" },
        { id: 2, title: "Skyline Corporate Hub", category: "Commercial", image: "/images/commercial.png" },
        { id: 3, title: "Azure Residences", category: "Residential", image: "/images/residential.png" },
        { id: 4, title: "Modern Rooftop Garden", category: "Renovation", image: "/images/roofing.png" },
        { id: 5, title: "Bridge Infrastructure", category: "Industrial", image: "/images/bridge.png" },
        { id: 6, title: "Urban Loft Remodel", category: "Renovation", image: "/images/renovation.png" },
    ];

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-safety-orange font-bold uppercase tracking-widest text-sm">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mt-2">Latest Masterpieces</h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-20 h-1 bg-safety-orange hidden md:block mb-3"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl bg-navy aspect-square">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-safety-orange text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                                <div className="mt-4 w-0 group-hover:w-full h-1 bg-safety-orange transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-black py-4 px-10 rounded-md transition-all uppercase tracking-widest">
                        Explore More Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
