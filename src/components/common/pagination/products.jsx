import { useState, useMemo } from "react";
import useGetProducts from "../../../hooks/use-get-products";

import "./products.css";

const Pagination = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, error } = useGetProducts(page);
  const products = data?.products;
  const total = data?.total;

  const { filterCategory, totalPages } = useMemo(() => {
    return {
      filterCategory: [...new Set((products || []).map((val) => val.category))],
      totalPages: (total ?? 0) / 20,
    };
  }, [products]);

  const handlePageClick = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
      setFilteredData(products);
    }
  };

  const handleFilterItems = (cat) => {
    const filteredProducts = products.filter((product) => {
      return product.category === cat;
    });
    setFilteredData(filteredProducts);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div className="product-category">
        <button onClick={() => setFilteredData(products)} className="category">
          All
        </button>
        {filterCategory.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => handleFilterItems(category)}
              className="category"
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="product-container">
        {((filteredData.length ? filteredData : products) || []).map(
          (product) => {
            return (
              <span key={product.id} className="product-item">
                <img src={product.thumbnail} alt={product.title} />
                <div>{product.title}</div>
              </span>
            );
          }
        )}
      </div>
      <div className="pagination">
        <div
          className={page > 1 ? "" : "pagination-disable"}
          onClick={() => handlePageClick(page - 1)}
        >
          ⬅️
        </div>
        {[...Array(Math.floor(totalPages))].map((_, i) => {
          return (
            <div
              className={page === i + 1 ? "pagination-selected" : ""}
              onClick={() => handlePageClick(i + 1)}
              key={i}
            >
              {i + 1}
            </div>
          );
        })}

        <div
          className={page < totalPages ? "" : "pagination-disable"}
          onClick={() => handlePageClick(page + 1)}
        >
          ➡️
        </div>
      </div>
    </div>
  );
};

export default Pagination;
