/*
買い物後の所持金を16・256・65536で割った結果に応じて、
(所持金 + [所持金÷256] + [所持金÷65536])を16で割った余りが1か3の時にもらえます。
*/

let gold = 0;

for(gold = 0; gold <= 1024; gold++){
  if(calcFukubikiken(gold) % 16 === 1 || calcFukubikiken(gold) % 16 === 3){
    console.log(gold);
  }
}

//=========================================================================

function calcFukubikiken(gold) {
  return (gold + (Math.floor(gold / 256)) + (Math.floor(gold / 65536)) / 16);
}
