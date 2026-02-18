import React, { useState } from 'react';
import administrationData from '../assets/administration.json';
import './Admin.css';

const Admin = () => {
    const administrator = administrationData;

    return (
        <div className="bg-white min-h-screen">
            <div className="text-center md:py-6 py-3 bg-[rgb(110,35,35)] bg-opacity-90">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold font-serif text-white tracking-wide uppercase">ADMINISTRATIVE STAFF</h1>
            </div>
            <div className="mx-auto py-8 sm:py-12 lg:py-14 px-2 md:px-9 font-serif">
                <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
                    {Object.entries(administrator).map(([sectionName, section]) => (
                        <div key={sectionName} className="mb-8 sm:mb-12">
                            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold mb-3 sm:mb-4 text-center font-serif tracking-wide">{sectionName}</h2>
                            <div className="flex justify-center mb-6 sm:mb-8">
                                <span className="block w-24 sm:w-32 h-2 rounded-full bg-gradient-to-r from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-[rgb(115,25,25)]"></span>
                            </div>
                            {Object.entries(section).map(([subsectionName, subsection]) => (
                                <div key={subsectionName} className="mb-6 sm:mb-8">
                                    <h3 className={`text-base lg:text-lg xl:text-2xl font-semibold mb-3 sm:mb-4 text-center font-serif tracking-wide ${subsectionName === 'Purchase and Finance Section' ? '' : 'uppercase'}`}>
                                        {subsectionName.replace(/_/g, ' ')}
                                    </h3>

                                    {subsection.DEPUTY_MANAGER && (
                                        <div className="mb-8 sm:mb-12">
                                            <h4 className="text-base lg:text-lg xl:text-2xl font-semibold mb-6 text-center font-serif tracking-wide">Deputy Manager (Finance)</h4>
                                            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
                                                {subsection.DEPUTY_MANAGER.map((member) => (
                                                    <AdminStaffCard key={member.name} member={member} />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {subsection.STAFFS && (
                                        <div className="mb-8 sm:mb-12">
                                            <h4 className="text-base lg:text-lg xl:text-2xl font-semibold mb-6 text-center font-serif tracking-wide">Staff Members</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 justify-items-center">
                                                {subsection.STAFFS.map((member) => (
                                                    <AdminStaffCard key={member.name} member={member} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AdminStaffCard = ({ member }) => {
    const [error, setError] = useState(false);

    return (
        <div className="admin-card bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border border-[rgb(180,100,100)] transition-all duration-300 w-80 h-96">
            <div className="w-full flex justify-center pt-4 sm:pt-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[rgb(140,60,60)] shadow-lg bg-white flex items-center justify-center">
                    {member.image && !error ? (
                        <img
                            src={`/${member.image}`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={() => setError(true)}
                        />
                    ) : (
                        <span className="text-3xl sm:text-4xl lg:text-5xl text-[rgb(160,80,80)]">👤</span>
                    )}
                </div>
            </div>
            <div className="w-full bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-3 sm:py-4 px-3 flex flex-col items-center justify-center flex-grow">
                <h2 className="text-sm lg:text-base xl:text-xl font-bold text-white font-sans tracking-wide text-center mb-1">{member.name}</h2>
                <p className="text-xs lg:text-sm xl:text-base text-[rgb(200,120,120)] font-sans text-center leading-tight">{member.position || 'Position not available'}</p>
            </div>
        </div>
    );
};

export default Admin;
