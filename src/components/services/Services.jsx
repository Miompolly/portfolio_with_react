import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI Design</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>FIGMA Course </p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Web Design GUI </p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Dashboard with FIGMA</p></li>
           
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            
            
            
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p> Web Development with HTML & CSS Course </p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Web Development with PHP </p></li>

            <li><BiCheck className='service__list-icon'/>
            <p>JavaScript & React Course </p></li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Language </h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>C Course</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>PHP Course</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>JavaScript Course </p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Java Course </p></li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services