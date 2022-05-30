function CreateAnimals(location,numberOfLegs){
    this.location=location;
    this.numberOfLegs=numberOfLegs;
}

CreateAnimals.prototype={
    eat:function(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation:function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary:function(){
        return 
    }
}

function CreateDog(name,color){
    CreateAnimals.apply(this,[location,numberOfLegs])
    this.name=name;
    this.color=color;
}
CreateDog.prototype={
    bark:function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName:function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor:function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary:function(){
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
function CreateCat(name,coloOfEyes){
   CreateAnimals.apply(this,[location,numberOfLegs])
   this.name=name;
   this.coloOfEyes=coloOfEyes
}
CreateCat.prototype={
    meow:function(){
        alert `I am ${this.name} and I can do mewo meow 😹`
    },
    changeName:function(newName){
        this.name=newName;
    },
    changeColorOfEyes:function(newColor){
        this.color=newColor;
    },
    summar:function(){
        return `I am ${this.name} and the color of my eyes are ${this.color}. I can also do meow meow`
    }
}

Object.setPrototypeOf(CreateDog.prototype,CreateAnimals.prototype);
Object.setPrototypeOf(CreateCat.prototype,CreateAnimals.prototype);