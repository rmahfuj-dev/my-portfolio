import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import ProjectCard from '../../components/ProjectCard'
import { useQuery } from '@tanstack/react-query'
import useAxios from '../../hooks/useAxios'
const Projects = () => {
  const instance = useAxios()
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await instance.get("/projects")
      return res.data

    }
  })


  if (isError) {
    return <h1 className='text-red'>{`${error.message}`}</h1>
  }
  return (
    <section id='projects'>
      <Container>
        <div className='grid grid-cols-1 place-items-center gap-16'>
          {isPending
            ? Array(3).fill(0).map((_, i) => (
              <div
                key={i}
                className="w-80 h-48 bg-gray-300 animate-pulse rounded-lg"
              ></div>
            ))
            : data?.map((d, index) => <ProjectCard key={index} {...d} />)
          }
        </div>
      </Container>
    </section>
  )

}

export default Projects