import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Carousel.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../assets/imgs/banners/Banner Principal 2.jpg'
import banner2 from '../../assets/imgs/banners/Banner Principal 1.jpg'
import banner3 from '../../assets/imgs/banners/Banner Principal-1 1.jpg'

const Carousel = () => {

  // Configurações do slick carrousel
  const configSlick = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,     
    pauseOnFocus: false,    
    swipeToSlide: true,      
    cssEase: "linear",       
    speed: 600,              
  };


  const banners = [banner1, banner2, banner3]

  return (
    <div className={styles.containerCarrousel}>
      {/* Exibi os banners para o carrousel do header */}
      <Slider {...configSlick}>
        {banners.map((ban, index) => (
          <div key={index}>
            <img src={ban} alt='banner' />
          </div>
        ))}
      </Slider>
    <Link className={styles.btnConhecaAgora}>Conheça Agora!</Link>

        
    </div>
  )
}

export default Carousel