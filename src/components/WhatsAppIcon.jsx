import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE } from '../data/siteData';

const WhatsAppIcon = () => {
    return (
        <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-green-500 text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            title="Chat with us"
        >
            <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
                Hi, Have any Questions? 👋
            </span>
            <MessageCircle size={24} className="md:w-8 md:h-8" />
        </a>
    );
};

export default WhatsAppIcon;