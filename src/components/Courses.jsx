import React from 'react'
import { coursesData } from './utils/coursesData'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='coursesContainer'>
        {coursesData.map(course =>{
            return(
                <Link to={`couse-detail/${course.id}`} >
                    <div className='cContainer'>
                    <img src={course.image} alt="course-img" className='cImage' />
                    <h3 className='cTitle'>{course.title}</h3>
                    <p>{course.Description.slice(0, 50)}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Courses