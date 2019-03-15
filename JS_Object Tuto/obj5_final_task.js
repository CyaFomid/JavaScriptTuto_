let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';

delete user.name;

//=========================================================================

let initObj = {};

alert('initObj is init key? t/f? = ' + isEmpty(initObj));

initObj['inObj'] = 'Yes';

alert('initObj of t/f? = ' + isEmpty(initObj));

function isEmpty(obj) {
  for(key in obj){
    return false;
  }
  return true;
}

//=========================================================================

const admin = {
  user: 'King',
  age: '54'
}

alert(admin.user);

//変えられないのはあくまでも参照先であり、中身の値は変えることができる。
admin.user = 'Civilian';

alert(admin.user);

//=========================================================================

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for(key in salaries){
  sum += salaries[key];
}

alert(sum);

//=========================================================================

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
}

for(key in menu){
  alert(key + ' = ' + menu[key]);
}

multiplyNumeric(menu);

for(key in menu){
  alert(key + ' = ' + menu[key]);
}



function multiplyNumeric(obj) {
  for(let key in obj){
    if(typeof obj[key] == 'number'){
       obj[key] *= 2;
    }
  }
}
