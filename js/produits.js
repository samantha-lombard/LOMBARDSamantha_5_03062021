const querystring = window.location.search;

const urlparameters = new URLSearchParams(querystring);

const idproduits = urlparameters.get("id");

console.log(idproduits);

window.onload = getProducts();


function getProducts() {

    fetch("http://localhost:3000/api/cameras/" + idproduits)
    .then(response=>response.json())
    .then(response=>insertproduct(response))

    .catch(error=>console.error(error))


}

function insertproduct(products) {
    let main = document.getElementById("main");
    console.log(products)
    
    main.innerHTML += "<div>" + products.name + "</div>" + '<img class="prod" src="'+products.imageUrl +'">' + '<p>' + products.price/100 + '€</p>' + '<a href="produits.html?id='+ products._id + '" >Voir le produit</a>'
    main.innerHTML += "<select id='select'> </select>"
     let select = document.getElementById("select");
    for (let i=0;i<products.lenses.length;i++) {
        select.innerHTML += "<option>" +products.lenses[i] +  " </option>";
    }
    }

