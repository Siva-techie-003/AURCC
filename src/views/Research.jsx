import React, { useState } from 'react';
import researchData from '../assets/research-cell.json';
import OfficePageTemplate from '../components/OfficePageTemplate';
import OfficeContentSection from '../components/OfficeContentSection';
import './Research.css';

const Research = () => {
    const [currentSection, setCurrentSection] = useState('description');

    const sections = [
        { key: 'description', label: 'Description' },
        { key: 'supervisors', label: 'Supervisors' }
    ];

    const handleSectionChange = (sectionKey) => {
        setCurrentSection(sectionKey);
    };

    return (
        <OfficePageTemplate
            officeName="RESEARCH CELL"
            heroSubtitle="Fostering research and innovation across disciplines"
            sections={sections}
            contactEmail="researchcell@aurcc.ac.in"
            onSectionChange={handleSectionChange}
        >
            <div className="content">
                {/* Description */}
                <OfficeContentSection
                    sectionId="description"
                    title="About the Research Cell"
                    icon="ℹ️"
                >
                    <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 shadow-sm text-left">
                        <ul className="list-disc pl-5 space-y-4 text-base lg:text-lg xl:text-xl text-gray-800 leading-relaxed italic">
                            {(Array.isArray(researchData?.description) ? researchData.description : []).map((desc, index) => (
                                <li key={index} className="whitespace-pre-wrap break-words">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </OfficeContentSection>

                {/* Supervisors Section */}
                <OfficeContentSection
                    sectionId="supervisors"
                    title="Scholars Details by Department"
                    icon="🎓"
                >
                    <div className="overflow-x-auto no-scrollbar shadow-lg rounded-xl border border-gray-200">
                        <table className="table-auto w-full text-left text-sm lg:text-base">
                            <thead className="bg-indigo-900 text-white uppercase tracking-wider sticky top-0">
                                <tr>
                                    <th className="px-4 py-4 font-bold border-r border-indigo-800">Department</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-indigo-800">Completed (FT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-indigo-800">Completed (PT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-indigo-800">Registered (FT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-indigo-800">Registered (PT)</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-indigo-800">Comp. Total</th>
                                    <th className="px-3 py-4 font-bold text-center border-r border-indigo-800">Reg. Total</th>
                                    <th className="px-3 py-4 font-bold text-center bg-blue-700">Overall</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {(Array.isArray(researchData?.supervisors) ? researchData.supervisors : []).map((dept, index) => (
                                    <tr key={index} className="hover:bg-indigo-50/30 transition-colors">
                                        <td className="px-4 py-4 font-bold text-indigo-900 border-r border-gray-100">{dept.department}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdCompletedFullTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdCompletedPartTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdRegisteredFullTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-gray-100 font-medium">{dept.phdRegisteredPartTime}</td>
                                        <td className="px-3 py-4 text-center border-r border-indigo-50 font-bold text-green-700 bg-green-50/20">{dept.completedFTPT}</td>
                                        <td className="px-3 py-4 text-center border-r border-indigo-50 font-bold text-blue-700 bg-blue-50/20">{dept.registeredFTPT}</td>
                                        <td className="px-3 py-4 text-center font-extrabold text-indigo-900 bg-indigo-50/50">{dept.completedFTPT + dept.registeredFTPT}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="bg-gray-100 font-bold">
                                <tr>
                                    <td className="px-4 py-4 border-t-2 border-gray-300">TOTAL</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{researchData.supervisors.reduce((acc, d) => acc + d.phdCompletedFullTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{researchData.supervisors.reduce((acc, d) => acc + d.phdCompletedPartTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{researchData.supervisors.reduce((acc, d) => acc + d.phdRegisteredFullTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300">{researchData.supervisors.reduce((acc, d) => acc + d.phdRegisteredPartTime, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300 text-green-800">{researchData.supervisors.reduce((acc, d) => acc + d.completedFTPT, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300 text-blue-800">{researchData.supervisors.reduce((acc, d) => acc + d.registeredFTPT, 0)}</td>
                                    <td className="px-3 py-4 text-center border-t-2 border-gray-300 bg-indigo-100 text-indigo-900">{researchData.supervisors.reduce((acc, d) => acc + (d.completedFTPT + d.registeredFTPT), 0)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </OfficeContentSection>
            </div>
        </OfficePageTemplate>
    );
};

export default Research;
