import { useQuery } from "@tanstack/react-query";

const useGetData = () => {
  const query = useQuery({
    queryKey: ["getData"],
    queryFn: () =>
      fetch("http://localhost:8080/api/get-data").then((response) =>
        response.json()
      ),
  });
  return query;
};

export default useGetData;
