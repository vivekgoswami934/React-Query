import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  const url = "http://localhost:8080/superheros";
  return axios.get(url);
};

const RQSuperHeroes = () => {

    const onSuccess = (data) => {
        console.log("Perform side effect after data fetching...",data);
    }

    const onError = (error) => {
        console.log("Perform side effect after encountering error...",error);
    }

  //   const response = useQuery("super-heroes", fetchSuperHeroes,{});  // three arguments
  const response = useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 10000,
    // staleTime : 30000  // default time 0
    // refetchOnMount : "always",   // true ,false, "always"
    // refetchOnWindowFocus : "always" // true ,false, "always" //8 
    // refetchInterval : "1000", // false - by default  (Polling) //9 
    // refetchIntervalInBackground : true  --> even it is not in focus //9
    //  enabled :false,  //10
    // onSuccess : onSuccess,//11
    // onError : onError//11
    // select : (data) => { // 12
    //     const superHeroNames = data?.data.map(hero => hero.name);
    //     console.log(superHeroNames)
    //     return superHeroNames
    // }
    //  
  }); // three arguments

  const { isLoading, data, isError, error, isFetching , refetch } = response;

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error?.message}...</h2>;

  return (
    <>
      <h2>RQLSuperHeroes</h2>

      <div>
        {/* <button onClick={refetch}>Fetch the Data</button> */}
        {data?.data?.map((superhero) => (
          <h3 key={superhero.id}>{superhero.alterEgo}</h3>
        ))}
        {/* {data?.map((superhero) => (
          <h3 key={superhero.id}>{superhero}</h3>
        ))} */}
      </div>
    </>
  );
};

export default RQSuperHeroes;


// 11 - Success and Error Callbacks.
// 12 - data Transformation
// 13 - Custom Query Hooks