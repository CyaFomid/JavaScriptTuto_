//実験しただけの糞コード。これは酷過ぎる=========================================================================

function makeActor(name,age,type){
  return{
    name,
    age,
    type,
    showName(){return alert('name = ' + this.name);},
    showAge(){return alert('age = ' + this.age);},
    showType(){return alert('type = ' + this.type);},
    showParameter(){
      alert('全表示開始');
      for(let key in this){
        //this.keyだと正常に動かない。this[key]だと意図したとおりに動いた
        if(typeof this[key] != "function"){
          alert(this.name + ' of ' + key + ' = ' + this[key]);

        }else{
          alert(this.name + ' of ' + key + ' = ' + 'オブジェクトメソッドです');

        }
      }
      alert('全表示終了');
    },
    //以下は失敗作。これだと代入用のメソッドになっちゃうね。修正する気はない。
    /* showAll
    showAll(){
      return () => {
        alert('全表示開始');
        for(let key in this){
          alert(this + ' of ' + this.key + ' = ' + this[key]);
        }
        alert('全表示終了');
      };
      //=========================================
    },
    */
    ref(){return this;},
  };
};

let serum = makeActor('Serum',25,'dog');
let corin = makeActor('Corin',14,'man');

serum.showParameter();
corin.showParameter();
