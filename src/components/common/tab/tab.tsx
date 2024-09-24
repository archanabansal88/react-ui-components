import TabButtons from "./tab-buttons";
import TabContent from "./tab-content";
import "./tab.css";
import { useState } from "react";

type TabDataT = {
  data: Array<{
    title: string;
    description: string;
    image: string;
    id: number;
  }>;
};

const Tab = ({ data }: TabDataT) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="main-container">
      <div className="tab-header">
        {data.map(({ title, id }, index) => {
          return (
            <div
              key={id}
              className={
                index === activeTab ? "tab-buttons active" : "tab-buttons"
              }
            >
              <TabButtons name={title} onClick={() => setActiveTab(index)} />
            </div>
          );
        })}
      </div>
      <TabContent>
        <div className="tab-content">
          <img src={data[activeTab].image} alt={data[activeTab].title} />
          <p>{data[activeTab].description}</p>
        </div>
      </TabContent>
    </div>
  );
};

export default Tab;
