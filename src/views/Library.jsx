import React, { useState, useEffect } from 'react';
import libraryData from '../assets/library.json';
import './Library.css';

const Library = () => {
    const [activeSection, setActiveSection] = useState('About Library');
    const sections = [
        'About Library',
        'E-journals',
        'Library Resources',
        'Digital Library',
        'Open Access Resources',
        'Library Sections',
        'Faculty'
    ];

    const scrollToSection = (section) => {
        const element = document.getElementById(section.replace(/ /g, ''));
        if (element) {
            const offset = element.offsetTop - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        setActiveSection(section);
    };

    const formatTitle = (str) => {
        return str
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <main className="flex-grow min-h-screen bg-gray-50 text-left">
            {/* Hero Section */}
            <section className="relative w-full h-48 sm:h-60 md:h-80 lg:h-[50vh] overflow-hidden">
                <img src="/library.webp" alt="Library" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                <div className="container mx-auto py-8 text-center relative z-10 px-4 flex flex-col items-center justify-center h-full">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 drop-shadow-lg font-serif text-white animate-fadeInUp">
                        Library
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-sans text-white opacity-90 animate-fadeInUp">
                        Explore our extensive library resources and services, including books, e-journals, and more.
                    </p>
                </div>
            </section>

            {/* Sticky Horizontal Tab Bar */}
            <div className="sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full -mt-6 py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-blue-50">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${activeSection === section
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content sections */}
            <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
                {/* About Library */}
                <section id="AboutLibrary" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6 px-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-white text-center">About Library</h2>
                    </div>
                    <div className="p-8">
                        <p className="text-base lg:text-lg xl:text-xl font-medium text-gray-700 leading-loose text-justify italic">
                            {libraryData.description}
                        </p>
                    </div>
                </section>

                {/* E-journals */}
                <section id="E-journals" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6 px-8 text-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">E-journals & Features</h2>
                    </div>
                    <div className="p-8">
                        <p className="text-base lg:text-lg font-bold text-indigo-900 mb-6 border-l-4 border-indigo-600 pl-4">{libraryData.e_journals.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-indigo-600">★</span> Salient Features
                                </h3>
                                <ul className="space-y-3">
                                    {libraryData.e_journals.library_salient_features.map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-sm lg:text-base text-gray-700 font-medium">
                                            <span className="text-green-500 font-bold">✔</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-indigo-600">🛠</span> Library Services
                                </h3>
                                <ul className="space-y-3">
                                    {libraryData.e_journals.library_services.map((service, i) => (
                                        <li key={i} className="flex gap-3 text-sm lg:text-base text-gray-700 font-medium">
                                            <span className="text-blue-500 font-bold">▶</span> {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Library Resources */}
                <section id="LibraryResources" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6 px-8 text-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold text-center">Library Resources</h2>
                    </div>
                    <div className="p-8">
                        <p className="text-base lg:text-lg font-bold text-gray-700 mb-8 max-w-4xl mx-auto text-center">{libraryData.library_resources.description}</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {Object.entries(libraryData.library_resources.collection).map(([key, value], i) => (
                                <div key={i} className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-md transition-all">
                                    <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">📚</span>
                                    <span className="text-2xl font-black text-indigo-900 mb-1">{value}</span>
                                    <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider">{formatTitle(key)}</span>
                                </div>
                            ))}
                            <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-md transition-all">
                                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">📖</span>
                                <span className="text-2xl font-black text-indigo-900 mb-1">{libraryData.library_resources.journal_binding.volumes}</span>
                                <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-wider">Journal Binding Volumes</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Digital Library */}
                <section id="DigitalLibrary" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6 px-8 text-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Digital Library</h2>
                    </div>
                    <div className="p-8 text-center">
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg lg:text-xl font-bold text-indigo-900 mb-8">{libraryData.digital_library.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center gap-4 group hover:bg-indigo-50 transition-colors">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">🌐</div>
                                    <span className="text-sm lg:text-base font-bold text-gray-800 text-left leading-snug">{libraryData.digital_library.e_resources}</span>
                                </div>
                                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center gap-4 group hover:bg-indigo-50 transition-colors">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">🎞️</div>
                                    <span className="text-sm lg:text-base font-bold text-gray-800 text-left leading-snug">{libraryData.digital_library.multimedia}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Access Resources */}
                <section id="OpenAccessResources" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6 px-8 text-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Open Access Resources</h2>
                    </div>
                    <div className="p-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            {libraryData.open_access_resources.map((resource, i) => (
                                <div key={i} className="px-6 py-4 bg-indigo-50 text-indigo-900 font-bold rounded-2xl border border-indigo-100 flex items-center gap-3 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all">
                                    <span className="text-indigo-400">🔗</span>
                                    {resource}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Library Sections */}
                <section id="LibrarySections" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6 px-8 text-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Library Sections</h2>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(libraryData.library_section).map(([title, content], i) => (
                                <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all text-left">
                                    <h4 className="text-lg font-bold text-indigo-900 mb-3 border-b border-indigo-50 pb-2">{formatTitle(title)}</h4>
                                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed font-medium">{content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Faculty */}
                <section id="Faculty" className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all animate-fadeIn">
                    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6 px-8 text-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Library Team</h2>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {libraryData.faculty.map((faculty, i) => (
                                <div key={i} className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all group">
                                    <div className="relative mb-6">
                                        <img
                                            src={`/${faculty.img}`}
                                            alt={faculty.name}
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl group-hover:rotate-6 transition-transform"
                                        />
                                    </div>
                                    <h4 className="text-xl lg:text-2xl font-black text-indigo-900 mb-1">{faculty.name}</h4>
                                    <div className="h-1 w-12 bg-indigo-200 my-2 rounded-full"></div>
                                    <p className="text-sm lg:text-base font-bold text-gray-500 uppercase tracking-widest">{faculty.designation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Library;
