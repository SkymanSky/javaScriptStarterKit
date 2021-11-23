//ekran olarak düşünülebilir. Index içerisinde çalıştırılacak dosya.
//hepsiburada da sepetine gittin sepetin detayını gördün yani sepetin componentini gördün.
//snippet userService yazar .js el ile eklenmeli, eğer eklenmediyse.
import { BaseLogger,MongoLogger } from "../crossCuttingConcerns/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

//console.log("user component yüklendi.");

let logger1 = new MongoLogger()

//UserService i kullanmak için implementasyon.
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demirog","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")

userService.add(user1)
userService.add(user2)
//console.log(userService.list()); 
//console.log(userService.getById(1)); 


let customer ={id:1, name:"Engin"}
//prototyping=> objeye olmayan bir özelliği sonradan objeye eklemek.
customer.lastName ="Demiroğ"
//console.log(customer);

console.log("------------------------------------");

userService.laod()

let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","jhdjfdfj")
customerToAdd.type ="customer"
userService.add(customerToAdd)
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());

