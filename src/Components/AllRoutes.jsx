import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SuperHeros from './SuperHeros'
import RQSuperHeroes from './RQSuperHeroes'
import Home from './Home'
import { RQSuperHero } from './RQSuperHero'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeros />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        <Route path="/rq-super-hero/:id" element={<RQSuperHero />} />
    </Routes>
  )
}
