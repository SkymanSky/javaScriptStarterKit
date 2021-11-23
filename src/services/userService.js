// user ile ilgili fonksiyonları burada gruplarız

import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

// export dışarıdan import edileceği anlamına gelir.
export default class UserService {
  constructor(loggerService) {
    //this.users = [];
    this.employees = [];
    this.customers = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  laod() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }

          break;

        case "employee":
          if (!this.checkEmployeeValidityForErrors(user)) {
            this.employees.push(user);
          }

          break;

        default:
          this.errors.push(new DataError("Wrong user type", user));
          break;
      }
    }
  }

  checkCustomerValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }

    if (Number.isNaN(Number.parseInt(user.age))) {
      hasErrors=true
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number.`, user)
      );
    }

    return hasErrors;
  }

  checkEmployeeValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrors=true
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number.`, user)
      );
    }
    return hasErrors;
  }

  add(user) {
    //console.log("Kullanıcı eklendi. " + user);
    //this.users.push(user);

    switch (user.type) {
      case "customer":
        if(!this.checkCustomerValidityForErrors(user)){
          this.customers.push(user);
        }
        
        break;
      case "employee":
        if(!this.checkEmployeeValidityForErrors(user)){
          this.employees.push(user);
        }
        
        break;

      default:
        this.errors.push(
          new DataError("This user cannot be added. Wrong user type", user)
        );
        break;
    }

    this.loggerService.log(user);
  }

  listCustomers() {
    //console.log("Kullanıcılar listelendi.");
    return this.customers;
  }

  getCustomerById(id) {
    //console.log("Kullanıcı id sine göre listelendi.");
    return this.customers.find((u) => u.id === id);
  }

  getCustomersSorted(){
    return this.customers.sort((customer1,customer2)=>{
      if(customer1.firstName<customer2.firstName){
        return -1;
      }else if(customer1.firstName===customer2.firstName){
        return 0
      }else{
        return 1
      }
    })
  }

}
