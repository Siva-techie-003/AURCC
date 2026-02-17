import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ title, intake, icon, description, learnMoreLink, department }) => {
    return (
        <div className="bg-white/90 backdrop-blur-lg border border-[rgb(200,120,120)] rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col items-center min-h-[280px] sm:min-h-[320px] md:min-h-[340px] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl animate-fade-scale text-center mx-auto my-4 max-w-md w-full group">
            <div className="flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-[rgb(115,63,63)] to-[rgb(115,25,25)] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 group-hover:rotate-12 transition-transform">
                <span className="text-2xl sm:text-3xl md:text-4xl text-white">{icon}</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 mb-2 leading-tight uppercase tracking-tight">{title}</h3>
            {department && <div className="text-xs text-[rgb(110,35,35)] font-black uppercase tracking-widest mb-2 opacity-70">{department}</div>}
            <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg min-h-[40px] sm:min-h-[48px] leading-relaxed font-medium">{description}</p>
            <div className="text-xs sm:text-sm text-[rgb(105,30,30)] font-bold mb-6 mt-auto px-4 py-1.5 bg-[rgb(220,140,140)] rounded-full border border-[rgb(200,120,120)]">Intake: {intake}</div>
            <Link to={learnMoreLink} className="inline-block w-full sm:w-auto px-8 py-3 rounded-2xl bg-[rgb(115,40,40)] text-white font-black shadow-lg hover:bg-yellow-400 hover:text-[rgb(100,25,25)] transition-all active:scale-95 uppercase tracking-widest text-xs sm:text-sm">Learn More</Link>
        </div>
    );
};

export default ProgramCard;
