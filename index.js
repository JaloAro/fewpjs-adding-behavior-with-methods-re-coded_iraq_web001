// Your code here

class Cat {
  constructor(name,sex){
    this.name=name
    this.sex=sex
  }
  
  speak(){
    return ` ${this.name} say meow`
  }

}




class Dog {
  constructor(name,sex){
     this.name=name
    this.sex=sex
  }
  
   speak(){
      return ` ${this.name} say woof`
  }
  
}

class Bird {
  constructor(name,sex){
     this.name=name
    this.sex=sex
  }
  
   speak(){
            return  this.sex==male? ` it is me ${ this.name}`: `${this.name} say squawk`
  }
  
}