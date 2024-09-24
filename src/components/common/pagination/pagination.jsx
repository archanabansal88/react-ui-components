import axios from "axios";
import { useState, useEffect} from 'react';
import "./pagination.css";

const Pagination = () => {
    const[products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`).then((response)=>{
            if (response && response.data && response.data.products) {
                setProducts(response.data.products);
                setTotalPages(response.data.total/10);
            }
        })
    },[page])

    const handlePageClick = (selectedPage) =>{
        if(selectedPage >=1 && selectedPage <= totalPages && selectedPage !== page){
            setPage(selectedPage);
        }
    }

    return (
        <div>
            <div className="product-container">
                {products.map((product)=>{
                    return <span key={product.id} className="product-item">
                        <img src={product.thumbnail} alt={product.title}/>
                        <div>
                            {product.title}
                        </div>
                    </span>
                })}           
            </div>
            <div className="pagination">
                <div className={page >1 ? "" : "pagination-disable"}
                onClick={()=>handlePageClick(page-1)}>
                    ⬅️
                </div>
                {[...Array(Math.floor(totalPages))].map((_,i)=>{
                    return (<div className={page === i+1 ? "pagination-selected" : ""}
                    onClick={()=>handlePageClick(i+1)}>       
                        {i+1} 
                    </div>)
                })}

                <div className={page < totalPages ? "" : "pagination-disable"}
                onClick={()=>handlePageClick(page+1)}>
                    ➡️
                    </div>
            </div>
        </div>
    )
}

export default Pagination;