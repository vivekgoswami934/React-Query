import React from 'react'
import { useSingleHeroData } from '../hooks/useSingleHeroData'
import { useParams } from 'react-router-dom'

export const RQSuperHero = () => {

     const {id} = useParams();

    const response =  useSingleHeroData(id);
     
    const {isLoading , data , isError , error} = response;

  return (
    <>
    <div>RQSuperHero Details</div>

     {isLoading && <h1>Loading...</h1>}
     {isError && <h1>Error...</h1>}
     <h2>
     {data?.data.name }  - {data?.data.alterEgo}
     </h2>
     
    </>
  )
}
