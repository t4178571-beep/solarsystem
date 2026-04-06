import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SITE } from '../data/siteData';

const Contact = () => {
    const [status, setStatus] = useState(null);

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const msg = e.target.message?.value || 'Interested in Solar';
        const formattedMsg = `New Inquiry from Website:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${msg}`;
        window.open(`https://wa.me/${SITE.whatsapp}?text=${formattedMsg}`);
        setStatus('Form sent successfully!');
    };

    return (
        <div className="animate-in fade-in duration-700">
            {/* Page Hero */}
            <section className="bg-secondary py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                        Contact <span className="text-primary italic">D.Energy</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to switch to solar? Our experts are here to guide you every step of the way.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-lightBg">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
                    {/* Left: Info Cards */}
                    <div className="space-y-6">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm">Inquiry Support</div>
                        <h2 className="text-4xl font-extrabold text-secondary leading-tight">
                            Let's Power Your Future <br /> Together!
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-5 pt-4">
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 hover:border-primary transition duration-500 group">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Call Us</h4>
                                <a href={`tel:${SITE.phone}`} className="text-lg font-black text-secondary hover:text-primary transition-colors block">{SITE.phoneDisplay}</a>
                                <a href={`tel:${SITE.phone2}`} className="text-lg font-black text-secondary hover:text-primary transition-colors block">{SITE.phone2Display}</a>
                            </div>

                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 hover:border-primary transition duration-500 group">
                                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all">
                                    <MessageCircle size={20} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">WhatsApp Us</h4>
                                <a href={`https://wa.me/${SITE.whatsapp}`} className="text-lg font-black text-secondary hover:text-green-500 transition-colors">Instant Chat</a>
                            </div>

                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 hover:border-primary transition duration-500 group sm:col-span-2">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email Us</h4>
                                <a href={`mailto:${SITE.email}`} className="text-lg font-black text-secondary hover:text-primary transition-colors">{SITE.email}</a>
                            </div>
                        </div>

                        <div className="flex bg-secondary p-6 rounded-[2rem] text-white gap-5 items-center shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16" />
                            <Clock className="text-primary shrink-0 transition-transform group-hover:rotate-45" size={36} />
                            <div>
                                <h4 className="font-bold text-base mb-1 uppercase tracking-[0.2em] text-primary">Working Hours</h4>
                                <p className="text-gray-400 text-sm">{SITE.hours.weekday} <br /> Sunday: {SITE.hours.sunday}</p>
                            </div>
                        </div>

                        {/* MSME & GST info card */}
                        <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-lg">
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Business Registration</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                                    <span className="text-xs font-black text-gray-400 uppercase">MSME</span>
                                    <span className="text-xs font-bold text-secondary">{SITE.msme}</span>
                                </div>
                                <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                                    <span className="text-xs font-black text-gray-400 uppercase">GSTIN</span>
                                    <span className="text-xs font-bold text-secondary">{SITE.gstin}</span>
                                </div>
                                <div className="flex justify-between items-center py-1.5">
                                    <span className="text-xs font-black text-gray-400 uppercase">Owner</span>
                                    <span className="text-xs font-bold text-secondary">{SITE.owner}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 shadow-gray-300/50">
                        <h3 className="text-2xl font-black text-secondary mb-2">Request a Site Survey</h3>
                        <p className="text-gray-500 mb-8 text-sm">Fill in your details and our solar expert will contact you shortly.</p>

                        <form onSubmit={handleWhatsApp} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                                <input name="name" type="text" placeholder="Aapka Naam" className="w-full p-4 rounded-[1.5rem] bg-gray-50 border border-gray-100 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-normal" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Phone Number</label>
                                <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full p-4 rounded-[1.5rem] bg-gray-50 border border-gray-100 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-normal" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">Message / Requirement</label>
                                <textarea name="message" rows="4" placeholder="How many kW do you need?" className="w-full p-4 rounded-[1.5rem] bg-gray-50 border border-gray-100 outline-none focus:border-primary focus:bg-white transition-all font-bold placeholder:font-normal resize-none"></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-orange-600 text-white p-5 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 transition shadow-xl shadow-orange-900/30 group">
                                <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                                Submit on WhatsApp
                            </button>
                            {status && <div className="text-center text-green-500 font-bold flex items-center justify-center gap-2 animate-bounce mt-4"><CheckCircle2 /> {status}</div>}
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Location</div>
                        <h2 className="text-4xl font-extrabold text-secondary mb-4 leading-tight">Visit Our Office</h2>
                        <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 text-gray-500 font-bold hover:text-primary transition-colors">
                            <MapPin className="text-primary" /> {SITE.address}
                        </a>
                    </div>
                    <div className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 grayscale hover:grayscale-0 transition duration-1000">
                        <iframe
                            src={SITE.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="D.Energy Location"
                        />
                    </div>
                    <div className="text-center mt-6">
                        <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition shadow-lg">
                            <MapPin size={18} /> Open in Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;