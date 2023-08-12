import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
    const url = "http://localhost:8080/superheros";
    return axios.get(url);
  }

const RQSuperHeroes = () => {

  const response = useQuery("super-heroes", fetchSuperHeroes);  // two arguments

  const { isLoading, data } = response;

  console.log(response)

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h2>RQLSuperHeroes</h2>

      <div>
        {data?.data?.map((superhero) => (
          <p key={superhero.id}>{superhero.name}</p>
        ))}
      </div>
    </>
  );
};

export default RQSuperHeroes;
