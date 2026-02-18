import React from 'react';
import hodsData from '../assets/HOD.json';
import './HOD.css';

const HOD = () => {
    const hods = hodsData.departments;

    const deptIcons = {
        'CSE': '💻',
        'EEE': '⚡',
        'ECE': '📡',
        'MECH': '🛠️',
        'MBA': '📈',
        'Science and Humanities': '🔬',
        'default': '🎓'
    };

    const getDeptIcon = (dept) => {
        return deptIcons[dept] || deptIcons.default;
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 text-left">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[rgb(90,20,20)] uppercase tracking-tighter font-serif mb-4">Head of the Departments</h1>
                    <div className="flex justify-center">
                        <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)]"></span>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {hods.map((hod, index) => (
                        <div
                            key={index}
                            className="hod-card bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center border border-[rgb(200,120,120)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-fadeInUp"
                        >
                            <div className="w-full h-64 bg-[rgb(220,140,140)]/50 flex justify-center items-center relative overflow-hidden group-hover:bg-[rgb(115,40,40)]/5 transition-colors">
                                {/* Decorative background circle */}
                                <div className="absolute w-48 h-48 bg-white rounded-full transition-transform duration-1000 group-hover:scale-150 group-hover:rotate-12"></div>
                                <img
                                    src={`/${hod.photo}`}
                                    alt={hod.name}
                                    className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-2xl z-10 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="w-full bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-8 text-center flex flex-col items-center border-t-4 border-[rgb(140,60,60)]">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2 leading-tight">{hod.name}</h2>
                                <div className="h-0.5 w-10 bg-[rgb(140,60,60)] mb-4 rounded-full opacity-60"></div>

                                <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 flex items-center gap-3 backdrop-blur-sm group-hover:bg-[rgb(115,40,40)] transition-colors">
                                    <span className="text-xl font-bold">{getDeptIcon(hod.department)}</span>
                                    <span className="text-sm font-black text-[rgb(240,220,220)] uppercase tracking-widest leading-none">{hod.department}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HOD;
