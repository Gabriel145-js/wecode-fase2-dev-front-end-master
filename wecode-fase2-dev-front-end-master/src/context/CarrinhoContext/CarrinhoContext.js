import { createContext,useState } from "react";

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({children}) => {
    const [carrinho,setCarrinho] = useState([])

    //Adiciona o produto ao carrinho
    const addCarrinho =(produto) => {
        setCarrinho([...carrinho, produto])
    }
    

    return(
        <CarrinhoContext.Provider value={{carrinho,addCarrinho}}>
            {children}
        </CarrinhoContext.Provider>

    )
    
}