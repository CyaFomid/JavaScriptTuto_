//値渡し
let fire = "fire";
let copy = fire;

//参照渡し
let userName = {name:'John'};
let mamaName = {name:'An'};

alert('user = ' + userName.name);
alert('mama = ' + mamaName.name);

let numReference = userName;
alert('numR = ' + numReference.name);

numReference = mamaName;
alert('numR = ' + numReference.name);
