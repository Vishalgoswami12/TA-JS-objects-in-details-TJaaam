let animalsMethod={
    eat: function(location){
        this.location=location;
        alert(`I live in ${this.location} and I can eat`)
    }
    changeLocation: function(newLocation){
        this.location=newLocation;
        return this.location;
    }
    summary: function(){
        return  `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}
//Dog

let dogMethod={
    bark:function(){
        alert (`I am ${this.name} and I can bark 🐶`)
    }
    changeName:function(newName){
        this.name=newName;
        return this.name;
    }
    changeColor:function(newColor){
        this.color=newColor;
        return this.color;
    }
    summary:function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

///Cat
let catMethod={
    meow:function(){
        alert (`I am ${this.name} and I can do mewo meow 😹`)
    }
    changeName:function(newName){
        this.name=newName;
        return this.name;
    }
    changeColorOfEyes:function(newColor){
        this.color=newColor;
        return this.color;
    }
    summary:function(){
        return  `I am ${this.name} and the color of my eyes are ${this.color}. I can also do meow meow`
    }
}

Object.setPrototypeOf(dogMethods,animalsMethods);
Object.setPrototypeOf(catMethods,animalsMethods);

function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalsMethods);
    this.location = location;
    this.numberOfLegs = numberOfLegs;
    return animal; 
}
function createDog(name,color){
    let dog=Object.create(dogMethod);
    this.name=name;
    this.color=color;
    return dog;
}
function createCat(name,colorOfEye){
    let cat=Object.create(catMethod);
    this.name=name;
    this.color=colorOfEye;
    return cat;
}