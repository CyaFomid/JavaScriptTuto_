let actor = {
  name: 'Follin',
  age: 12,
}

let cloneActor = {};

alert('clone開始');

for(let key in actor){
  cloneActor[key] = actor[key];
  console.log(`actor(${actor.name})の${actor[key]}を、cloneしました。`);
}
console.log('');


alert('クローン完了、コンソールにデータを出力します。');

console.log('actor');
for(let key in actor){
  console.log(actor[key]);
}
console.log('');


console.log('cloneActor');
for(let key in cloneActor){
  console.log(cloneActor[key]);
}
