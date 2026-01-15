import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import ProjectCard from '../../components/ProjectCard'
import axios from 'axios'
const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/projects-data/data.json")
        const projectsData = res.data
        setProjects(projectsData)
      } catch (err) {
        console.log(err.message)
      }

    }
    fetchData()

  }, [])
  return (
    <section>
      <Container>
        <div className='grid grid-cols-1 place-items-center gap-16'>
          {projects.map((d, index) => {
            return <ProjectCard key={d.index} {...d} />
          })}
          {console.log(projects)}
        </div>

      </Container>
    </section>
  )
}

export default Projects