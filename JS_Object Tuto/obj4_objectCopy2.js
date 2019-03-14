let actor = {
  name: 'Follin',
  age: 12,
}

let box = {item: 'Iron Bar'};
let blood = {bloodType: 'wolf'};

let skillSet = {
  skill_01: 'dash',
  skill_02: 'smash',
  skill_03: 'kick',
}

alert('Object.assignによるマージ');

Object.assign(actor,box,blood,skillSet);


alert('アサイン完了、コンソールにデータを出力します。');

console.log('actor');
for(let key in actor){
  console.log(key + ' => ' + actor[key]);
}

let skillSet2 = {
  skill_01: 'no',
  skill_02: 'no',
  skill_03: 'no',
}

Object.assign(actor,skillSet2);
Object.assign(actor,{
  name: 'Fomid',
  age: 27,
})
alert('アサイン2完了、コンソールにデータを出力します。');

console.log('');


console.log('actor');
for(let key in actor){
  console.log(key + ' => ' + actor[key]);
}
