//ekran olarak düşünülebilir. Index içerisinde çalıştırılacak dosya.
//hepsiburada da sepetine gittin sepetin detayını gördün yani sepetin componentini gördün.
//snippet userService yazar .js el ile eklenmeli, eğer eklenmediyse.
import { BaseLogger,MongoLogger } from "../crossCuttingConcerns/logger.js";
import { BaseValidator,CustomerValidator } from "../crossCuttingConcerns/validator.js";
import Customer from "../models/customer.js";
import Employee from "../models/employee.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

//console.log("user component yüklendi.");



//UserService i kullanmak için implementasyon.


//let user1 = new User(1,"Engin","Demirog","Ankara")
//let user2 = new User(2,"Baran","Gökçekli","Muğla")

//userService.add(user1)
//userService.add(user2)
//console.log(userService.list()); 
//console.log(userService.getById(1)); 


//let customer ={id:1, name:"Engin"}
//prototyping=> objeye olmayan bir özelliği sonradan objeye eklemek.
//customer.lastName ="Demiroğ"
//console.log(customer);

console.log("------------------------------------");

let logger1 = new MongoLogger()

let validator1 = new CustomerValidator()


let userService = new UserService(logger1,validator1)

userService.laod()

/*let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","sdsd")
customerToAdd.type ="customer"

let customerToAdd2 = new Employee(1,"Aslan","Doğan","Ankara",21)
customerToAdd2.type ="employee"


userService.add(customerToAdd)
userService.add(customerToAdd2)*/
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
// console.log(userService.getCustomersSorted());

