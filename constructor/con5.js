function User(name,age,admin){
//this = {};

  this.name = name;
  this.age = age;
  this.admin = admin;

  //メソッド。変数に無名関数を格納することで、疑似的にオブジェクトに関数を持たせる。
  this.func1 = function(){
    alert('hi! I am ' + name + '.');
    return this;
  }

  this.add = function(num1,num2){
    return num1 + num2;
  }
}

let you = new User('Otoko',25,true);

you.func1();

alert(you.add(25,30) );

//今変数youにはコンストラクタUserから作られたオブジェクトが格納されている。
//このオブジェクトyou単体に新たにプロパティと関数を追加する。

you.newProp = 50;
you.smash = function(){
  alert('smaaaaaaaaaaaaaaaaaaaash!!');
  return this;
}

you.smashArrow = function(){
  alert('SMAAAAAAAAAAAAAAASH!!!!!!!!!!');
  return this;
}

//出力パート
alert('prop = ' + you.newProp );

//smashArrowはアロー関数だとなぜかチェインにならない。
//あと、改行チェインはIE11でも使える。やったね
you
.smash()
.smashArrow()
.smash();
