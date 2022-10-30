import React from 'react'
import './about.css'
import ME from '../../assets/about.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
<article className='about__card'>
  <FaAward className='about__icon' />
<h5>Experience</h5>
<small>1+ Years working</small>
</article>
<article className='about__card'>
  <FiUsers className='about__icon'  />
<h5>Clients</h5>
<small>10+ Clients</small>
</article>
<article className='about__card'>
  <VscFolderLibrary className='about__icon'  />
<h5>Projects</h5>
<small>15+ Completed</small>
</article>

          </div>
          <p>

          MINANI Joel is holder of A2
           in COMPUTER SCIENCE got from 
           APAPEN in 2019 ,I'am trained by PatsiTech in 2021-2022 but now am student
            in SOFTWARE ENGINEERING in 
            INES RUHENGERI,.I am an open 
            minded, hardworking and result
             oriented individual. I enjoy 
             working in diverse and
              multicultural environments.
               I am very dynamic, highly
                motivated and team player
                 who can work under minimum
                  supervision. My main 
                  strengths are adaptability, 
                  dependability on task assigned to me and the determination to get a job done. So building on the above my objectives are to gain experience, sharing knowledge, skills and to contribute resourcefully and creatively to 
          achieve to the organization goals.

          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    
    </div>
    
    </section>
  )
}

export default About