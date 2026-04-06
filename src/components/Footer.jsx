import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { SITE } from '../data/siteData';

const Footer = () => (
    <footer className="bg-secondary text-gray-400 pt-12 pb-6 px-6 mt-auto relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4 col-span-1 lg:col-span-1">
                <Link to="/" className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-primary" />
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-black text-white tracking-tighter">
                            D.<span className="text-primary italic">Energy</span>
                        </span>
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Go Green With Solar Power</span>
                    </div>
                </Link>
                <p className="text-gray-500 leading-relaxed text-xs">
                    {SITE.city}'s trusted solar I&C contractor. Residential & commercial all types solar project installation. 10+ years of excellence.
                </p>
                {/* MSME & GST Badge */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">MSME</span>
                        <span className="text-[10px] text-gray-400 font-bold">{SITE.msme}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">GSTIN</span>
                        <span className="text-[10px] text-gray-400 font-bold">{SITE.gstin}</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    {[
                        { icon: Facebook, href: SITE.facebook },
                        { icon: Instagram, href: SITE.instagram },
                        { icon: Youtube, href: SITE.youtube }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <social.icon size={15} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
                <h4 className="text-white text-sm font-black uppercase tracking-widest">Quick Navigation</h4>
                <div className="flex flex-col gap-2">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'About Us', path: '/about' },
                        { name: 'Our Services', path: '/services' },
                        { name: 'Latest Projects', path: '/projects' },
                        { name: 'Contact Support', path: '/contact' }
                    ].map((link, i) => (
                        <Link key={i} to={link.path} className="hover:text-primary transition-colors flex items-center justify-between group py-0.5 border-b border-white/5 w-full text-sm">
                            <span>{link.name}</span>
                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
                <h4 className="text-white text-sm font-black uppercase tracking-widest">Get In Touch</h4>
                <div className="space-y-4">
                    <div className="flex gap-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <Phone size={14} />
                        </div>
                        <div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Call Us</div>
                            <a href={`tel:${SITE.phone}`} className="text-gray-300 font-bold hover:text-primary transition-colors text-xs block">{SITE.phoneDisplay}</a>
                            <a href={`tel:${SITE.phone2}`} className="text-gray-300 font-bold hover:text-primary transition-colors text-xs block">{SITE.phone2Display}</a>
                        </div>
                    </div>
                    <div className="flex gap-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <Mail size={14} />
                        </div>
                        <div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Email</div>
                            <a href={`mailto:${SITE.email}`} className="text-gray-300 font-bold hover:text-primary transition-colors text-xs">{SITE.email}</a>
                        </div>
                    </div>
                    <div className="flex gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <MapPin size={14} />
                        </div>
                        <div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Address</div>
                            <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium leading-relaxed italic text-xs hover:text-primary transition-colors">{SITE.address}</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
                <h4 className="text-white text-sm font-black uppercase tracking-widest">Our Location</h4>
                <div className="rounded-[1.5rem] overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 h-32 border border-white/10">
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
                <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-500 font-bold bg-white/5 px-3 py-2 rounded-xl border border-white/5 hover:text-primary transition-colors block text-center">
                    📍 Open in Google Maps
                </a>
                <div className="text-[9px] text-gray-600 font-bold bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ⏰ {SITE.hours.weekday} | Sun: {SITE.hours.sunday}
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
            <div>
                <p className="text-[10px] text-gray-600 font-bold">
                    © {new Date().getFullYear()} {SITE.name} | {SITE.tagline}
                </p>
                <p className="text-[9px] text-gray-700 mt-0.5">
                    Owner: {SITE.owner} | MSME: {SITE.msme} | GSTIN: {SITE.gstin}
                </p>
            </div>
            <div className="flex gap-6 text-[9px] font-black uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
        </div>
    </footer>
);
export default Footer;