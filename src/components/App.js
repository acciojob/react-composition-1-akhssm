import React, { useState } from "react";
import "./../styles/App.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Titles */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const App = () => {
  const tabsData = [
    {
      title: "Tab 1",
      content: "This is the content of Tab 1",
    },
    {
      title: "Tab 2",
      content: "This is the content of Tab 2",
    },
    {
      title: "Tab 3",
      content: "This is the content of Tab 3",
    },
  ];

  return (
    <div>
      {/* Do not remove the main div */}
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default App;