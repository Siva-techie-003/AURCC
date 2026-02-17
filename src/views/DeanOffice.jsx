import React from 'react';
import deanOfficeData from '../assets/deanoff.json';
import './DeanOffice.css';

const DeanOffice = () => {
    const staffMember = (Array.isArray(deanOfficeData?.['DEAN OFFICE STAFF']) && deanOfficeData['DEAN OFFICE STAFF'].length > 0)
        ? deanOfficeData['DEAN OFFICE STAFF'][0]
        : { name: 'Staff Information Not Available', position: 'N/A', image: 'placeholder.png' };

    return (
        <div className="bg-gradient-to-br from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-white min-h-screen py-8 sm:py-12 lg:py-14 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[rgb(100,25,25)] tracking-wide text-center uppercase mb-4">Dean Office Staff</h1>
                <div className="flex justify-center mb-10">
                    <span className="block w-24 sm:w-32 h-1.5 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)] animate-glow-bar"></span>
                </div>

                <div className="flex justify-center">
                    <div className="dean-card bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center border border-[rgb(200,120,120)] transition-all duration-300 w-full max-w-[400px] group">
                        <div className="w-full flex justify-center py-10 bg-[rgb(220,140,140)]/50">
                            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white transition-transform group-hover:scale-105">
                                <img
                                    src={`/${staffMember.image}`}
                                    alt={staffMember.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-4 flex flex-col items-center text-center">
                            <h2 className="text-lg lg:text-xl xl:text-2xl font-black text-white tracking-widest uppercase mb-1">{staffMember.name}</h2>
                            <div className="h-1 w-12 bg-[rgb(140,60,60)] rounded-full mb-2"></div>
                            <p className="text-sm lg:text-base xl:text-lg text-[rgb(200,120,120)] font-bold tracking-wide uppercase opacity-90">{staffMember.position || 'Position not available'}</p>
                        </div>
                        <div className="p-6 w-full text-center">
                            <p className="text-sm text-gray-500 italic">Office of the Dean, Regional Campus Coimbatore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeanOffice;
