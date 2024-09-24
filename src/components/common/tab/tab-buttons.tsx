type DataProps = {
  name: string;
  onClick: () => void;
};

const TabButtons = ({ name, onClick }: DataProps) => {
  return (
    <div role="tab" onClick={onClick}>
      {name}
    </div>
  );
};

export default TabButtons;
