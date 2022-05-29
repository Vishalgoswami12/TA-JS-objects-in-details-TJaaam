# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.


function usersData ( name, id, noOfProjects ){
  let userData = {};
  userData.name = name;
  userData.id = id;
  userData.noOfProjects = noOfProjects;

  userData.getProjects = function(){
    return userData.noOfProjects;
  };
  userData.changeName = function(newName){
    // userData.name = newName;
    return userData.name;
  };
  userData.incrementProject = functionO(){
    return userData.noOfProject++;
  };
  userData.decrementProject = functionO(){
    return userData.noOfProject--;
  };
}

// Prototypal Pattern 

let userDataMethods = {

  getProjects : function(){
    return userData.noOfProjects;
  },
  changeName : function(newName){
    // userData.name = newName;
    return userData.name;
  },
  incrementProject : functionO(){
    return userData.noOfProject++;
  },
  decrementProject : functionO(){
    return userData.noOfProject--;
  },
};

function usersData( name, id, noOfProject ){
  let userData = Object.create(userDataMethods);
  userData.name = name;
  userData.id = id;
  userData.noOfProject = noOfProject;
  return userData;
}

// Pseudclassical

function usersData( name, id, noOfProject ){
  this.name = name;
  this.id = id;
  this.noOfProject = noOfProject;
}

  userData.prototype ={

  getProjects : function(){
    return this.noOfProjects;
  },
  changeName : function(newName){
    // this.name = newName;
    return this.name;
  },
  incrementProject : function(){
    return this.noOfProject++;
  },
  decrementProject : function(){
    return this.noOfProject--;
  },
}

// Class Pattern 

class UserData {
  constructor( name, id, noOfProject ){
    this.name = name;
    this.id = id;
    this.noOfProject = noOfProject;
  }
  getProjects(){
    return this.noOfProjects;
  }
  changeName(newName){
    // this.name = newName;
    return this.name;
  }
  incrementProject(){
    return this.noOfProject++;
  }
  decrementProject(){
    return this.noOfProject--;
  }
}