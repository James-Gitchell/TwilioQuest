








class Materializer{
    
    constructor(target) {
        this.target = target;
        this.activated = false;
     }
     activate(){
        this.activated = true;
     }
     materialize(){
        if (this.activated === true){return this.target}
        
}

   


}
/*
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  user.sayHi();
*/
/*
It should have:

a property called target that is set equal to the first argument of the constructor
an activated property that defaults to false
an instance function called activate that sets activated to true
an instance function called materialize that returns the value of an instance's target property
 if the activated property is set to true. Otherwise, it returns undefined (nothing is returned).*/

