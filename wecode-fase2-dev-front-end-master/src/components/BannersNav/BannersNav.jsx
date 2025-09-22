import React from 'react'
import styles from './BannersNav.module.scss'
import bannerNavPequeno from '../../assets/imgs/bannerNavegacao/bannerNavP.jpg'
import bannerNavGrande from '../../assets/imgs/bannerNavegacao/bannerNavG.jpg'


const BannersNav = () => {

    const bannersNav = [bannerNavPequeno, bannerNavGrande]

  return (
    <div>
        {bannersNav.map((ban, index) => (
            <div key={index} className={styles.containerBannersNav}>
                <img src={ban} alt="" />
            </div>
        ))}
        
    </div>
  )
}

export default BannersNav