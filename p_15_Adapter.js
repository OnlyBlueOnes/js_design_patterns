class OldCalculator {
    constructor() {
      this.commands = function(n1, n2, command) {
        switch (command) {
          case 'add':
            return n1 + n2;
          case 'substract':
            return n1 - n2;
          default:
            return NaN;
        }
      };
    }
  }
  class NewCalculator {
    constructor() {
      this.add = function(n1, n2) {
        return n1 + n2;
      };
      this.substract = function(n1, n2) {
        return n1 - n2;
      };
    }
  }
  class Adapter {
    constructor() {
      const newCal = new NewCalculator();
  
      this.commands = function(n1, n2, command) {
        switch (command) {
          case 'add':
            return newCal.add(n1, n2);
          case 'substract':
            return newCal.substract(n1, n2);
          default:
            return NaN;
        }
      };
    }
  }
  console.log("\n15: Adapter: \n");
  const oldCal = new OldCalculator();
  console.log(oldCal.commands(12, 6, 'add'));
  
  const newCal = new NewCalculator();
  console.log(newCal.add(12, 6));
  
  const adaptedCal = new Adapter();
  console.log(adaptedCal.commands(12, 6, 'add'));