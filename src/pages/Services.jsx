import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Wrench, Droplets, Settings, Search, Cpu, Handshake, Hammer } from 'lucide-react';
import { SERVICES, PRODUCTS_DETAIL, SITE } from '../data/siteData';

const getServiceIcon = (title) => {
    if (title.includes('Installation')) return <Zap size={24} />;
    if (title.includes('Fabrication')) return <Hammer size={24} />;
    if (title.includes('Plumbing')) return <Droplets size={24} />;
    if (title.includes('Repair') || title.includes('Rework')) return <Wrench size={24} />;
    if (title.includes('Fault') || title.includes('Diagnosis')) return <Search size={24} />;
    if (title.includes('AMC') || title.includes('Maintenance')) return <Settings size={24} />;
    if (title.includes('I&C') || title.includes('Expert')) return <Cpu size={24} />;
    if (title.includes('Sub')) return <Handshake size={24} />;
    return <Zap size={24} />;
};

const Services = () => {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="py-24 px-6 relative overflow-hidden min-h-[50vh] flex items-center">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: "url('/landing/solar-line.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

                <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
                        Expert Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                        Complete Solar <br />
                        <span className="text-primary italic">Solutions for You</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
                        From installation to sub-contracting — D.Energy handles every aspect of your solar project with expertise.
                    </p>
                </div>
            </section>

            {/* Product Details Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto space-y-24">
                    {PRODUCTS_DETAIL.map((p, i) => (
                        <div key={i} className={`group flex flex-col lg:items-center gap-12 lg:gap-16 ${p.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <div className="flex-1 relative group">
                                <div className={`absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700`} />
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="relative w-full h-[360px] object-cover rounded-[3rem] shadow-2xl z-10"
                                />
                                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-5 py-1.5 rounded-full shadow-lg">
                                    <span className="text-primary font-black text-xs uppercase tracking-widest">{p.tag}</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl shadow-inner group-hover:scale-110 transition-transform">
                                    {getServiceIcon(p.title)}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
                                    {p.title}
                                </h2>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    {p.desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {p.features.map((f, j) => (
                                        <div key={j} className="flex items-center gap-3 text-secondary font-bold text-sm">
                                            <CheckCircle2 className="text-primary shrink-0" size={16} />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-2">
                                    <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 group/btn">
                                        Get Quote <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Grid View - All services */}
            {/* <section className="py-20 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Service Catalog</div>
                        <h2 className="text-4xl font-extrabold text-secondary">Complete Solar Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES.map((s, i) => (
                            <Link
                                to="/contact"
                                key={i}
                                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500"
                            > */}
            {/* Background Image */}
            {/* <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            /> */}
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" /> */}

            {/* Content */}
            {/* <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold text-white mb-1 transform transition-transform duration-300 group-hover:-translate-y-1">{s.title}</h3>
                <p className="text-white/60 text-[10px] leading-tight mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {s.desc}
                </p>
                <div className="flex items-center text-primary font-bold gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-xs">
                    Know More <ArrowRight size={14} />
                </div>
            </div>
        </Link>
    ))
}
                    </div >
                </div >
            </section > */}

            {/* CTA */}
            < section className="py-20 mb-20 px-6 max-w-7xl mx-auto" >
                <div className="bg-secondary rounded-[3rem] px-8 py-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Already have solar? <br />
                            <span className="text-primary italic">Keep it running at 100%!</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our expert AMC services ensure your system generates maximum energy 365 days a year. Join 200+ happy customers.
                        </p>
                        <div className="pt-4">
                            <Link to="/contact" className="inline-block bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 hover:scale-105 transition shadow-2xl">
                                Inquire About AMC
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Services;