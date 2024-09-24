import { ReactNode, useState } from "react";

type CollapsiblePanelItemProps = {
  title: string;
  children: ReactNode;
};
const CollapsiblePanelItem = ({
  title,
  children,
}: CollapsiblePanelItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className="item-container">
      <div
        role="button"
        data-testid="title"
        className="item-title"
        onClick={handleClick}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div data-testid="content" className="item-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsiblePanelItem;
