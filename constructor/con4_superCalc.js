//解答を見た。かなり難しい。しかも解答も仕様に沿ってない。

//ちょっと今回はあきらめる。

/*
function SuperCalc(){
  //本体
  //つまり「+という変数に格納された無名関数(num1,num2)」という代物が」登録されている。
  powerCalc = function(){
    add = (num1,num2) => {return (num1 + num2); };
    min = (num1,num2) => {return (num1 - num2); };
  };

  spCalc = function(str){
    //受け取った文字列を半角スペースで分離し、配列splitに要素として格納
    split = str.split(" ");
      num1 = +split[0];
      operator = split[1];
      num2 = +split[2];

  //powerCalcにoperatorで受け取った文字は登録されているか？
   //もしくはnum達はNaNではないか？
    if(!powerCalc[operator] || isNaN(num1) || isNaN(num2)){
     return NaN;
   }

   return powerCalc[operator](num1,num2);
  };
}

let calc = new SuperCalc();

alert(calc.spCalc('3 + 7') );
*/
