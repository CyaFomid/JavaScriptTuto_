//1=========================================================================
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//2=========================================================================
let schedule = {};
alert( isEmpty(schedule) );

schedule['8:30'] = 'get up';
alert( isEmpty(schedule) );

function isEmpty(obj) {
  for(let key in obj){
    return false;
  }
  return true;
}

//3=========================================================================
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries){
  sum += salaries[key];
}

alert(sum)

//ここで詰まった。リベンジ=========================================================================
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

for(let key in menu){
  alert( `${key} = ${menu[key]}` );
}

kakeruni(menu);

for(let key in menu){
  alert( `${key} = ${menu[key]}` );
}

function kakeruni(obj){
  for(let key in obj){
    if(typeof obj[key] == 'number'){
      obj[key] *= 2;
    }
  }
}
