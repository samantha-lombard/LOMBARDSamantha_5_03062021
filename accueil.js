window.onload = getProducts();

function getProducts() {
    fetch("http://localhost:3000/api/cameras")
    .then(response=>response.json())
    .then(response=>insertproduct(response))

    .catch(error=>console.error(error))


}

function insertproduct(products) {
let main = document.getElementById("main");

for (let i = 0;i< products.length; i++) {
    main.innerHTML += "<div>" + products[i].name + "</div>"
}
}