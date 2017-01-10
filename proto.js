window.onload = function () {
  var Animal = function (params) {
    this.name = params.name;
    this.yearsOld = params.yearsOld;
  };
  Animal.prototype.eat = function () {
    return "the animal is eating";
  };
  Animal.prototype.sleep = function () {
    return "the animal is sleeping";
  };

  var Dog = function (params) {
    Animal.apply(this, arguments);
    this.woolColor = params.woolColor;
  };
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.givePaw = function () {
    return 'the dog is giving paw';
  };

  var Dragon = function (params) {
    Animal.apply(this, arguments);
    this.flightSpeed = params.flightSpeed;
  };
  Dragon.prototype = Object.create(Animal.prototype);
  Dragon.prototype.constructor = Dragon;
  Dragon.prototype.fly = function () {
    return 'the dragon is flying';
  };
  Dragon.prototype.spitFire = function () {
    return 'the dragon is spitting fire';
  };

  var myAnimal = new Animal({
    name: 'joker',
    yearsOld: 4
  });
  var myDog = new Dog({
    name: 'bigBull',
    yearsOld: 3,
    woolColor: 'black'
  });
  var myDragon = new Dragon({
    name: 'RoyalFire',
    yearsOld: 3,
    flightSpeed: 50
  });

  document.body.innerHTML = myDog instanceof Animal && myDog instanceof Dog;
  console.log(Dog.prototype.constructor);
  console.log(myDog.name);
  console.log(myDog.givePaw());

  console.log(myDragon.fly());
  console.log(myDragon.flightSpeed);
};
