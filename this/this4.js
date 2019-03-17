let calc = {
  read(){
    //prompt、最初に+を付けてnumber型にしないとStringとして解釈されるっぽい。
    this.prop1 = +prompt('num1? = ',0);
    this.prop2 = +prompt('num2? = ',0);
  },
  sum(){
    return this.prop1 + this.prop2;
  },
  mul(){
    return this.prop1 * this.prop2;
  }
}

calc.read();
alert( calc.sum() );
alert( calc.mul() );
