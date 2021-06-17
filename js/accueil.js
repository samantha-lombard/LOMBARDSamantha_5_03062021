window.onload = getProducts();

function getProducts() {
    fetch("http://localhost:3000/api/cameras")
    .then(response=>response.json())
    .then(response=>insertproduct(response))

    .catch(error=>console.error(error))


}

function insertproduct(products) {
let main = document.getElementById("main");
console.log(products)
for (let i = 0;i< products.length; i++) {
    main.innerHTML += "<div>" + products[i].name + "</div>" + '<img class="prod" src="'+products[i].imageUrl +'">' + '<p>' + products[i].price/100 + '€</p>' + '<a href="produits.html?id='+ products[i]._id + '" >Voir le produit</a>'

}

}

