import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  const url = "http://localhost:8080/superheros";
  return axios.get(url);
};

const RQSuperHeroes = () => {
  //   const response = useQuery("super-heroes", fetchSuperHeroes);  // two arguments
  const response = useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 10000,
    // staleTime : 30000  // default time 0
    // refetchOnMount : "always",   // true ,false, "always"
    // refetchOnWindowFocus : "always" // true ,false, "always" //8 
    // refetchInterval : "1000", // false - by default  (Polling) //9 
    // refetchIntervalInBackground : true  --> even it is not in focus //9
    // refetchInterval : 2000, // false - by default (Polling) // 10
    // refetchIntervalInBackground : true   // Polling // 10
  }); // three arguments

  const { isLoading, data, isError, error, isFetching } = response;

  console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error?.message}...</h2>;

  return (
    <>
      <h2>RQLSuperHeroes</h2>

      <div>
        {data?.data?.map((superhero) => (
          <p key={superhero.id}>{superhero.alterEgo}</p>
        ))}
      </div>
    </>
  );
};

export default RQSuperHeroes;
