const SEX = {
  man: '男',
  woman: '女'
}

let actor_fomid = makeActor(
  'Fomid',
  255,
  255,
  127,
  255,
  255,
  255,
  SEX.man,
  'Super',
  '俺に触るとかぶれるぜ',
  "よくわからん踊り",
)

let codes ={
  "+9":'roy',
  "+43":'sai',
  "+1":'tol',
  "+9100":'min',
  "+2":'kay',
}

for(let code in codes){
  alert(`${code} = ${codes[code]}`)
}

showActor(actor_fomid);

alert(actor_fomid.name +'の性別は' + actor_fomid['sex']);
alert(`${actor_fomid.name}のスペシャルアタックは${actor_fomid["Super Attack"]}です。`);

//=========================================================================

function makeActor(name,lv,pow,def,spd,mag,special,sex,job,msg,SuperAttack){
  return{
      name,
      lv,
      pow,
      def,
      spd,
      mag,
      special,
      sex,
      job,
      msg,
      'Super Attack':SuperAttack,
  }
}

function showActor(actor) {
  for(let key in actor){
    alert(key + '=' + actor[key]);
  }
}
