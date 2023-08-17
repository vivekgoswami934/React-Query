import { useQuery } from "react-query";
import axios from "axios";


const fetchSuperHeroes = () => {
    const url = "http://localhost:8080/superheros";
    return axios.get(url);
 };

export const useSuperHerosData = (onSuccess,onError) => {

 return   useQuery("super-heroes", fetchSuperHeroes, {
        onSuccess : onSuccess,//11
        onError : onError,//11
        // select : (data) => { // 12
        //     const superHeroNames = data?.data.map(hero => hero.name);
        //     console.log(superHeroNames)
        //     return superHeroNames
        // }
         
      }); 

}

// 13 - Custom Query Hook