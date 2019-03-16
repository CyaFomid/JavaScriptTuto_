//"use strict";

//thisとオブジェクトメソッド=========================================================================
let actor = {
  name: 'Roy',
  age: 15,

  seyHi(){alert('Hallo!');},
  seyAge(){alert('My age is' + this.age );},
};//オブジェクトの後にはセミコロン必須とのこと

actor.seyHi();
actor.seyAge();

//↑ここまでは良い。以下は実験=========================================================================

/*
function seyNum() {
  alert('うおおおおおお' + this.age);
}
*/

actor.method = seyNum;

actor.method();
//actor.seyHi();

//=========================================================================

function seyNum() {
  alert('うおおおおおお' + this.age);
};
