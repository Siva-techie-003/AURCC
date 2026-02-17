import React from 'react';
import './SyllabusCard.css';

const SyllabusCard = ({ title, link }) => {
    const iconMap = {
        'COMPUTER SCIENCE': '💻',
        'ELECTRONICS': '📡',
        'ELECTRICAL': '⚡',
        'MECHANICAL': '🛠️',
        'ARTIFICIAL INTELLIGENCE': '🤖',
        'VLSI': '🔲',
        'MBA': '📈',
        'BUSINESS ANALYTICS': '📊',
    };

    const getIcon = (title) => {
        if (title.includes('VLSI')) return iconMap['VLSI'];
        if (title.includes('COMPUTER')) return iconMap['COMPUTER SCIENCE'];
        if (title.includes('ELECTRONICS') && !title.includes('ELECTRICAL')) return iconMap['ELECTRONICS'];
        if (title.includes('ELECTRICAL')) return iconMap['ELECTRICAL'];
        if (title.includes('MECHANICAL')) return iconMap['MECHANICAL'];
        if (title.includes('ARTIFICIAL INTELLIGENCE')) return iconMap['ARTIFICIAL INTELLIGENCE'];
        if (title.includes('BUSINESS ANALYTICS')) return iconMap['BUSINESS ANALYTICS'];
        if (title.includes('MBA')) return iconMap['MBA'];
        return '📄';
    };

    const openLink = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="bg-white/90 backdrop-blur-lg border border-[rgb(200,120,120)] rounded-3xl shadow-xl transition-all duration-300 px-8 py-10 flex flex-col items-center min-h-[300px] hover:-translate-y-2 hover:shadow-2xl animate-fade-scale text-center mx-auto my-4 max-w-md w-full group">
            <div className="flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-emerald-500 to-teal-400 w-20 h-20 mb-8 group-hover:rotate-12 transition-transform">
                <span className="text-4xl text-white">{getIcon(title)}</span>
            </div>
            <h3 className="text-xl font-extrabold text-[rgb(90,20,20)] uppercase tracking-tight mb-4 leading-tight">{title}</h3>
            <button
                onClick={openLink}
                className="inline-block w-full px-8 py-3 rounded-2xl bg-[rgb(115,40,40)] text-white font-black shadow-lg hover:bg-yellow-400 hover:text-[rgb(100,25,25)] transition-all active:scale-95 mt-auto uppercase tracking-widest text-xs"
            >
                View Syllabus
            </button>
        </div>
    );
};

export default SyllabusCard;
