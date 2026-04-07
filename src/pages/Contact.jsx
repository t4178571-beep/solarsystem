import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SITE } from '../data/siteData';

const Contact = () => {
    const [status, setStatus] = useState(null);

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value; // Naya Email Field
        const msg = e.target.message?.value || 'Interested in Solar';

        const formattedMsg = `New Inquiry from Website:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${msg}`;

        window.open(`https://wa.me/${SITE.whatsapp}?text=${formattedMsg}`);
        setStatus('Form sent successfully!');
    };

    return (
        <div className="animate-in fade-in duration-500">
            {/* Page Hero */}
            <section className="py-24 px-6 relative overflow-hidden min-h-[50vh] flex items-center">
                {/* Background Image with Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: "url('/landing/solar-ine 3.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                
                <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                        Let's Talk <br />
                        <span className="text-primary italic">Solar Energy</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
                        Ready to switch to solar? Our experts are here to guide you every step of the way. Reach out today for a cleaner tomorrow.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

                    {/* Left: Info Cards */}
                    <div className="space-y-6">
                        <div className="text-primary font-bold uppercase tracking-wider text-xs">Inquiry Support</div>
                        <h2 className="text-3xl font-bold text-secondary leading-tight">
                            Let's Power Your Future Together!
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            {/* Phone Card */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition duration-300">
                                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                                    <Phone size={18} />
                                </div>
                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Call Us</h4>
                                <a href={`tel:${SITE.phone}`} className="text-md font-bold text-secondary hover:text-primary transition-colors block">{SITE.phoneDisplay}</a>
                                <a href={`tel:${SITE.phone2}`} className="text-md font-bold text-secondary hover:text-primary transition-colors block">{SITE.phone2Display}</a>
                            </div>

                            {/* WhatsApp Card */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-green-500/50 transition duration-300">
                                <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center text-green-500 mb-3">
                                    <MessageCircle size={18} />
                                </div>
                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">WhatsApp</h4>
                                <a href={`https://wa.me/${SITE.whatsapp}`} className="text-md font-bold text-secondary hover:text-green-600 transition-colors">Instant Chat</a>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition duration-300 sm:col-span-2">
                                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                                    <Mail size={18} />
                                </div>
                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Email Us</h4>
                                <a href={`mailto:${SITE.email}`} className="text-md font-bold text-secondary hover:text-primary transition-colors">{SITE.email}</a>
                            </div>
                        </div>

                        {/* Working Hours - Cleaned up */}
                        <div className="flex bg-secondary p-5 rounded-xl text-white gap-4 items-center shadow-md">
                            <Clock className="text-primary shrink-0" size={28} />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Working Hours</h4>
                                <p className="text-gray-400 text-xs">{SITE.hours.weekday} | Sunday: {SITE.hours.sunday}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form - UI Cleaned */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-secondary mb-1">Request a Site Survey</h3>
                        <p className="text-gray-500 mb-6 text-xs">Fill in your details and we'll get back to you.</p>

                        <form onSubmit={handleWhatsApp} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Full Name</label>
                                <input name="name" type="text" placeholder="Your name" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:bg-white transition-all text-sm" required />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                                    <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:bg-white transition-all text-sm" required />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Email Address</label>
                                    <input name="email" type="email" placeholder="email@example.com" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:bg-white transition-all text-sm" required />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Requirement</label>
                                <textarea name="message" rows="3" placeholder="How many kW do you need?" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:bg-white transition-all text-sm resize-none"></textarea>
                            </div>

                            <button className="w-full bg-primary hover:bg-orange-600 text-white p-4 rounded-lg font-bold text-md flex items-center justify-center gap-2 transition shadow-md shadow-orange-900/10">
                                <Send size={18} />
                                Submit on WhatsApp
                            </button>

                            {status && <div className="text-center text-green-600 font-bold text-sm flex items-center justify-center gap-2 mt-2"><CheckCircle2 size={16} /> {status}</div>}
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section - Simplified */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Our Location</div>
                        <h2 className="text-3xl font-bold text-secondary mb-3">Visit Our Office</h2>
                        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                            <MapPin size={16} className="text-primary" /> {SITE.address}
                        </p>
                    </div>
                    <div className="h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
                        <iframe
                            src={SITE.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="D.Energy Location"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;