import React from 'react';
import { ShieldCheck, TrendingUp, Leaf, Award, CheckCircle2 } from 'lucide-react';
import { SITE, STATS, CERTIFICATIONS } from '../data/siteData';

const ValueCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
    </div>
);

const About = () => {
    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="bg-secondary py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
                        Since 2015
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                        10 Years Powering <br />
                        <span className="text-primary italic">Gujarat with Solar</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From a small team to 500+ projects — D.Energy makes solar simple, affordable, and reliable for every home and business.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition duration-700 mx-4" />
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                            alt="Our Story"
                            className="relative rounded-[3rem] shadow-2xl z-10"
                        />
                    </div>
                    <div>
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Story</div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                            Started Small. <br />
                            <span className="text-primary">Grown Strong.</span>
                        </h2>
                        <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                            <p>
                                {SITE.name} was founded in {SITE.city} by {SITE.owner}. We started with a passionate team and a mission to make solar energy accessible for every Indian family and business.
                            </p>
                            <p>
                                Today we are MSME-registered, MNRE-empaneled, DISCOM-approved, and handle everything from site survey to subsidy paperwork to lifetime maintenance. Our specialty is I&C (Installation & Commissioning) work for residential and commercial solar projects.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                            {[
                                'MNRE Empaneled EPC',
                                'Certified I&C Team',
                                'MSME Registered',
                                'GST Registered',
                                'PM Surya Ghar Partner',
                                'DISCOM Approved Vendor'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-secondary font-bold text-sm">
                                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MSME & GST Section */}
            <section className="py-10 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-secondary rounded-[2rem] p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                        <div className="md:col-span-1 relative z-10">
                            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Registered & Verified</div>
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">Business <span className="text-primary italic">Credentials</span></h3>
                        </div>
                        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 relative z-10">
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                                <div className="text-xs font-black text-primary uppercase tracking-widest mb-1">MSME Registration</div>
                                <div className="text-white font-black text-base">{SITE.msme}</div>
                                <div className="text-gray-400 text-xs mt-1">Udyam Registration Certificate</div>
                            </div>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                                <div className="text-xs font-black text-primary uppercase tracking-widest mb-1">GST Registration</div>
                                <div className="text-white font-black text-base">{SITE.gstin}</div>
                                <div className="text-gray-400 text-xs mt-1">Goods & Services Tax Identification</div>
                            </div>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                                <div className="text-xs font-black text-primary uppercase tracking-widest mb-1">Owner / Proprietor</div>
                                <div className="text-white font-black text-base">{SITE.owner}</div>
                                <div className="text-gray-400 text-xs mt-1">D.Energy Solar Systems</div>
                            </div>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                                <div className="text-xs font-black text-primary uppercase tracking-widest mb-1">Registered Address</div>
                                <div className="text-white font-bold text-sm leading-snug">{SITE.address}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-secondary py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                    {STATS.map((s, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition">
                                {s.num}{s.unit}
                            </div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Core Values</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
                            What We Stand For
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ValueCard icon={ShieldCheck} title="Quality First" desc="Only Tier-1, BIS-certified panels. No shortcuts, ever." />
                        <ValueCard icon={TrendingUp} title="Honest Pricing" desc="Transparent quotes. No hidden charges. No false promises." />
                        <ValueCard icon={Leaf} title="Go Green" desc="Every system reduces carbon emissions. Cleaner India, together." />
                        <ValueCard icon={Award} title="Lifetime Support" desc="We're with you from day 1 to year 25 and beyond." />
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 px-6 bg-secondary relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Trusted & Verified</div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            Our Certifications & Partners
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {CERTIFICATIONS.map((c, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center hover:bg-white/10 transition group">
                                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-500 inline-block drop-shadow-lg">
                                    {c.ico}
                                </div>
                                <h4 className="text-white font-black block mb-1 text-sm">{c.title}</h4>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">{c.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;