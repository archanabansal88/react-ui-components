type DataProps = {
    value: {[key:string]: number | string};
    headers: Array<{label:string,accessor:string}>
}

const TableItems =({value, headers }:DataProps)=>{
    return (
        <div className="table-items">
            {headers.map(({accessor},index)=> <div className="columns item" key={index}>{value[accessor]}</div>)}
            </div>
    )
}

export default TableItems