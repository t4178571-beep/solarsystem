import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Zap, ShieldCheck, Star, ArrowRight, Phone, ChevronLeft, ChevronRight, Plus, CheckCircle2, TrendingDown } from 'lucide-react';
import { SLIDES, STATS, SERVICES, WHY_US, STEPS, GALLERY, REVIEWS, FAQS, SITE } from '../data/siteData';

// --- Components ---

const HeroSlider = () => {
    const [cur, setCur] = useState(0);
    const timerRef = useRef();

    const go = n => setCur(p => (n + SLIDES.length) % SLIDES.length);
    const startAuto = () => { timerRef.current = setInterval(() => setCur(p => (p + 1) % SLIDES.length), 6000); };
    const stopAuto = () => clearInterval(timerRef.current);

    useEffect(() => {
        startAuto();
        return stopAuto;
    }, []);

    const s = SLIDES[cur];

    return (
        /* Mobile par height [30vh] aur min-h reset kiya hai, desktop par wahi [80vh] rakha hai */
        <section
            className="relative bg-secondary overflow-hidden"
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
        >
            {/* MOBILE: aspect-[16/9] (Ya jo aapki image ka ratio ho) use kiya hai height ki jagah.
               DESKTOP: md:h-[80vh] wahi rahega.
            */}
            <div
                className="flex transition-transform duration-1000 ease-in-out aspect-[16/9] md:aspect-auto md:h-[80vh]"
                style={{ transform: `translateX(-${cur * 100}%)` }}
            >
                {SLIDES.map((sl, i) => (
                    <div key={i} className="w-full h-full flex-shrink-0 relative">
                        {/* Mobile par overlay thoda light rakha hai takki image clear dikhe */}
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/20 to-transparent z-10 md:via-secondary/40" />

                        <img
                            src={sl.img}
                            alt={sl.title}
                            className="w-full h-full object-cover md:object-center"
                        /* object-cover ke sath aspect ratio puri image dikhayega */
                        />
                    </div>
                ))}
            </div>

            {/* Content: Mobile par isko absolute karke bottom par rakha hai ya center mein */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 max-w-7xl mx-auto">
                <div className="animate-in fade-in slide-in-from-left duration-1000">
                    <h1 className="text-xl md:text-7xl font-extrabold text-white leading-tight mb-2 md:mb-6 drop-shadow-lg">
                        {s.title}<br />
                        <span className="text-primary italic">{s.em}</span>
                    </h1>

                    {/* Buttons ko mobile par thoda aur compact kiya hai */}
                    <div className="flex flex-row gap-2 md:gap-4 mt-2">
                        <Link to={s.ctaHref} className="bg-primary text-white px-3 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-[10px] md:text-lg flex items-center gap-1">
                            {s.cta} <ArrowRight size={12} className="md:w-5 md:h-5" />
                        </Link>
                        <a href={`tel:${SITE.phone}`} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-[10px] md:text-lg flex items-center gap-1">
                            <Phone size={12} className="md:w-5 md:h-5" /> <span className="md:inline">Call</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Dots: Inko thoda aur niche kiya hai mobile responsive ke liye */}
            <div className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 md:gap-3">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCur(i)}
                        className={`transition-all duration-300 ${i === cur ? 'w-4 md:w-10 bg-primary' : 'w-1.5 md:w-3 bg-white/40'} h-1 md:h-2 rounded-full`}
                    />
                ))}
            </div>
        </section>
    );
};

const StatsSection = () => {
    const [vals, setVals] = useState(STATS.map(() => 0));
    const ref = useRef();
    const done = useRef(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !done.current) {
                done.current = true;
                STATS.forEach((s, i) => {
                    let c = 0;
                    const duration = 2000;
                    const frameRate = 1000 / 60;
                    const totalFrames = duration / frameRate;
                    const step = s.num / totalFrames;

                    const t = setInterval(() => {
                        c = Math.min(c + step, s.num);
                        setVals(v => {
                            const nv = [...v];
                            nv[i] = Math.floor(c);
                            return nv;
                        });
                        if (c >= s.num) clearInterval(t);
                    }, frameRate);
                });
            }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-secondary py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((s, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl md:text-5xl font-black text-primary mb-2 flex items-center justify-center gap-1 group-hover:scale-110 transition">
                                <span>{vals[i]}</span>
                                <span className="text-2xl">{s.unit}</span>
                            </div>
                            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SavingsCalculator = () => {
    const [bill, setBill] = useState(3000);

    const monthlyUnits = bill / 6;
    const recommendedKw = Math.max(1, Math.round(monthlyUnits / 120 * 2) / 2);
    const annualBill = bill * 12;
    const annualSavingLow = Math.round(annualBill * 0.80 / 1000) * 1000;
    const annualSavingHigh = Math.round(annualBill * 0.90 / 1000) * 1000;
    const systemCost = recommendedKw * 50000;
    const paybackYrs = (systemCost / annualSavingHigh || 4).toFixed(1);
    const lifetimeSaving = annualSavingLow * 25;

    const formatINR = (n) => {
        if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
        if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
        return `₹${n.toLocaleString('en-IN')}`;
    };

    const stats = [
        { icon: <Zap size={18} />, label: 'System Size', val: `${recommendedKw} kW`, color: 'text-orange-600', bgColor: 'bg-orange-50' },
        { icon: <TrendingDown size={18} />, label: 'Annual Save', val: formatINR(annualSavingLow), color: 'text-green-600', bgColor: 'bg-green-50' },
        { icon: <Star size={18} />, label: 'Payback', val: `${paybackYrs} Yrs`, color: 'text-blue-600', bgColor: 'bg-blue-50' },
        { icon: <ShieldCheck size={18} />, label: '25Y Total', val: formatINR(lifetimeSaving), color: 'text-purple-600', bgColor: 'bg-purple-50' },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-6 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight">
                        Check Your <span className="text-primary italic">Savings</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">Adjust the slider to see your solar ROI</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-900/5 border border-gray-100">
                        <div className="text-center md:text-left">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Monthly Electricity Bill</div>
                            <div className="text-5xl font-black text-secondary mb-6">₹{bill.toLocaleString('en-IN')}</div>

                            <input
                                type="range" min="500" max="30000" step="500" value={bill}
                                onChange={e => setBill(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary mb-4"
                            />

                            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mb-8">
                                <span>₹500</span>
                                <span className="text-primary">Slide to calculate</span>
                                <span>₹30k</span>
                            </div>

                            <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg shadow-secondary/10 text-sm">
                                Get Free Quote <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-4">
                        {stats.map((s, i) => (
                            <div key={i} className="bg-white p-4 md:p-6 rounded-2xl border border-gray-50 shadow-sm flex flex-col items-center text-center sm:items-start sm:text-left">
                                <div className={`${s.bgColor} ${s.color} p-2.5 rounded-xl mb-3`}>
                                    {s.icon}
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">
                                    {s.label}
                                </div>
                                <div className="text-lg md:text-2xl font-black text-secondary break-all leading-tight">
                                    {s.val}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border rounded-2xl transition-all duration-300 mb-4 ${open ? 'border-primary bg-white shadow-xl' : 'border-gray-200 bg-gray-50 hover:bg-white'}`}>
            <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpen(!open)}
            >
                <span className={`font-bold text-base ${open ? 'text-secondary' : 'text-gray-700'}`}>{q}</span>
                <div className={`p-2 rounded-full transition-all shrink-0 ${open ? 'bg-primary text-white rotate-45' : 'bg-gray-200 text-gray-500'}`}>
                    <Plus size={18} />
                </div>
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100 text-sm">
                    {a}
                </p>
            </div>
        </div>
    );
};

const Home = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % REVIEWS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const city = e.target.city?.value || '';
        const msg = `Solar Inquiry from Website:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*City:* ${city}`;
        window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`);
    };

    return (
        <div className="animate-in fade-in duration-700 overflow-x-hidden">
            <HeroSlider />

            {/* Identity / About Brief */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-block bg-orange-100 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                        ⚡ Solar I&C Experts Since 2015
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight">
                        Gujarat's Trusted Solar <br className="hidden md:block" />
                        <span className="text-primary italic">I&C Contractor</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        D.Energy installs solar panels for homes, businesses & industries — making clean energy simple, affordable, and hassle-free. Residential & commercial all types solar project installation contractor.
                    </p>
                    <div className="pt-2">
                        <Link to="/about" className="text-primary font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all">
                            Read Our Story <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <StatsSection />

            {/* Services */}
            <section className="py-20 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm">What We Do</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Our Specialized Services</h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES.map((s, i) => (
                            <Link
                                to={s.href}
                                key={i}
                                className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="text-3xl mb-4 bg-gray-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {s.icon}
                                </div>
                                <h3 className="text-base font-bold text-secondary mb-2">{s.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm mb-4">{s.desc}</p>
                                <div className="flex items-center text-primary font-bold gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                    View Details <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            {/* <section className="py-20 px-6 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center lg:text-left mb-12">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Trusted by 200+ <span className="text-primary italic">Families & Businesses</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {WHY_US.map((w, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-7 rounded-[2rem] hover:bg-white/10 transition">
                                <div className="text-3xl mb-3 text-primary">{w.icon}</div>
                                <h3 className="text-white font-bold text-base mb-2">{w.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <SavingsCalculator />

            {/* Process */}
            <section className="py-20 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">How it works</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">Hassle-Free 5-Step Process</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
                            {STEPS.map((s, i) => (
                                <div key={i} className="flex lg:flex-col items-center lg:text-center group gap-5 lg:gap-0">
                                    <div className="w-14 h-14 rounded-full bg-primary text-secondary font-black text-xl flex items-center justify-center border-[8px] border-white shadow-xl lg:mb-5 ring-4 ring-orange-50 group-hover:scale-110 transition shrink-0">
                                        {s.no}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-secondary mb-2">{s.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section - Desktop: Row | Mobile: Auto-Slider */}
            <section className="py-20 px-6 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center gap-2 mb-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-4 h-4" alt="G" />
                            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">Google Business Reviews</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight">
                            What Our <span className="text-primary italic">Customers Say</span>
                        </h2>
                    </div>

                    {/* Desktop View: Grid (3 columns) | Mobile View: Slider */}
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out md:grid md:grid-cols-3 md:gap-6 md:translate-x-0"
                            style={{
                                transform: window.innerWidth < 768 ? `translateX(-${index * 100}%)` : 'none'
                            }}
                        >
                            {REVIEWS.map((r, i) => (
                                <div key={i} className="w-full flex-shrink-0 px-2 md:px-0 md:w-auto">
                                    <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all h-full flex flex-col">

                                        {/* Google Header Style */}
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                {r.img ? (
                                                    <img src={r.img} className="w-9 h-9 rounded-full object-cover shadow-inner" alt={r.name} />
                                                ) : (
                                                    <div className="w-9 h-9 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xs shadow-inner uppercase">
                                                        {r.initials || r.name.charAt(0)}
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="font-bold text-secondary text-sm leading-tight">{r.name}</h3>
                                                    <div className="text-blue-500 text-[10px] hover:text-blue-600 transition-colors cursor-pointer">{r.sub}</div>
                                                </div>
                                            </div>
                                            <div className="text-gray-300">
                                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                            </div>
                                        </div>

                                        {/* Stars & Time */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex gap-0.5 text-[#FBBC05]">
                                                {[...Array(r.stars || 5)].map((_, j) => (
                                                    <Star key={j} size={13} fill="currentColor" stroke="none" />
                                                ))}
                                            </div>
                                            <span className="text-gray-400 text-[10px]">{r.time}</span>
                                        </div>

                                        {/* Review Body */}
                                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                                            {r.text}
                                        </p>

                                        {/* Google Footer */}
                                        <div className="flex items-center gap-5 pt-3 border-t border-gray-50">
                                            <button className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold hover:text-secondary">
                                                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                Like
                                            </button>
                                            <button className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold hover:text-secondary">
                                                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots (Mobile Only) */}
                        <div className="flex justify-center gap-2 mt-8 md:hidden">
                            {REVIEWS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setIndex(idx)}
                                    className={`h-1 rounded-full transition-all duration-300 ${index === idx ? "w-6 bg-primary" : "w-1.5 bg-gray-300"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Any Questions?</div>
                        <h2 className="text-4xl font-extrabold text-secondary mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-500 text-sm">Everything you need to know about switching to solar.</p>
                    </div>

                    <div className="space-y-2">
                        {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;