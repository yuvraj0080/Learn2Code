import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div class="home">
        
        <div className="carousel-wrapper">
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src="https://blogs.worldbank.org/sites/default/files/styles/hero/public/2021-02/d_evans_blog.jpg.webp" alt="home-img"></img>
              <div class="text-block">
              Learning that gets you Skills for your present and your future.
              <Link to={"register"} className="navItem">
              <button class="join">JOIN NOW </button>
            </Link>
              </div>
             
              </div>
              <div>
            <img src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-03/84256810-354d-11eb-be48-092568f6a231.jpg" alt="home-img2"></img>
              <div class="text-block1">
                <h1>Find your perfect program</h1>
                <button class="ViewCourse"  data-toggle="modal">View Courses </button></div>
             
              </div>
          </Carousel>
            </div>
          
          </div>


        
        

  )
}

export default Home