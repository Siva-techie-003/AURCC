import React from 'react';
import administrationData from '../assets/administrator.json';
import './Registrar.css';

const Registrar = () => {
    const administrators = administrationData.administrator;

    const getPhotoPath = (photo) => {
        return photo ? `/${photo}` : '/default-image-path.jpg';
    };

    return (
        <div className="bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen py-12 sm:py-20 px-4 text-left">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <header className="mb-16 text-center animate-fadeIn">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-indigo-950 uppercase tracking-tighter font-serif mb-4">University Leadership</h1>
                    <div className="flex justify-center">
                        <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400"></span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                    {administrators.map((member, index) => (
                        <div
                            key={index}
                            className="admin-card bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col items-center border border-indigo-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-fadeInUp"
                        >
                            <div className="w-full h-64 sm:h-72 lg:h-80 bg-gray-50 flex justify-center items-end relative overflow-hidden group-hover:bg-indigo-50/50 transition-colors">
                                {/* Decorative background circle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
                                <img
                                    src={getPhotoPath(member.image)}
                                    alt={member.name}
                                    className="relative h-[95%] w-auto object-contain z-10 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="bg-gradient-to-r from-indigo-900 to-blue-800 p-6 sm:p-8 w-full text-center flex flex-col justify-center min-h-[160px] border-t-4 border-indigo-400">
                                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase mb-2 tracking-tight">{member.name}</h2>
                                <div className="h-0.5 w-10 bg-blue-400 mx-auto mb-3 rounded-full opacity-60"></div>
                                <p className="text-sm sm:text-base font-bold text-blue-100 uppercase tracking-widest opacity-90">{member.position}</p>
                                <p className="text-[10px] lg:text-xs font-bold text-indigo-200 mt-2 uppercase tracking-wide opacity-80">{member.university}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Registrar;
