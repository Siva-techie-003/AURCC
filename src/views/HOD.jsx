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
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-white py-12 px-4 text-left">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-indigo-950 uppercase tracking-tighter font-serif mb-4">Head of the Departments</h1>
                    <div className="flex justify-center">
                        <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 animate-glow-bar"></span>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {hods.map((hod, index) => (
                        <div
                            key={index}
                            className="hod-card bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center border border-indigo-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-fadeInUp"
                        >
                            <div className="w-full h-64 bg-indigo-50/50 flex justify-center items-center relative overflow-hidden group-hover:bg-indigo-600/5 transition-colors">
                                {/* Decorative background circle */}
                                <div className="absolute w-48 h-48 bg-white rounded-full transition-transform duration-1000 group-hover:scale-150 group-hover:rotate-12"></div>
                                <img
                                    src={`/${hod.photo}`}
                                    alt={hod.name}
                                    className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-2xl z-10 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="w-full bg-gradient-to-r from-indigo-900 to-blue-800 p-8 text-center flex flex-col items-center border-t-4 border-indigo-400">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2 leading-tight">{hod.name}</h2>
                                <div className="h-0.5 w-10 bg-blue-400 mb-4 rounded-full opacity-60"></div>

                                <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 flex items-center gap-3 backdrop-blur-sm group-hover:bg-blue-600 transition-colors">
                                    <span className="text-xl font-bold">{getDeptIcon(hod.department)}</span>
                                    <span className="text-sm font-black text-blue-50 uppercase tracking-widest leading-none">{hod.department}</span>
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
