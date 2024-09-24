import CollapsiblePanel from "../../components/common/collapsiblePanel/collapsible-panel";
import useGetData from "../../hooks/use-get-data";

const CollapsiblePanelContainer = () => {
  const { data } = useGetData();
  return <div>{data && <CollapsiblePanel data={data} />}</div>;
};

export default CollapsiblePanelContainer;
