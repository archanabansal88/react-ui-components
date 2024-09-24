import { useQuery } from "@tanstack/react-query";

const useGetAnimals = () => {
  const query = useQuery({
    queryKey: ["getAnimalData"],
    queryFn: () =>
      fetch("http://localhost:8080/api/get-animal-data").then((res) =>
        res.json()
      ),
  });
  return query;
};

export default useGetAnimals;
