import React from 'react';
import { Phone } from 'lucide-react';
import { SITE } from '../data/siteData';

const CallIcon = () => {
    return (
        <a
            href={`tel:${SITE.phone}`}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[100] bg-blue-600 text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            title="Call Us"
        >
            <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
                Call for Free Quote 📞
            </span>
            <Phone size={24} className="md:w-8 md:h-8" />
        </a>
    );
};

export default CallIcon;
