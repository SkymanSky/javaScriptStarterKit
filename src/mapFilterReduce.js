let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
  { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },
];

// cart Array' i elemanlarını tek tek dolaşır. (iterate eder)
// product burada herşey olabilir her bir elemana verilen takma isimdir. (Alias)
console.log("<ul>");
//cart.map(product=>console.log(product.productName))
cart.map(product=>{
    console.log("<li>"+product.productName+" : "+product.unitPrice*product.quantity+"</li>");
})
console.log("</ul>");

let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2);

let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total);

console.log("----------------------------------------------------------");

function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 });
}

addToCart(cart);

console.log(cart); // cart Array' i referans tip olduğundan addToCart() referansı değiştirir.

let sayi = 10;

function sayiTopla(number) {
  number += 1;
}

sayiTopla(sayi);
console.log(sayi); // Fonksiyona gönderilen sayi değişkeni atomik tip olduğundan fonk değerini değiştirmez.
