import React from 'react';
import ProgramCard from '../components/ProgramCard';
import data from '../assets/programs_offered.json';
import './ProgramsOffered.css';

const ProgramsOffered = () => {
    const iconMap = {
        'COMPUTER SCIENCE': '💻',
        'ELECTRONICS': '📡',
        'ELECTRICAL': '⚡',
        'MECHANICAL': '🛠️',
        'ARTIFICIAL INTELLIGENCE': '🤖',
        'VLSI': '🔲',
        'MBA': '📈',
        'BUSINESS ANALYTICS': '📊',
        'default': '🎓'
    };

    const getIcon = (course) => {
        course = course.toUpperCase();
        if (course.includes('VLSI')) return iconMap['VLSI'];
        if (course.includes('COMPUTER')) return iconMap['COMPUTER SCIENCE'];
        if (course.includes('ELECTRONICS') && !course.includes('ELECTRICAL')) return iconMap['ELECTRONICS'];
        if (course.includes('ELECTRICAL')) return iconMap['ELECTRICAL'];
        if (course.includes('MECHANICAL')) return iconMap['MECHANICAL'];
        if (course.includes('ARTIFICIAL INTELLIGENCE')) return iconMap['ARTIFICIAL INTELLIGENCE'];
        if (course.includes('BUSINESS ANALYTICS')) return iconMap['BUSINESS ANALYTICS'];
        if (course.includes('MBA')) return iconMap['MBA'];
        return iconMap.default;
    };

    const getDescription = (course) => {
        if (course.includes('VLSI')) return 'Specialized in chip design, microelectronics, and hardware innovation.';
        if (course.includes('COMPUTER')) return 'Learn cutting-edge technologies and software development.';
        if (course.includes('ELECTRONICS') && !course.includes('ELECTRICAL')) return 'Explore communication, embedded systems, and VLSI.';
        if (course.includes('ELECTRICAL')) return 'Power systems, control, and electrical machines.';
        if (course.includes('MECHANICAL')) return 'Study mechanics, thermodynamics, and manufacturing.';
        if (course.includes('ARTIFICIAL INTELLIGENCE')) return 'Machine learning, data analytics, and AI.';
        if (course.includes('BUSINESS ANALYTICS')) return 'Business intelligence, analytics, and data-driven management.';
        if (course.includes('MBA')) return 'Master business administration and leadership.';
        return 'A comprehensive program for future leaders.';
    };

    const getLearnMoreLink = (course) => {
        if (course.includes('VLSI')) return '/departments/ece';
        if (course.includes('COMPUTER')) return '/departments/cse';
        if (course.includes('ELECTRONICS')) return '/departments/ece';
        if (course.includes('ELECTRICAL')) return '/departments/eee';
        if (course.includes('MECHANICAL')) return '/departments/mech';
        if (course.includes('ARTIFICIAL INTELLIGENCE')) return '/departments/cse';
        if (course.includes('MBA')) return '/departments/mba';
        return '/departments';
    };

    const SectionHeader = ({ title }) => (
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-[rgb(100,25,25)] pb-8 mb-12 gap-6 animate-fadeInUp">
            <div className="max-w-xl">
                <h2 className="text-2xl lg:text-4xl font-black text-[rgb(90,20,20)] uppercase tracking-tight">{title}</h2>
                <div className="h-1.5 w-20 bg-[rgb(220,140,140)]0 mt-4 rounded-full"></div>
            </div>
        </header>
    );

    return (
        <div className="flex-grow bg-gray-50 min-h-screen text-left">
            {/* Hero Section */}
            <section className="relative w-full h-48 sm:h-60 md:h-80 lg:h-[45vh] overflow-hidden flex items-center justify-center">
                <img
                    src="/programsoffered.webp"
                    alt="Programs Offered"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[rgb(90,20,20)]/80"></div>
                <div className="relative z-10 text-center animate-fadeIn px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">Academic Programs</h1>
                    <p className="text-base sm:text-lg lg:text-xl text-[rgb(180,100,100)] font-bold max-w-3xl mx-auto opacity-90 leading-tight">Empowering the next generation of engineers and management professionals.</p>
                </div>
            </section>

            <main className="max-w-7xl mx-auto py-16 px-4 space-y-24">
                {/* UG Section */}
                <section>
                    <SectionHeader title="Undergraduate Excellence" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {(Array.isArray(data?.['UG programmes']) ? data['UG programmes'] : []).map((programme, idx) => (
                            <ProgramCard
                                key={`ug-${idx}`}
                                title={programme['Courses Offered']}
                                intake={programme['Intake']}
                                icon={getIcon(programme['Courses Offered'])}
                                description={getDescription(programme['Courses Offered'])}
                                learnMoreLink={getLearnMoreLink(programme['Courses Offered'])}
                            />
                        ))}
                    </div>
                </section>

                {/* PG Section */}
                <section>
                    <SectionHeader title="Postgraduate Mastery" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {(Array.isArray(data?.['PG programmes']) ? data['PG programmes'] : []).map((programme, idx) => (
                            <ProgramCard
                                key={`pg-${idx}`}
                                title={programme['Courses Offered']}
                                intake={programme['Intake']}
                                icon={getIcon(programme['Courses Offered'])}
                                description={getDescription(programme['Courses Offered'])}
                                learnMoreLink={getLearnMoreLink(programme['Courses Offered'])}
                                department={programme['Department']}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProgramsOffered;
