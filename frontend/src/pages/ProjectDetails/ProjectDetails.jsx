import React from 'react'
import { useLoaderData } from 'react-router'
import Container from '../../components/Container';

const ProjectDetails = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <Container>
        <div className="image">
          <img src={data.image} alt="" />
        </div>
        <div className="desc">
          <h2>Project Overview</h2>
          <p>{data.desc}</p>
        </div>
      </Container>
    </div>
  )
}

export default ProjectDetails