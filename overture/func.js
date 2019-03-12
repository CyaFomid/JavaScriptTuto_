let mama = 5;
const zeto = 3;
let one = 3;

func(mama);
alert('Pzeto' + zeto);

alert('pow:'+ pow_for(one,3));
alert('one = '+ one);



function func(star,papa = 'papaには何も入っていない！'){

  let zeto = 45;

  alert(star);
  alert(papa);
  alert('fZeto'+zeto);
}

function pow(one,two) {
  while(two - 1){
    --two;
    one *= one;
  }
  return one;
}

function pow_for(one,two) {
  for(; 1 < two; two--){
    one *= one;
  }
  return one;
}
