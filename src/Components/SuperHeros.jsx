import { useEffect, useState } from "react";
import axios from "axios";
import { isError } from "react-query";

const SuperHeros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error,setError] = useState('')

  useEffect(() => {

    const url = "http://localhost:8080/superheros"

    axios.get(url).then((res) => {
      setData(res.data);
      setIsLoading(false);
    }).catch((err) => {
        setError(err.message)
    });

  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if(error) return <h2>{error}...</h2>;

  return (
    <>
      <h1>Traditional - SuperHeros</h1>
      {
        data?.map((el)=>{
         return  <h4 key={el.name} >{el.name}</h4>
        })
      }
    </>
  );
};

export default SuperHeros;
