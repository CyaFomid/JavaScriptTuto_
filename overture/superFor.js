test:while(1){
  alert('while-loop');
  for(let i = 0; i < 10; i++){
    let flg = prompt('全部ループ抜ける？ t/f/c:' + i +'回目','t');

    if(flg === 'f'){alert('繰り返しますよ');}
    if(flg === 'c'){alert('もう一回聞くよ'); continue test;}
    if(flg === 't'){alert('全部抜けるよ'); break test;}
  }
}

alert('無限ループ抜けた');
