import React, { useEffect, useState, useContext } from 'react'
import styles from './Produtos.module.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProducts } from '../../utils.js'
import addCarrinhoIcone from '../../assets/svgs/Icons/IconesProduto/sacola.svg'
import favMarcado from '../../assets/svgs/Icons/IconesProduto/coracao-marcado.svg'
import favDesmarcado from '../../assets/svgs/Icons/IconesProduto/coracao-desmarcado.svg'
import {CarrinhoContext} from '../../context/CarrinhoContext/CarrinhoContext.js'

const Produtos = () => {
    const [produto, setProduto] = useState([])
    const [favoritos, setFavoritos] = useState({});
    const [notificacao, setNotificacao] = useState(null);
    const [notificacaoAtiva, setNotificacaoAtiva] = useState(false);

    //Adiciona ao carrinho vindo do CarrinhoContext
    const {addCarrinho} = useContext(CarrinhoContext)

    useEffect(() => {
           const getTdsProdutos = async () => {
               try {
                   const data = await getProducts();
                   setProduto(data);
   
               } catch (error) {
                   console.error('Erro ao carregar produtos', error)
               }
           }
           getTdsProdutos()
       }, [])

    //Favorita o produto conforme o Id, assim não favorita todos os produtos existentes
    const handleFavorito = (produtoId) => {
        setFavoritos(prevFavoritos => ({
            ...prevFavoritos,
            [produtoId]: !prevFavoritos[produtoId]
        }));
    }

    //Adiciona o produto ao carrinho
    const handleAddCarrinho = (prod) => {
        addCarrinho(prod);
        setNotificacao(prod.name);
        
        // Adiciona a classe de animação no próximo 
        setTimeout(() => {
            setNotificacaoAtiva(true);
        }, 10);

        setTimeout(() => {
            setNotificacaoAtiva(false);
            setTimeout(() => {
                setNotificacao(null);
            }, 400); 
        }, 3000);
    }

    //Configs do slick
    const configsProdutos = {
        dots: false,
        infinite: false,
        slidesToShow: 1.52,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.containerProdutos}>
            <h1>Lançamentos</h1>
            {notificacao && (
                <div className={`${styles.notificacao} ${notificacaoAtiva ? styles.notificacaoAberto : ''}`}>
                    <p><strong>`'{notificacao}'`</strong></p>
                    <p>foi adicionado ao carrinho</p>
                </div>
            )}
            <div className={styles.slideProdutos}>
                {/* exibi os produtos vindo do util.js */}
                <Slider {...configsProdutos}>
                    {produto.map((prod) => (
                        <div key={prod.id} className={styles.produtos}>
                            <div className={styles.imageContainer}>
                                <img
                                    className={styles.produtoImg}
                                    src={prod.image}  
                                    alt="Imagem do produto"
                                />
                                <img className={`${styles.iconeUtil} ${styles.iconeFavorito}`} src={favoritos[prod.id] ? favMarcado : favDesmarcado} onClick={() => handleFavorito(prod.id)}   alt="Adicionar aos favoritos" />
                                <img className={`${styles.iconeUtil} ${styles.iconeCarrinho}`} src={addCarrinhoIcone} onClick={() => handleAddCarrinho(prod)} alt="Adicionar ao carrinho" />
                                {/* exibi em porcentagem o desconto */}
                                {prod.price.isDiscount && (
                                    <span className={styles.descontoTag}>
                                        {`${Math.round(((prod.price.amount - prod.price.isDiscount) / prod.price.amount) * 100)}% OFF`}
                                    </span>
                                )}
                            </div>
                            <p className={styles.produtoNome}>{prod.name}</p>

                            {/* aplica o desconto se houver, se não exibi o preço normal */}
                            {prod.price.isDiscount ? (
                                <div>
                                    <span className={styles.produtoDesconto}>
                                        {prod.price.amount.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </span>
                                    <span className={styles.produtoPreco}>
                                        {" "}
                                        {prod.price.isDiscount.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </span>
                                </div>
                            ) : (
                            
                                <span className={styles.produtoPreco}>
                                    {prod.price.amount.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </span>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
    
}

export default Produtos