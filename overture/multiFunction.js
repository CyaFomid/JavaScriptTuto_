alert('testかいし');

let msg = 'y? n?'

main(msg,funcA,funcB);

//====================================================
function funcA(){
  alert('funcAだよ');
}

function funcB(){
  alert('funcBです');
}

function main(question, ok, no){

  let bool = confirm(question);
  if(bool === true){
    ok();

  }else if(bool === false){
    no();

  }else{
    alert('error');
  }
}
