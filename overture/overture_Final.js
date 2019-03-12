let inFunc;
let sel = 2;

inFunc = select(sel);

inFunc();

inFunc = show(3);

alert('inFuncに入れた');

inFunc();

//=========================================================================
function select(num){

  switch(num){
    case 0: return () => alert('毒状態です。'); ;break;
    case 1: return () => alert('眠りです。'); ;break;
    case 2: return () => alert('休みです。'); ;break;
    case 3: return () => alert('死にそうです。'); ;break;
    case 4: return () => alert('シアワセです。'); ;break;
    default : return () => alert('認識できねぇ'); ;break;
  }

  return alert('error');
}

function show(num){
  num *= 5;
  return () => alert('inFuncに関数が入りました');
}
