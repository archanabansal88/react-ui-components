import Accordion from "../../components/common/accordion/accordion";
import useGetData from "../../hooks/use-get-data";

const AccordionContainer = () => {
  const { data, isLoading } = useGetData();

  return (
    <div className="wrapper">
      {isLoading && "loading"}
      {data && (
        <div className="accordion">
          <Accordion data={data} />
        </div>
      )}
    </div>
  );
};

export default AccordionContainer;
