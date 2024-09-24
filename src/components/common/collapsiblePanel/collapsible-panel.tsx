import CollapsiblePanelItem from "./collapsible-panel-item";
import "./collapsible-panel.css";

type CollapsiblePanelProps = {
  data: Array<{
    title: string;
    content: string;
  }>;
};

const CollapsiblePanel = ({ data }: CollapsiblePanelProps) => {
  return (
    <div className="panel-container">
      {data.map((item, index) => {
        return (
          <CollapsiblePanelItem title={item.title} key={index}>
            {item.content}
          </CollapsiblePanelItem>
        );
      })}
    </div>
  );
};

export default CollapsiblePanel;
