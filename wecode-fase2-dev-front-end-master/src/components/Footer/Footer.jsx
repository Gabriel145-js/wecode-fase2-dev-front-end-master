import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Footer.module.scss'
import logoBege from '../../assets/svgs/logos/logo-bege.svg'
import facebookIcon from '../../assets/svgs/Icons/IconesFooter/facebook.svg'
import instagramIcon from '../../assets/svgs/Icons/IconesFooter/instagram.svg'
import pinterestIcon from '../../assets/svgs/Icons/IconesFooter/pinterest.svg'
import twitterIcon from '../../assets/svgs/Icons/IconesFooter/twitter.svg'
import titktokIcon from '../../assets/svgs/Icons/IconesFooter/tik-tok.svg'


const Footer = () => {

  const iconesRedes = [
    { icones: instagramIcon, alt: 'Instagram' },
    { icones: facebookIcon, alt: 'Facebook' },
    { icones: pinterestIcon, alt: 'Pinterest' },
    { icones: twitterIcon, alt: 'Twitter' },
    { icones: titktokIcon, alt: 'Tik Tok' }
  ]

  return (
    <footer className={styles.containerFooter}>
      <img src={logoBege} alt="" />

      <div className={styles.redesSociais}>
        {iconesRedes.map((icone, index) => (
          <img src={icone.icones} key={index} alt={icone.alt} />
        ))}
      </div>

      <div className={styles.listasRapidas}>
        <h3>Sobre a Empresa</h3>
        <ul>
          <li><Link >Quem Somos</Link></li>
          <li><Link >Fale Conosco</Link></li>
        </ul>
      </div>

      <div className={styles.listasRapidas}>
        <h3>Políticas</h3>
        <ul>
          <li><Link >Política de Privacidade</Link></li>
          <li><Link >Termos de Uso</Link></li>
          <li><Link >Política de Entrega</Link></li>
          <li><Link >Política de Cupom e Descontos</Link></li>
        </ul>
      </div>


    </footer>
  )
}

export default Footer