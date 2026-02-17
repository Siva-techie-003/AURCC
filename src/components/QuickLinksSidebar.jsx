import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuickLinksSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { to: '/aicte&moe', label: 'AICTE & MOE CELL', icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> },
        { href: 'https://drive.google.com/file/d/1z8ioKdQN0-fvahtIfneCPJI6i7j-YaFz/view', label: 'MANDATORY DISCLOSURE', icon: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> },
        { to: '/downloads', label: 'DOWNLOADS', icon: <><path d="M12 20h9"></path><path d="M12 4v16m0 0l-4-4m4 4l4-4"></path></> },
        { to: '/antiragging', label: 'ANTIRAGGING CELL', icon: <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> },
        { to: '/posh', label: 'POSH CELL', icon: <><circle cx="12" cy="12" r="10"></circle><path d="M8 15s1.5-2 4-2 4 2 4 2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></> },
    ];

    return (
        <div
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex items-center"
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Expanded Content Panel */}
            <div className={`flex flex-col gap-3 mr-[-1px] transition-all duration-500 ease-in-out transform origin-right ${isOpen ? 'opacity-100 translate-x-0 scale-x-100' : 'opacity-0 translate-x-10 scale-x-0 pointer-events-none'}`}>
                {links.map((link, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-end group/item"
                        style={{ transitionDelay: isOpen ? `${idx * 40}ms` : '0ms' }}
                    >
                        {/* Label */}
                        <div className="mr-3 px-4 py-2 bg-white/95 backdrop-blur-sm text-[rgb(115,25,25)] text-[10px] font-black rounded-xl shadow-xl border border-[rgb(115,25,25)]/20 uppercase tracking-widest whitespace-nowrap transition-all duration-300 transform group-hover/item:-translate-x-1">
                            {link.label}
                        </div>

                        {/* Icon */}
                        {link.to ? (
                            <Link to={link.to} className="w-11 h-11 bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white flex items-center justify-center rounded-xl shadow-xl border border-white/20 transform transition-all duration-300 hover:scale-110 active:scale-95">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">{link.icon}</svg>
                            </Link>
                        ) : (
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white flex items-center justify-center rounded-xl shadow-xl border border-white/20 transform transition-all duration-300 hover:scale-110 active:scale-95">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">{link.icon}</svg>
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Vertical Tab (Like the image) */}
            <div
                onMouseEnter={() => setIsOpen(true)}
                className={`cursor-pointer bg-gradient-to-b from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white px-2 py-6 rounded-l-2xl shadow-[-5px_0_15px_rgba(0,0,0,0.2)] border-y border-l border-white/20 transition-all duration-300 transform ${isOpen ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100 hover:bg-[rgb(140,40,40)]'}`}
            >
                <div className="flex flex-col items-center gap-2">
                    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <span className="font-black text-[11px] uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
                        Quick Links
                    </span>
                </div>
            </div>
        </div>
    );
};

export default QuickLinksSidebar;
