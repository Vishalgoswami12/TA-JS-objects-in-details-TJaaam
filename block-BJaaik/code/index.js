class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(){
        alert("I am eating")
    }
    sleep(){
        alert ("I am sleeping")
    }
    walk(){
        alert ("I am walking")
    }
}

class Player extends Person{
    constructor(sportsName){
        this.sportsName=sportsName;
    }
    play(){
        alert (`I play ${this.sportsName}`)
    }
}

class Cricketer extends Player{
    constructor(teamName){
        this.teamName=teamName;
        alert(`I am playing cricket from ${this.teamName}`)
    }
}

class Teacher extends Person{
    constructor(instituteName){
        this.instituteName = instituteName;
    }
    teach(){
        alert(){
            alert(`I am teaching in ${this.instituteName}`)
        }
    }
}

class Artist extends Person{
    constructor(kind){
        this.kind = kind;
    }
    createArt(){
        alert(`I create ${this.kind} kind of art`)
    }
}