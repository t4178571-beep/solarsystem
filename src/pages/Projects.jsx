import React, { useState } from 'react';
import { GALLERY, BRANDS, SITE } from '../data/siteData';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const categorizedGallery = GALLERY.map(g => ({
        ...g,
        catLabel: g.cat.charAt(0).toUpperCase() + g.cat.slice(1)
    }));

    const filteredGallery = filter === 'all'
        ? categorizedGallery
        : categorizedGallery.filter(g => g.cat === filter);

    const categories = ['all', ...new Set(categorizedGallery.map(g => g.cat))];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="py-24 px-6 relative overflow-hidden min-h-[50vh] flex items-center">
                {/* Background Image with Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: "url('/landing/solar-line 2.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                
                <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
                        Case Studies
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                        Our Recent <br />
                        <span className="text-primary italic">Solar Installations</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
                        500+ successful projects across Gujarat — helping homes and businesses switch to clean energy every day.
                    </p>
                </div>
            </section>

            {/* Filter Gallery Section */}
            <section className="py-20 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setFilter(cat)}
                                className={`px-7 py-2.5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${filter === cat
                                    ? 'bg-primary text-white shadow-xl shadow-orange-900/40'
                                    : 'bg-white text-secondary border border-gray-100 hover:bg-orange-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGallery.map((g, i) => (
                            <div key={i} className={`relative group h-80 overflow-hidden rounded-[2rem] shadow-2xl ${g.span2 ? 'md:col-span-2' : ''}`}>
                                <img
                                    src={g.src}
                                    alt={g.cap}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-primary font-black text-xs uppercase tracking-widest mb-2 block">{g.catLabel}</span>
                                    <h3 className="text-white text-2xl font-black leading-tight drop-shadow-lg">{g.cap}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Partner */}
            {/* <section className="py-20 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Our Partners</div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-12 leading-tight">
                        Powering You with Tier-1 Brands
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {BRANDS.map((brand, i) => (
                            <div key={i} className="bg-lightBg px-8 py-5 rounded-3xl border border-gray-100 text-base font-black text-secondary/70 hover:text-primary transition-colors cursor-default">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA */}
            <section className="py-20 px-6 bg-secondary relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[100px] -translate-y-1/2" />
                <div className="max-w-4xl mx-auto relative z-10 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Want your roof <br />
                        <span className="text-primary italic">to count too?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Transform your roof into a power plant. Get a personalized proposal within 24 hours.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl hover:-translate-y-1 transition shadow-xl">
                            Request Proposal
                        </a>
                        <a href={`https://wa.me/${SITE.whatsapp}`} className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition">
                            See More Work
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;