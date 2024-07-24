//requisição assincrona



//consulta o Json de products
const getProducts = async () => {
    const response = await fetch('js/products.json')
    const data = await response.json()
    console.log(data)
    return data
}

// Gera os cards de acordo com a consulta da função do getProducts
const generateCard = async () => {
    const products = await getProducts()
    console.log(products)
    products.map(product => {
        let card = document.createElement('div')
        card.classList.add('card_product')

        card.innerHTML = `
        
        <figure>
            <img src="/src/images/air-jordan-1-mid-dutch-green-1-400.png" alt="">
        </figure>

        <div class="card_product_details">
            <h4>Air Jordan 1 Mid Dutch Green</h4>
        <h5>Tênis Air Jordan</h5>
        </div>
        <div class="price">
            <h6>R$ 1.199,00</h6>
        </div>
    
        `

        const listaProdutos = document.querySelector('.list_product')
        listaProdutos.appendChild(card)

    })

    generateCard()

}

