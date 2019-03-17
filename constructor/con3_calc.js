function Calc(){
  this.read = function(){
    this.num1 = +prompt('num1?',0);
    this.num2 = +prompt('num2?',0);
  };
  this.sum = function(){
    return this.num1 + this.num2;
  };
  this.mul = function(){
    return this.num1 * this.num2;
  };
}

function ProgCalc(defValue) {
  this.value = defValue;

  this.read = function(){
    this.value += +prompt('add value?',0);
  }
}

const calc = new Calc();

calc.read();

alert(calc.sum() );
alert(calc.mul() );

//=========================================================================

let prog = new ProgCalc(5);

alert('start prog = ' + prog.value );

prog.read();
prog.read();

alert('now prog = ' + prog.value );
