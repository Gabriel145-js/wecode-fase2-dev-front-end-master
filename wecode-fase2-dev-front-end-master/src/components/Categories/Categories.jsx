import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Categories.module.scss'
import bannerCategories1 from '../../assets/imgs/bannersCategories/banner categories 1.jpg'
import bannerCategories2 from '../../assets/imgs/bannersCategories/banner categories 2.jpg'
import bannerCategories3 from '../../assets/imgs/bannersCategories/banner categories 3.jpg'
import bannerCategories4 from '../../assets/imgs/bannersCategories/banner categories 4.jpg'

const Categories = () => {

    const configsBanners = {
        dots: false,
        infinite: false,
        slidesToShow: 2.38, // mostra 2 banners inteiros e uma prévia do terceiro
        slidesToScroll: 1,
    };

    const bannersCategories = [
        { imagemCategorias: bannerCategories1, nomeCategoria: 'Botas' },
        { imagemCategorias: bannerCategories2, nomeCategoria: 'Scarpins' },
        { imagemCategorias: bannerCategories3, nomeCategoria: 'Sapatilhas' },
        { imagemCategorias: bannerCategories4, nomeCategoria: 'Sandálias' },
    ]

    return (
        <section className={styles.containerCategories}>
            <h1>Categorias</h1> 
          {/* Este trecho faz um map dos banners e exibe todos com seus nomes */}
            <Slider {...configsBanners}>
                {bannersCategories.map((ban, index) => (
                    <div className={styles.bannersContainer} key={index}>
                        <img className={styles.imgBannerCategories} src={ban.imagemCategorias} alt="Banners Categorias" />
                        <p>{ban.nomeCategoria}</p>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Categories