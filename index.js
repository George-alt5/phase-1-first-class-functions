const { returns } = require("chai-spies");

 function receivesAFunction(callback) {
callback()
}

function returnsANamedFunction() {
  function beforeAll() {
  }
  return beforeAll;
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}

    
