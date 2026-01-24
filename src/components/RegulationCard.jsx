import React from 'react';
import './RegulationCard.css';

const RegulationCard = ({ title, pdf }) => {
    const openPdf = () => {
        window.open(pdf, '_blank');
    };

    return (
        <div className="bg-white/90 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl transition-all duration-300 px-8 py-10 flex flex-col items-center min-h-[300px] hover:-translate-y-2 hover:shadow-2xl animate-fade-scale text-center mx-auto my-4 max-w-md w-full group">
            <div className="flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-indigo-500 to-blue-400 w-20 h-20 mb-8 group-hover:rotate-12 transition-transform">
                <span className="text-4xl">📜</span>
            </div>
            <h3 className="text-xl font-extrabold text-blue-950 uppercase tracking-tight mb-4">{title}</h3>
            <button
                onClick={openPdf}
                className="inline-block w-full px-8 py-3 rounded-2xl bg-blue-600 text-white font-black shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-all active:scale-95 mt-6 uppercase tracking-widest text-xs"
            >
                View Regulations PDF
            </button>
        </div>
    );
};

export default RegulationCard;
