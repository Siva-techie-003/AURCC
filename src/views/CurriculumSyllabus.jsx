import React from 'react';
import data from '../assets/curriculum_syllabus.json';
import SyllabusCard from '../components/SyllabusCard';
import './CurriculumSyllabus.css';

const CurriculumSyllabus = () => {
    const SectionHeader = ({ title }) => (
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-indigo-900 pb-8 mb-12 gap-6 animate-fadeInUp">
            <div className="max-w-xl">
                <h2 className="text-2xl lg:text-4xl font-black text-indigo-950 uppercase tracking-tight">{title}</h2>
                <div className="h-1.5 w-20 bg-blue-500 mt-4 rounded-full"></div>
            </div>
        </header>
    );

    return (
        <div className="flex-grow bg-gray-50 min-h-screen text-left">
            {/* Hero section */}
            <section className="relative w-full h-48 sm:h-60 md:h-80 lg:h-[45vh] overflow-hidden flex items-center justify-center">
                <img
                    src="/syllabus.webp"
                    alt="Curriculum & Syllabus"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-indigo-950/80"></div>
                <div className="relative z-10 text-center animate-fadeIn px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">Syllabus</h1>
                    <p className="text-base sm:text-lg lg:text-xl text-blue-200 font-bold max-w-3xl mx-auto opacity-90 leading-tight">Explore the detailed academic structure for all our programs.</p>
                </div>
            </section>

            <main className="max-w-7xl mx-auto py-16 px-4 space-y-24">
                {/* UG Section */}
                <section>
                    <SectionHeader title="UG Curriculum" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {(Array.isArray(data?.['UG programmes']) ? data['UG programmes'] : []).map((programme, idx) => (
                            <SyllabusCard
                                key={`ug-${idx}`}
                                title={programme['Curriculum & Syllabus']}
                                link={programme['Link']}
                                index={programme['S.No']}
                            />
                        ))}
                    </div>
                </section>

                {/* PG Section */}
                <section>
                    <SectionHeader title="PG Curriculum" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {(Array.isArray(data?.['PG programmes']) ? data['PG programmes'] : []).map((programme, idx) => (
                            <SyllabusCard
                                key={`pg-${idx}`}
                                title={programme['Curriculum & Syllabus']}
                                link={programme['Link']}
                                index={programme['S.No']}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CurriculumSyllabus;
