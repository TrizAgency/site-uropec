'use client';


import React, { useState } from "react";

interface Tab {
    title: string;
    content: React.JSX.Element;
}

interface TabsProps {
    tabs: Tab[];
    className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={`tabs w-full ${className || ""}`}>
            <div className="bg-dark-green lg:rounded-t-[67px] rounded-t-4xl w-fit">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`${activeTab === idx ? "bg-light-green" : "bg-dark-green"} w-full lg:w-auto cursor-pointer text-white font-bold lg:text-xl lg:px-12 px-4 py-5 lg:py-8 lg:rounded-t-[67px] rounded-t-4xl hover:bg-light-green transition-all duration-300`}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="w-full">
                {tabs[activeTab]?.content}
            </div>
        </div>
    );
};

export default Tabs;
