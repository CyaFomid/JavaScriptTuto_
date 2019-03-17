function User(name){
  this.name = name;
  this.isAdmin = false;

  //()をつける場所、functionの後に付けるべきなのをmyName()としていた。
  this.myName = function(){
    alert('Hi! My name is '+ this.name);
  };

  this.myAdmin = function(){
    if(this.isAdmin){
      alert('admin!');
    }else{
      alert('not admin.');
    };
  };
};

let capsuleUser = function(){
  this.name = 'cap';
  this.isPan = 'false';
};

let user = new User('Fey');
let admin = new User('Adoll');

admin.isAdmin = true;

alert(user.name);
alert(user.isAdmin)

alert(admin.name);
alert(admin.isAdmin);

//new.target=========================================================================
alert('以下、コンストラクタからのオブジェクトメソッド')

user.myName();
user.myAdmin();

admin.myName();
admin.myAdmin();
