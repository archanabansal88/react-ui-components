import Tab from "../../components/common/tab/tab";
import useGetAnimals from "../../hooks/use-get-animals";

const TabContainer = () => {
  const { data } = useGetAnimals();
  return (
    <div className="wrapper">
      <div className="accordion">{data && <Tab data={data} />}</div>
    </div>
  );
};

export default TabContainer;
