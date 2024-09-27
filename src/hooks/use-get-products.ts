import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetProducts = (page: number) => {
  const getProducts = () =>
    axios.get(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["getProducts", page],
    queryFn: getProducts,
    enabled: page > 0,
  });

  return { isLoading, isError, data: data?.data, error };
};

export default useGetProducts;
