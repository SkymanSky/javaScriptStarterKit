/* console.log("Sepete eklendi.!");

console.log("Sepete eklendi.!");

console.log("Sepete eklendi.");

console.log("Sepete eklendi."); */

//function addToCart(productName="Elma",quantity) {
//Default parametreler sona yazılır.
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi ürün: "+productName+" adet: "+ quantity);
}

// addToCart()
// addToCart(14)
// addToCart(["Salata","Patlıcan","Marul"])
// addToCart("Karpuz")
addToCart("Yumurta",10)
addToCart("Limon")
addToCart(15)

let sayHello = ()=>console.log("Hello World."); // Arrow function, Tek satırda {} lere gerek yoktur.
sayHello()

//Classic Function. There is a difference between two types of function defination is "this" keyword usage.
let sayHello2 = function() {
    console.log("Hello World 2");
}

sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}



addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 ={prodcutName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün: "+product.prodcutName);
    console.log("Adet: "+product.quantity);
    console.log("Fiyat: "+product.unitPrice);
}

addToCart3(product1)

//referans tip örneği, bellekte heap kısmında referans tutulur.
let product2 ={prodcutName:"Elma",unitPrice:10,quantity:5}
let product3 ={prodcutName:"Elma",unitPrice:10,quantity:5}
product2 = product3
product2.prodcutName="KARPUZ"
console.log(product3.prodcutName);


//değer tip örneği, bellekte stack kısmında değer tutulur.
let sayi1 = 10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1);

function addToCart4(x) {
    //products bu süslü parantezler içerisinde yani scope ta tanımlanmadı ise bir üst global scope bakılır.
    //Bir üst global scope ta products tanımlı olduğundan fonksiyon parametrasine x verilse bile kod hata vermez.
    console.log(products);
}

let products =[
    {product1},
    {product2},
    {product3}
]

addToCart4(products)

function add(...numbers) { //rest ... operatörü, değişken önüne 3 nokta, her zaman rest operatörü alacak olan 
                            //fonksiyon parametresi son fonk parametresi olmalıdır.
    //console.log(numbers);
    let total=0
    for (let i = 0; i < numbers.length; i++) {
       //console.log(numbers[i]);
       total = total+numbers[i]
    }
    console.log(total);
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers =[30,10,500,600,120]
console.log(Math.max(...numbers));

//Array içerisindeki objeleri farklı değişkenlere atamak Destructuring (parçalamak) olarak adlandırılır.
let [icAnadolu, marmara,karadeniz,[icAnadoluSehirler]] = [ //değikenler
    {name:"İç Anadolu",population:"20M" }, //obje
    {name:"Marmara",population:"30M" },
    {name:"Karadeniz",population:"10M" },
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icAnadolu);
console.log(marmara);

console.log(icAnadolu.name);
console.log(marmara.population);
console.log(icAnadoluSehirler);

//Object destructuring
let newProductName,newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice, quantity:newQuantity}
={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName);