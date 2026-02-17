import React, { useState, useEffect, useRef } from 'react';
import content from '../assets/student_affairs.json';
import './StudentAffairs.css';

const StudentAffairs = () => {
    const backgroundImage = '/studentaffairs.webp';
    const [currentSection, setCurrentSection] = useState('description');
    const sectionRefs = {
        description: useRef(null),
        reAdmission: useRef(null),
        scholarships: useRef(null),
        fees: useRef(null),
        staff: useRef(null),
        contact: useRef(null)
    };

    const sections = [
        { key: 'description', name: 'Description' },
        { key: 'reAdmission', name: 'Re-Admission' },
        { key: 'scholarships', name: 'Scholarships' },
        { key: 'fees', name: 'Fees Details' },
        { key: 'staff', name: 'Administration Staff' },
        { key: 'contact', name: 'Contact Us' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            for (const section of sections) {
                const el = sectionRefs[section.key].current;
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom > 200) {
                        setCurrentSection(section.key);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (key) => {
        const el = sectionRefs[key].current;
        if (el) {
            const offset = el.offsetTop - 100; // Adjust for sticky header
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-left">
            {/* Hero section */}
            <section
                className="bg-cover bg-center relative h-64 sm:h-72 md:h-80 lg:h-96"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(115,63,63)]/60 to-[rgb(115,25,25)]/40"></div>
                <div className="container mx-auto h-full flex items-center relative z-10 px-4">
                    <div className="max-w-2xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                            <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">
                                Student Affairs
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed font-medium">
                            The Office of Student Affairs is dedicated to students' academic and personal success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs - Modern floating design */}
            <div className="sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-full -mt-6 py-2 px-3 flex justify-center overflow-x-auto no-scrollbar gap-2 border border-[rgb(220,140,140)]">
                        {sections.map((section) => (
                            <button
                                key={section.key}
                                onClick={() => scrollToSection(section.key)}
                                className={`font-bold px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${currentSection === section.key
                                    ? 'bg-[rgb(115,40,40)] text-white shadow-md'
                                    : 'text-gray-700 hover:bg-[rgb(220,140,140)] hover:text-[rgb(115,40,40)]'
                                    }`}
                            >
                                {section.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content sections */}
            <main className="max-w-7xl mx-auto py-8 lg:py-12 px-4 space-y-12">
                {/* Description Section */}
                <div id="description" ref={sectionRefs.description} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Description</h2>
                        <span className="text-2xl opacity-50">ℹ️</span>
                    </div>
                    <div className="p-8 space-y-4">
                        {(Array.isArray(content?.description) ? content.description : []).map((item, index) => (
                            <p key={index} className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Re-Admission Section */}
                <div id="reAdmission" ref={sectionRefs.reAdmission} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Re-Admission</h2>
                        <span className="text-2xl opacity-50">↩️</span>
                    </div>
                    <div className="p-8">
                        <div className="bg-[rgb(220,140,140)]/50 rounded-2xl p-6 border border-[rgb(200,120,120)] text-[rgb(100,25,25)] font-bold text-base lg:text-lg leading-relaxed italic whitespace-pre-line">
                            {content?.['Re-Admission'] || 'Re-admission information will be updated soon.'}
                        </div>
                    </div>
                </div>

                {/* Scholarships Section */}
                <div id="scholarships" ref={sectionRefs.scholarships} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Scholarships</h2>
                        <span className="text-2xl opacity-50">💰</span>
                    </div>
                    <div className="p-8">
                        <div className="mb-6 p-4 bg-[rgb(220,140,140)] rounded-xl border-l-4 border-[rgb(115,40,40)]">
                            <p className="text-lg lg:text-xl font-bold text-[rgb(100,25,25)]">{content?.Scholarship?.description || 'Scholarship information will be updated soon.'}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(Array.isArray(content?.Scholarship?.['list of scholarships']) ? content.Scholarship['list of scholarships'] : []).map((scholarship, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[rgb(160,80,80)] transition-colors">
                                    <span className="bg-[rgb(200,120,120)] text-[rgb(110,35,35)] w-8 h-8 rounded-full flex items-center justify-center font-bold">★</span>
                                    <span className="text-base font-semibold text-gray-800">{scholarship}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fees Section */}
                <div id="fees" ref={sectionRefs.fees} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Fees Details</h2>
                        <span className="text-2xl opacity-50">🧾</span>
                    </div>
                    <div className="p-8">
                        <a
                            href={content?.['fees details'] || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(115,40,40)] text-white font-bold rounded-2xl hover:bg-[rgb(110,35,35)] transition-all shadow-md group"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            View Detailed Fee Structure
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>

                {/* Staff Section */}
                <div id="staff" ref={sectionRefs.staff} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 flex justify-between items-center text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Administration Staff</h2>
                        <span className="text-2xl opacity-50">👥</span>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(Array.isArray(content?.['Office bearers']?.['Administration staff']) ? content['Office bearers']['Administration staff'] : []).map((staff, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all group"
                                >
                                    <div className="relative mb-4">
                                        <img
                                            src={staff.Image}
                                            alt={staff['Name of the Staff']}
                                            className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:rotate-6 transition-transform"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-[rgb(115,40,40)] text-white p-1 rounded-lg text-xs font-bold shadow-sm">
                                            {staff['S.No']}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-[rgb(100,25,25)] uppercase tracking-tight">{staff['Name of the Staff']}</h3>
                                    <div className="h-0.5 w-12 bg-[rgb(180,100,100)] my-2"></div>
                                    <p className="text-sm font-bold text-gray-600 uppercase mb-4">{staff['Name of the Post']}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div id="contact" ref={sectionRefs.contact} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all text-center">
                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 px-8 text-white">
                        <h2 className="text-xl lg:text-2xl font-bold">Contact Us</h2>
                    </div>
                    <div className="p-8">
                        <div className="max-w-2xl mx-auto bg-[rgb(220,140,140)]/50 p-8 rounded-3xl border border-[rgb(200,120,120)] shadow-inner">
                            <p className="text-lg lg:text-xl font-bold text-[rgb(100,25,25)] whitespace-pre-line leading-loose">
                                {content?.['contact us'] || 'Contact information will be updated soon.'}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentAffairs;
