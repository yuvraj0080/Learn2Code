import React, {useEffect} from 'react'
import { fetchUser } from './utils/fetchUser'
import { useNavigate, useParams} from 'react-router-dom'
import { coursesData } from './utils/coursesData'

const CourseDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    let user = fetchUser();
    console.log(user)
    if(!user){
      navigate("/login", {replace:true})
    }
  },[])

  

  return (
    coursesData.map((course)=>{
      if(course.id === id){
        return(
          <div className=''>
            <h2>{course.title}</h2>
            <img src={course.image} alt="image" />
          </div>
        )
      }
    })
  )
}

export default CourseDetails


