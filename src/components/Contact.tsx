import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
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
                                    <p className="text-gray-600">123 Construction Ave, Skyline City, SC 54321</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white text-safety-orange rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold text-xl mb-1">Call Us Anywhere</h4>
                                    <p className="text-gray-600">(555) 123-4567</p>
                                    <p className="text-gray-600">(555) 987-6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white text-safety-orange rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold text-xl mb-1">Email Support</h4>
                                    <p className="text-gray-600">contact@secbuild.com</p>
                                    <p className="text-gray-600">quotes@secbuild.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 rounded-xl overflow-hidden grayscale contrast-125 border border-gray-200 h-64 relative bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase italic opacity-50">
                                Interactive Map Integration Placeholder
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center shadow-2xl">
                                <MapPin className="w-6 h-6 text-navy" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative">
                        {/* Decorative element */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-safety-orange/5 rounded-full -z-0"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy/5 rounded-full -z-0"></div>

                        <form className="relative z-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-navy font-bold text-sm uppercase tracking-wider">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-navy font-bold text-sm uppercase tracking-wider">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-navy font-bold text-sm uppercase tracking-wider">Service Type</label>
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all">
                                    <option>Residential Construction</option>
                                    <option>Commercial Projects</option>
                                    <option>Renovation & Remodel</option>
                                    <option>Industrial Infrastructure</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-navy font-bold text-sm uppercase tracking-wider">Message</label>
                                <textarea placeholder="Tell us about your project..." rows={6} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-safety-orange focus:outline-none transition-all resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-navy hover:bg-navy-dark text-white font-black py-4 rounded-lg text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl shadow-navy/20">
                                Send Message <Send className="w-5 h-5 text-safety-orange" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
