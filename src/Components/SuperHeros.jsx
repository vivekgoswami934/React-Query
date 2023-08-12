import { useEffect, useState } from "react";
import axios from "axios";

const SuperHeros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {

    const url = "http://localhost:8080/superheros"

    axios.get(url).then((res) => {
      setData(res.data);
    });

    setIsLoading(false);
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h1>SuperHeros</h1>
      {
        data?.map((el)=>{
         return  <h4 key={el.name} >{el.name}</h4>
        })
      }
    </>
  );
};

export default SuperHeros;
