import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuNav.module.scss'
import iconeFechar from '../../assets/svgs/Icons/IconesNavBar/icone-fechar.svg'
import logoPreto from '../../assets/svgs/logos/logo-preto.svg'
import bannerMenu from '../../assets/imgs/banners/Banner Principal 2.jpg'
import MenuItem from './ItensMenu/MenuItem' //Componente que adiciona os subMenus

const MenuNav = ({ aberto, fechado }) => {

  // Itens do submenu de Sapatos
  const sapatosSubItens = ["Scarpins", "Mocassim", "Sapatilhas", "Mules", "Peep Toe", "Oxford"];

  return (
    <div className={`${styles.containerMenu} ${aberto ? styles.aberto : ''}`}>
      <div className={styles.headerMenu}>
        <img src={logoPreto} alt="Logo menu" />
        <img src={iconeFechar} alt="Fechar menu" onClick={fechado} />
      </div>

      <div className={styles.bannerMenu}>
        <img src={bannerMenu} alt="" />
        <div className={styles.bannerTexto}>
          <span className={styles.celebration}>Celebration - 20 Anos</span>
          <Link className={styles.conheca}><span >Conheça</span></Link>
        </div>
      </div>


      {/* Componente que adiciona os menus */}
      <div className={styles.menuItensPromocional}>
        <div className={styles.itensPromocional}>
          <span>Liquida</span>
        </div>

        <MenuItem titulo="Sapatos" subItens={sapatosSubItens} />
        <MenuItem titulo="Sandálias" />
        <MenuItem titulo="Botas" />
        <MenuItem titulo="Tênis" />

        <div className={styles.itensPromocional}>
          <span>Outlet</span>
        </div>

      </div>
    </div>

  )
}

export default MenuNav