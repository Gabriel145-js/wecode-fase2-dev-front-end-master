import React, { useState } from 'react';
import styles from './MenuItem.module.scss';
import setaMenu from '../../../assets/svgs/Icons/IconesMenuNav/angulo-direito.svg'

const MenuItem = ({ titulo, subItens }) => {
    const [subMenuAberto, setSubMenuAberto] = useState(false);

    //Abre o submeno so se ter itens
    const toggleSubMenu = () => {
        if (subItens && subItens.length > 0) {
            setSubMenuAberto(!subMenuAberto);
        }
    };

    return (
        <div className={styles.menuItem}>
            <div onClick={toggleSubMenu} className={styles.titMenu}>

                <span className={styles.nomeMenu}>{titulo}</span>

                <span className={`${styles.setaMenu} ${subMenuAberto ? styles.aberto : ''}`}>
                    <img src={setaMenu} alt="Abrir lista de subitens" />
                </span>

            </div>
            
        {/* exibi os subItens se tiverem */}
            {subItens && (
                <ul className={`${styles.subMenu} ${subMenuAberto ? styles.aberto : ''}`}>
                    {subItens.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MenuItem;