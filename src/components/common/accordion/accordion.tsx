import { useState } from "react";
import "./accordion.css";

type AccordionType = {
  title: String;
  content: String;
};

type AccordionProps = {
  data: AccordionType[];
};

const Accordion = ({ data }: AccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setSelected(i);
  };

  return (
    <div>
      {data.map((value, index) => {
        const { title, content } = value;
        return (
          <div key={index} className="accordion-item">
            <div className="accordion-title" onClick={() => handleClick(index)}>
              <h2>{title}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>

            {selected === index && <div className="show">{content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
