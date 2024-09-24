import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/common/table";
import data from "./data/data.json";
import NavBar from "./components/navbar/navbar";
import Login from "./components/common/login";
import CollapsiblePanelContainer from "./container/collapsiblePanel";
import Pagination from "./components/common/pagination/pagination";
import TabContainer from "./container/tab";
import CarouselContainer from "./container/carousel";
import Home from "./page/home";
import AccordionContainer from "./container/accordion";
import CustomDropdown from "./components/common/customDropdown/CustomDropdown";
import { useState } from "react";

const formatTableRow = () => {
  return data.map((value) => {
    return {
      id: value.id,
      name: `${value.first_name} ${value.last_name}`,
      gender: value.gender,
      email: value.email,
      university: value.university,
    };
  });
};

const columns = [
  { label: "Id", accessor: "id" },
  { label: "Name", accessor: "name" },
  { label: "Gender", accessor: "gender" },
  { label: "Email", accessor: "email" },
  { label: "University", accessor: "university" },
];

const DropdownData = [
  { id: 1, label: "React" },
  { id: 2, label: "Vue" },
  { id: 3, label: "Angular" },
  { id: 4, label: "abcd" },
  { id: 5, label: "xyz" },
  { id: 6, label: "lmn" },
  { id: 7, label: "efg" },
];

function App() {
  const [selectedValue, setSelectedValue] = useState<
    Array<{
      id: number | string;
      label: string;
    }>
  >([DropdownData[0]]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/table"
            element={<Table data={formatTableRow()} headers={columns} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products" element={<Pagination />}></Route>
          <Route path="/" element={<Home />}>
            <Route path="accordion" element={<AccordionContainer />}></Route>
            <Route
              path="collapsiblePanel"
              element={<CollapsiblePanelContainer />}
            ></Route>
            <Route path="tab" element={<TabContainer />}></Route>
            <Route path="carousel" element={<CarouselContainer />}></Route>
            <Route
              path="dropdown"
              element={
                <CustomDropdown
                  selectedValue={selectedValue}
                  options={DropdownData}
                  onChange={(o) => setSelectedValue(o)}
                  multiple
                />
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
