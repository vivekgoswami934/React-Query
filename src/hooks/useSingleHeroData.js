import axios from "axios"
import { useQuery } from "react-query"


// const fetchSuperHero = (id) => {

//     return axios.get(`http://localhost:8080/superheros/${id}`)
// }
const fetchSuperHero = ({queryKey}) => {

    // console.log(queryKey)

    const id  = queryKey[1]

    return axios.get(`http://localhost:8080/superheros/${id}`)
}


export const useSingleHeroData = (id) => {

    // return useQuery(['super-single-hero',id],() => fetchSuperHero(id))

    return useQuery(['super-single-hero',id], fetchSuperHero)

}