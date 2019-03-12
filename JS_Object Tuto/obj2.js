//値渡し
let fire = "fire";
let copy = fire;

//参照渡し
let admin = {};
let operator = {};
let userName = {name:'John'};
let mamaName = {name:'An'};


alert('user = ' + userName.name);
alert('mama = ' + mamaName.name);

let numReference = userName;
alert('numR = ' + numReference.name);

numReference = mamaName;
alert('numR = ' + numReference.name);

//この参照渡しと厳密等価の仕様を使えば、管理者チェックが作れるのでは？？

operator = userName;
admin = userName;

operator = mamaName;

if(admin === operator){
  alert('管理者様、ようこそ！')
}else{
  alert('貴様、管理者ではないな！');
}

//yap
