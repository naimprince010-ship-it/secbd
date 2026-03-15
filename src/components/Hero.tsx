import { ArrowRight, HardHat, ShieldCheck, Trophy } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-navy">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#FF9900_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-in fade-in slide-in-from-left duration-1000">
                    <div className="inline-flex items-center gap-2 bg-safety-orange/10 border border-safety-orange/20 text-safety-orange px-4 py-2 rounded-full mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Certified Construction Excellence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                        Building Your <span className="text-safety-orange">Vision</span> With Unmatched Precision
                    </h1>
                    <p className="text-lg text-gray-300 mb-10 max-w-xl">
                        From residential masterpieces to complex industrial infrastructures, we deliver quality that stands the test of time. Expert engineering meet innovative design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="flex items-center justify-center gap-2 bg-safety-orange hover:bg-safety-orange-hover text-navy font-bold py-4 px-10 rounded-md text-lg transition-all transform hover:-translate-y-1">
                            Get a Quote <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#portfolio" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-10 rounded-md text-lg transition-all">
                            View Our Work
                        </a>
                    </div>

                    <div className="mt-12 flex gap-8 items-center border-t border-white/10 pt-8">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-safety-orange" />
                            <span className="text-sm text-gray-400 font-medium uppercase">Award Winning Firm</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HardHat className="w-5 h-5 text-safety-orange" />
                            <span className="text-sm text-gray-400 font-medium uppercase">Safety Certified</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
                    <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
                        {/* We'll use a generated image here or a beautiful placeholder gradient for now */}
                        <div className="aspect-[4/5] bg-gradient-to-br from-navy via-navy-light to-safety-orange/20 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-24 h-24 bg-safety-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <HardHat className="w-12 h-12 text-safety-orange" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Quality Construction</h3>
                                <p className="text-gray-400">Exceeding expectations on every project.</p>
                            </div>
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-safety-orange rounded-lg -z-0 opacity-50 blur-3xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-light rounded-lg -z-0 opacity-50 blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
