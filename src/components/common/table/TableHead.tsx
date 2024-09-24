import { useState } from "react"

type headerProps = {
    data:Array<{label:string,accessor:string}>,
    handleSortingChange: (key:string,updatedSortOrder:string)=>void
}

const TableHead = ({data, handleSortingChange}:headerProps) => {

    const [sorting, setSorting] = useState({sortField:"", sortOrder:""});

    const handleSorting = (key:string)=>{
        const updatedSortOrder = key === sorting.sortField && sorting.sortOrder === "asc" ? "desc" : "asc";
        setSorting({sortField:key, sortOrder:updatedSortOrder});
        handleSortingChange(key,updatedSortOrder);
    }

    return (
        <div className="table-columns">
            {data.map((header,index) => {
                return <div className="heading item" key={index}
                        onClick={()=>handleSorting(header.accessor)}
                        >
                    {header.label}
                        <span>↕️</span>
                    </div>
            })}
        </div>
    )
}

export default TableHead;