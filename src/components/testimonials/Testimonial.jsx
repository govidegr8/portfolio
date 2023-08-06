import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sanal Sunny',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, quibusdam beatae fugiat suscipit tempore fugit, molestias vel ipsum non voluptatum ad amet minus quia deleniti? Veritatis autem repudiandae tenetur!',
  },
  {
    avatar: AVTR2,
    name: 'Rahul Rahu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, quibusdam beatae fugiat suscipit tempore fugit, molestias vel ipsum non voluptatum ad amet minus quia deleniti? Veritatis autem repudiandae tenetur!',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, quibusdam beatae fugiat suscipit tempore fugit, molestias vel ipsum non voluptatum ad amet minus quia deleniti? Veritatis autem repudiandae tenetur!',
  },
  {
    avatar: AVTR4,
    name: 'Nana Anna',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, quibusdam beatae fugiat suscipit tempore fugit, molestias vel ipsum non voluptatum ad amet minus quia deleniti? Veritatis autem repudiandae tenetur!',
  }
]

const Testimonial = () => {
  return (
    
    <section id='testimonials' >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        { 
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial' onClick={console.log(index)}>
                <div className='client_avatar'>
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client review'>{review}</small>
              </SwiperSlide>
                  )
                })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial