import React, { useState, useEffect } from 'react';
import departmentData from '../assets/s&h.json';
import './ScienceHumanities.css';

const ScienceHumanities = () => {
    const [activeSection, setActiveSection] = useState('About Department');
    const [showPopover, setShowPopover] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);

const closePopover = () => {
    setShowPopover(false);
    setSelectedStaff(null);
};

    const sections = ['About Department', 'Faculty'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;
            for (const section of sections) {
                const id = section.toLowerCase().replace(/\s+/g, '-');
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    const bottom = top + el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (section) => {
        const id = section.toLowerCase().replace(/\s+/g, '-');
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
        }
    };

    const showDetails = (staff) => {
        setSelectedStaff(staff);
        setShowPopover(true);
    };

    const department = departmentData;

    return (
        <div className="min-h-screen flex flex-col bg-white">
         <main>

            {/* Hero */}
             <section
                    className="bg-cover bg-center relative h-64 sm:h-72 md:h-80 lg:h-96"
                    style={{ backgroundImage: `url(/${department.image})` }}
                >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(115,63,63)]/70 to-[rgb(115,25,25)]/30"></div>
                   <div className="container mx-auto h-full flex items-center relative z-10 px-3 sm:px-4 md:px-6 lg:px-9">
                        <div className="max-w-2xl">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 text-white">
                                <span className="text-white bg-clip-text text-transparent">
                                    {department.name}
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-gray-100 leading-relaxed">Bridging science fundamentals with engineering innovation.</p>
                       </div>
                   </div>
            </section>

                {/* Navigation Tabs */}
                <div className="sticky top-0 z-20">
                    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full -mt-4 sm:-mt-6 py-1 px-2 flex justify-center overflow-x-auto no-scrollbar">
                            <nav role="tablist" className="tabs flex space-x-1 md:space-x-2">
                              {sections.map(section => (
                              <button
                                 key={section}
                                   onClick={() => scrollToSection(section)}
                                  className={`px-5 py-2 rounded-full font-bold text-sm transition ${
                                  activeSection === section
                                    ? 'bg-[rgb(115,40,40)] text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                 }`}
                               >
                              {section}
                             </button>
                            ))}
                          </nav>
                        </div>
                    </div>
                </div>

            {/* Content sections */}
                <section className="mx-auto">
                    <div id="content-sections" className="w-full">
                        {/* About Department */}
                        <div id="about-department" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                                    <div className="flex flex-col h-full">
                                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
                                            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 md:py-6">
                                                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">About Department</h2>
                                            </div>
                                            <div className="p-8 md:p-10">
                                                <ul className="text-base lg:text-lg text-gray-700 leading-relaxed">{(department?.description || []).map((description, i) => (
                                                        <li key={i} className="pl-4">{description}</li>
                                                    ))}</ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 h-full">
                                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 md:py-6">
                                                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">Vision</h3>
                                            </div>
                                            <div className="p-8 md:p-10">
                                                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{department.vision}</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-4 sm:py-5 md:py-6">
                                                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">Mission</h3>
                                            </div>
                                            <div className="p-8 md:p-10">
                                                <ul className="text-base lg:text-lg list-disc pl-4 sm:pl-5 text-gray-700 space-y-2 sm:space-y-3">
                                                    {(department?.mission || []).map((mission, i) => (
                                                        <li key={i} className="pl-2">{mission}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

            {/* Courses Offered */}
                        <div id="courses-offered" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 bg-white">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                                <span className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] bg-clip-text text-transparent">Courses Offered</span>
                            </h2>
                            <div className="max-w-6xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-6 sm:py-7 md:py-8">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-bold text-center">Programs Available</h3>
                                    </div>
                                    <div className="p-8 md:p-10">
                                        <div className={`flex gap-6 sm:gap-6 ${(department?.courses_offered?.length || 0) > 1 ? 'grid-cols-1 md:grid-cols-2' : 'justify-center'}`}>
                                            {(department?.courses_offered || []).map((course, index) => (
                                                <div key={index} className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-4 sm:p-5 md:p-6 rounded-xl border border-[rgb(180,100,100)] hover:border-[rgb(160,80,80)] transition-all duration-300 hover:shadow-md">
                                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-base lg:text-lg font-semibold text-white mb-2">
                                                                {typeof course === 'object' ? course.name : course}
                                                            </h4>
                                                            <p className="text-xs lg:text-sm text-white">
                                                                {typeof course === 'object' && course.type ? course.type : 'Full-time program with comprehensive curriculum'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {(department?.courses_offered?.length || 0) === 0 && (
                                                <p className="text-gray-500 italic text-center col-span-full">Information about courses will be updated soon.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>            

            {/* Faculty */}
                        <div id="faculty" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 bg-gray-200 rounded-2xl mb-6">
                            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block group">
                                    OUR FACULTY
                                    <span className="absolute -bottom-2 sm:-bottom-3 left-0 h-1 w-full bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></span>
                                </h2>
                            </div>

                {/* HOD */}
                <div className="mb-12 sm:mb-14 lg:mb-16">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]">Head of Department</h3>
                    <div className="flex justify-center">
                    {department.faculty.hod_desk.map((staff, i) => (
                        <div
                            key={i}
                            onClick={() => showDetails(staff)}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)] transform transition-all duration-300 cursor-pointer min-h-[340px] max-w-[320px] w-50 flex-shrink-0 flex-grow-0 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:border-[rgb(115,40,40)]"
                        >
                            <div className="relative pt-2 flex justify-center">
                                                <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
                            <div className="relative">
                            <img
                                src={`/${staff.image}`}
                                alt={staff.name}
                                className="w-28 h-36 sm:w-32 sm:h-40 lg:w-36 lg:h-44 object-cover rounded-full border-4 border-white shadow-lg"
                            />
                            </div>
                            </div>
                            <div className="p-6 text-center">
                            <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] mb-2">{staff.name}</h4>
                            <p className="text-gray-700 font-medium">{staff.position}</p>
                            <p className="text-gray-500 text-sm">{staff.email}</p>
                            <button
    onClick={(e) => {
        e.stopPropagation();
        showDetails(staff);
    }}
    className="mt-4 px-4 py-2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]
               text-white text-sm rounded-lg font-semibold transition-all"
>
    View Profile
</button>

                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Faculty Grid */}
                <div>
                <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]">Professors</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {department.faculty.assistant_professors.map((staff, i) => (
                        <div
                            key={i}
                            onClick={() => showDetails(staff)}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-[rgb(200,120,120)] transform transition-all duration-300 cursor-pointer min-h-[340px] max-w-[320px] w-50 flex-shrink-0 flex-grow-0 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-[rgb(115,40,40)]"
                        >
                            <div className="relative pt-2 flex justify-center">
                            <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]"></div>
                            <div className="relative">
                            <img
                                src={`/${staff.image}`}
                                alt={staff.name}
                                className="w-36 h-44 object-cover rounded-full border-4 border-white shadow-lg"
                            />
                            </div>
                            </div>
                             <div className="p-6 text-center">
                            <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] mb-2">
                                {staff.name}
                            </h4>
                            <p className="text-gray-700 font-medium">
                                {staff.position}
                            </p>
                            <p className="text-gray-500 text-sm">{staff.email}</p>
                            <button
    onClick={(e) => {
        e.stopPropagation();
        showDetails(staff);
    }}
    className="mt-4 px-4 py-2 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)]
               text-white text-sm rounded-lg font-semibold transition-all"
>
    View Profile
</button>

                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showPopover && selectedStaff && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
        <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] relative">

            {/* Close Button */}
            <button
                onClick={closePopover}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
                ✕
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] p-6 text-white text-center">
                <img
                    src={`/${selectedStaff.image}`}
                    alt={selectedStaff.name}
                    className="w-32 h-40 mx-auto rounded-xl border-4 border-white shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold">{selectedStaff.name}</h2>
                <p className="text-sm">{selectedStaff.position}</p>
                <p className="text-sm">{selectedStaff.department}</p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">

                {/* Profile */}
                {selectedStaff.profile && (
                    <section>
                        <h3 className="font-bold text-lg mb-2">Profile</h3>
                        <p className="text-gray-700 text-justify">
                            {selectedStaff.profile}
                        </p>
                    </section>
                )}

                {/* Education */}
                {selectedStaff.education && (
                    <section>
                        <h3 className="font-bold text-lg mb-2">Education</h3>
                        <ul className="list-disc ml-6 text-gray-700">
                            {selectedStaff.education.map((edu, i) => (
                                <li key={i}>{edu}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Professional Experience */}
                {selectedStaff.professional_experience && (
                    <section>
                        <h3 className="font-bold text-lg mb-2">Professional Experience</h3>
                        <ul className="space-y-2">
                            {selectedStaff.professional_experience.map((exp, i) => (
                                <li key={i} className="border-l-4 border-[rgb(115,63,63)] pl-4">
                                    <p className="font-semibold">{exp.position}</p>
                                    <p className="text-sm text-gray-600">{exp.institution}</p>
                                    <p className="text-sm text-gray-500">{exp.duration}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Research & Links */}
                <section className="grid sm:grid-cols-2 gap-4">
                    {selectedStaff.google_scholar && (
                        <a
                            href={selectedStaff.google_scholar}
                            target="_blank"
                            className="text-blue-600 underline"
                        >
                            Google Scholar
                        </a>
                    )}

                    {selectedStaff.drive_link && (
                        <a
                            href={selectedStaff.drive_link}
                            target="_blank"
                            className="text-blue-600 underline"
                        >
                            View Documents
                        </a>
                    )}
                </section>
            </div>
        </div>
    </div>
)}
          </main>
        </div>
    );
};

export default ScienceHumanities;
