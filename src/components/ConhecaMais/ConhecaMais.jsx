import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ConhecaMais.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getConhecaMais } from '../../utils.js'

const ConhecaMais = () => {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        const getBanners = async () => {
            try {
                const data = await getConhecaMais();
                setBanners(data);

            } catch (error) {
                console.error('Erro ao carregar banners', error)
            }
        }
        getBanners()

    }, [])

    const configsBanners = {
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
    }

    return (
        <section className={styles.containerConhecaMais}>
           <div className={styles.containerTit}>
             <h1>Conheça Mais</h1>
            <p className={styles.descTit}>Fique por dentro de tudo que acontece na Bebecê.</p>
           </div>
            <div className={styles.slidesBanners}>
                {/* Exibi todos os banners de Conheça Mais */}
                <Slider {...configsBanners}>
                {banners.map((ban) => (
                    <div key={ban.id} className={styles.banners}>
                        <img className={styles.imgBanner} src={ban.image} alt="" />
                        <h1 className={styles.titBanner}>{ban.titulo}</h1>
                        <p className={styles.descBanner}>{ban.descricao}</p>
                        <Link className={styles.btnSaibaMais}>Saiba Mais!</Link>
                    </div>
                ))}
                </Slider>

            </div>

        </section>
    )
}

export default ConhecaMais