

let buscador = $("#search")
buscador.on('keyup', () =>{
    let buscaCliente = buscador.val().toLowerCase() 
    $.ajax({
        url: "https://mini-shop-rg.herokuapp.com/products",
        type: "GET",
        success: lista => {
            let card = document.querySelector("#card-container")
            card.innerHTML = ''
            
            for(let i of lista){

                let name = i.name.toLowerCase()

                if(name.indexOf(buscaCliente) !== -1 ){
                    card.innerHTML += 
                    `
                    <div class="card-buy">
                        <div class="card-content">
                            <div class="card__img">
                                <img src="${i.image}">
                                <span class="title"></span>
                            </div>
                            <div class="card__txt">
                                <h3 class="card-title">${i.name}</h3>
                                <p class="parrafo">${i.description}</p>
                                <div class="btnCard">
                                    <button class="btn"><i class="fa fa-shopping-cart "></i> $ ${i.price}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
            }
        }
    });
})