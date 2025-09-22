import React, { useState, useEffect, useContext } from 'react'
import styles from './Navbar.module.scss'
import menuIcone from '../../assets/svgs/Icons/IconesNavBar/icone-menu.svg'
import searchIcone from '../../assets/svgs/Icons/IconesNavBar/icone-search.svg'
import contaIcone from '../../assets/svgs/Icons/IconesNavBar/icone-conta.svg'
import carrinhoIcone from '../../assets/svgs/Icons/IconesNavBar/icone-carrinho.svg'
import logoBranco from '../../assets/svgs/logos/logo-branco.svg'
import logoPreto from '../../assets/svgs/logos/logo-preto.svg'
import MenuNav from '../MenuNav/MenuNav'
import { CarrinhoContext } from '../../context/CarrinhoContext/CarrinhoContext'

const Navbar = () => {
  const [scrolado, setScrolado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const { carrinho } = useContext(CarrinhoContext); //Pega o carrinho vindo do context

  const handleAbrirMenu = () => {
    setMenuAberto(true);
  };

  const handleFecharMenu = () => {
    setMenuAberto(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      // Define como true se a página for rolada mais de 2 pixels
      const rolarScroll = window.scrollY > 2;
      if (rolarScroll !== scrolado) {
        setScrolado(rolarScroll);
      }
    };
    document.addEventListener('scroll', handleScroll);
    // Limpa o event listener
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolado]);

  return (
    <div className={`${styles.containerNavbar} ${scrolado ? styles.scrolado : ''}`}>
      <div className={styles.iconesUteis}>
        <img className={`${styles.iconePreto} ${styles.iconeMenu}`} src={menuIcone} onClick={handleAbrirMenu} alt="Menu" />
        <img className={styles.iconePreto} src={searchIcone} alt="Buscar" />
      </div>

      <img src={scrolado ? logoPreto : logoBranco} alt="Logo WeCode" />

      <div className={styles.iconesUteis}>
        <img className={styles.iconePreto} src={contaIcone} alt="Minha Conta" />
        <div className={styles.carrinhoContainer}>
          <img className={`${styles.iconePreto} ${styles.iconeCarrinho}/`} src={carrinhoIcone} alt="Carrinho de compras" />

          {/* exibe a quantidade de itens no carrinho */}
          {carrinho.length > 0 && <span className={styles.carrinhoQuatidade}>{carrinho.length}</span>} 
        </div>
      </div>

      <MenuNav aberto={menuAberto} fechado={handleFecharMenu} />

    </div>
  )
}

export default Navbar