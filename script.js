let products = [
    {name: "Luxury Jacket", price: 120, image: "item1.jpg"},
    {name: "Classic Shirt", price: 80, image: "item2.jpg"},
    {name: "Modern Outfit", price: 150, image: "item3.jpg"}
];

let cart = [];

let container = document.getElementById("products");

products.forEach(p => {
    container.innerHTML += `
    <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    </div>
    `;
});

function addToCart(name, price) {
    cart.push({name, price});
    alert(name + " added to cart");
}

function checkout() {
    let message = "Hello, I want to order:\n";

    cart.forEach(item => {
        message += item.name + " - $" + item.price + "\n";
    });

    window.open("https://wa.me/250795000704?text=" + encodeURIComponent(message));
}