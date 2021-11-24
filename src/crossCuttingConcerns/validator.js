import DataError from "../models/dataError.js"; 

let requiredFields=[]


export class BaseValidator{

    /*setValidationFieldsForUser(){
        let requiredFields ="id firstName lastName city age".split(" ")
        this.requiredFields = requiredFields
        return requiredFields;
    }*/

    validate(user){
        //requiredFields=this.requiredFields;
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
}

export class CustomerValidator extends BaseValidator{
    setValidationFieldsForCustomer(){
        
        let requiredFields ="id firstName lastName city age creditCardNumber".split(" ")
        //console.log(requiredFields);
        //requiredFields=this.requiredFields
        return requiredFields
    }

}

export class EmployeeValidator extends BaseValidator{
    setValidationFieldsForEmployee(){
        let requiredFields ="id firstName lastName age city salary".split(" ")
        this.requiredFields=requiredFields
        return requiredFields
    }
    
}