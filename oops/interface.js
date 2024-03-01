/* // "Interface" using object shape
const CarInterface = {
    start: function() {
      throw new Error('start method must be implemented');
    },
    stop: function() {
      throw new Error('stop method must be implemented');
    },
  };
  
  // Implementing the interface
  class Car {
    start() {
      console.log('Car started');
    }
  
    stop() {
      console.log('Car stopped');
    }
  }
  
  // Checking if an object adheres to the "interface"
  function implementsCarInterface(obj) {
    for (const method of Object.keys(CarInterface)) {
      if (typeof obj[method] !== 'function') {
        return false;
      }
    }
    return true;
  }
  
  const myCar = new Car();
  
  // Check if myCar adheres to the CarInterface
  if (implementsCarInterface(myCar)) {
    myCar.start();
    myCar.stop();
  } else {
    console.error('The object does not implement the required interface.');
  }

   */

 /*  const o={
    generate:function(){
        console.log("welcome");
        return 1;
    }
  }
 console.log(o.generate()); */
 