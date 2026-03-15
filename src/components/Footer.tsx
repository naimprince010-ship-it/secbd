import { Facebook, Hammer, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-navy text-white pt-20 pb-10 border-t-8 border-safety-orange">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-safety-orange p-1.5 rounded-md">
                                <Hammer className="w-5 h-5 text-navy" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">SEC<span className="text-safety-orange">BUILD</span></span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Leading the industry with precision engineering and sustainable construction practices since 1998.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety-orange hover:text-navy transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety-orange hover:text-navy transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety-orange hover:text-navy transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-safety-orange hover:text-navy transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-safety-orange w-fit pb-1">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-safety-orange transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-safety-orange transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-safety-orange transition-colors">Portfolio</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-safety-orange transition-colors">About Us</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-safety-orange transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-safety-orange w-fit pb-1">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-safety-orange transition-colors">Residential Construction</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-safety-orange transition-colors">Commercial Projects</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-safety-orange transition-colors">Industrial Infrastructure</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-safety-orange transition-colors">Road & Highway</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-safety-orange transition-colors">Renovation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-safety-orange w-fit pb-1">Newsletter</h4>
                        <p className="text-gray-400 mb-6">Subscribe to get latest updates and case studies.</p>
                        <form className="flex">
                            <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-l-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-safety-orange w-full" />
                            <button className="bg-safety-orange text-navy px-4 py-3 rounded-r-md font-bold hover:bg-safety-orange-hover transition-colors">Join</button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2026 SECBUILD Construction. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
