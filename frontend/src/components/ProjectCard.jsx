import React from 'react'
import { Link } from 'react-router'

const ProjectCard = ({ _id, title, image }) => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-5 place-items-center max-w-380 p-4 rounded-2xl shadow-md shadow-base-content/10 bg-base-200'>
      <div className="image max-w-180 flex-3 col-span-3 ">
        <img src={image} alt="" />
      </div>
      <div className="text flex flex-col justify-center gap-8 flex-2 col-span-2 items-center lg:items-start">
        <h2 className="title text-3xl font-semibold">StudyMate</h2>
        <p className="description text-xl text-base-content/80">{title}</p>
        <Link className="btn bg-primary text-white font-semibold text-xl px-10 py-6 rounded-md w-fit" to={`/projects/${_id}`}>Details</Link>
      </div>
    </div>
  )
}

export default ProjectCard