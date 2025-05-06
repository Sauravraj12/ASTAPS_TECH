import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <div className='testimonials-header'>
        <span className="tag">Testimonial</span>
        <h2>What Our Student Says</h2>
        <p className="subtitle">
        Hear from educators and institutions that have transformed their educational approach with AStaps.
      </p>
      </div>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Rohit Lamba</h3>
                            <span>Prestige, Indore</span>
                        </div>
                    </div>
                    <p>Joining ASTAPS was one of the best decisions I’ve ever made for my career. As a software development aspirant, I was looking for a place that not only teaches programming but also shapes you into an industry-ready professional—and ASTAPS delivered that and more! The mentors here are incredibly knowledgeable and supportive. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Samyuth Naimbair</h3>
                            <span>Sharda University</span>
                        </div>
                    </div>
                    <p>Joining ASTAPS was one of the best decisions I’ve ever made for my career. As a software development aspirant, I was looking for a place that not only teaches programming but also shapes you into an industry-ready professional—and ASTAPS delivered that and more! The mentors here are incredibly knowledgeable and supportive.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Priya Kumari</h3>
                            <span>NIT , Ranchi</span>
                        </div>
                    </div>
                    <p>Joining ASTAPS was one of the best decisions I’ve ever made for my career. As a software development aspirant, I was looking for a place that not only teaches programming but also shapes you into an industry-ready professional—and ASTAPS delivered that and more! The mentors here are incredibly knowledgeable and supportive.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Aashi Chouskey</h3>
                            <span>Prestige,Indore</span>
                        </div>
                    </div>
                    <p>Joining ASTAPS was one of the best decisions I’ve ever made for my career. As a software development aspirant, I was looking for a place that not only teaches programming but also shapes you into an industry-ready professional—and ASTAPS delivered that and more! The mentors here are incredibly knowledgeable and supportive.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
