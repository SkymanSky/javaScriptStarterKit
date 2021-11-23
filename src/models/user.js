//Model componentlerde kullanıcıya gösterdiğimiz veri tipleridir.

export default class User {
  //oluşturucu, prototyping
  constructor(id, firstName, lastName, city,age) {
    //console.log("User oluştu.");
    //Api den bir user gelecek ve bunu karşılayacak bir yapı frontend de oluşacak.
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
  }
}
