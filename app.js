// Q1 変数
let nickname = 'かすみ';
let age = '25';
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go '];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5 四則演算
let ava = (playerList[0].age + playerList[1].age + playerList[2].age) / 3
console.log (ava);

// Q6 関数
function sayHello (callback){
  console.log('Hello');
  callback();
}
sayHello(
  function(){
      console.log('World');
  }
);

// Q7 メソッド
user.birthday = '2000-09-27';
console.log(user);
user.sayHello = function (){
  console.log('Hello！');
}
user.sayHello();

// Q8 引数
let calc = {
  add: function(x, y){
    console.log(x + y);
  },
  subtract: function(x, y){
    console.log(x = y);
  },
  multiply : function(x, y){
    console.log(x * y);
  },
  divide : function(x, y){
    console.log(x / y);
  }
};
calc.add(3, 4);
calc.subtract(12, 2);
calc.multiply(7, 7);
calc.divide(25, 5);

// Q9 返り値
function remainder(x, y){
  return x % y
}
console.log('5 を 3 で割った余りは' + remainder(5, 3) + 'です。');

// Q10 スコープ
// 変数xは関数fooの中で定義されているためスコープは関数foo内ですが、スコープ外から変数xを参照しようとしてエラーになっている。
