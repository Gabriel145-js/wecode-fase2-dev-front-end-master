
export   function getProducts() {
     return new Promise((res) => {
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: '/static/images/produtos/produto-1.png',
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: '/static/images/produtos/produto-2.png',
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 2,
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: '/static/images/produtos/produto-3.png',
                    price: { amount: 159.90, isDiscount: null },
                    id: 3,
               },
          ]);
     });
}

export function getConhecaMais() {
     return new Promise((res) => {
          res([
               {
                    image: '/static/images/bannersConhecaMais/bannerConhecaMais-1.jpg',
                    titulo: 'NOVO LOGO, MESMA ESSÊNCIA.',
                    descricao:'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
                    id: 1 
               },
               
               {
                    image: '/static/images/bannersConhecaMais/bannerConhecaMais-2.jpg',
                    titulo: 'É AMANHÃ.',
                    descricao:'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
                    id: 2
               },
               
               {
                    image: '/static/images/bannersConhecaMais/bannerConhecaMais-3.jpg',
                    titulo: 'Descubra o glamour em cada passo..', 
                    descricao:'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨',
                    id: 3 
               },
               
          ])
     })
}      