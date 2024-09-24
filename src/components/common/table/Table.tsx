import TableItems from "./TableItems";
import TableHead from "./TableHead";
import "./Table.css";
import { useState } from "react";

type TableProps = {
    data: Array<{[key:string]: number | string}>
    headers: Array<{label:string,accessor:string}>
}

type DataType = Array<{[key:string]: number | string}>;

const Table = ({data, headers}:TableProps) =>{
    const [enteredValue, setEnteredValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<DataType>(data);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEnteredValue(event.target.value);
    }

    const handleClick = () =>{
        const newFilteredData = data.filter((person)=>{
            return Object.values(person).some((value)=>{
                if(typeof value === "string"){
                    return value.toLowerCase().includes(enteredValue.toLowerCase())
                }
                return false;
        })})

     setFilteredData(newFilteredData);
    }

    const handleSortingChange = (sortField:string,sortOrder:string) => {
        const sortedData = [...filteredData].sort((a,b)=>{
            if(typeof a[sortField] === "string"){
                return String(a[sortField]).localeCompare(String(b[sortField]))
            }
            return Number(a[sortField]) - Number(b[sortField])
        })
        setFilteredData(sortOrder === "asc" ? sortedData : sortedData.reverse());
    }

    return (
        <>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
            <div className="table-container">
                <TableHead data={headers} handleSortingChange={handleSortingChange}/>
                {filteredData.length !== 0 && filteredData.map((val, index)=> <TableItems key={index} value={val} headers={headers}/>)}
            </div>
        </>
    )
}

export default Table;