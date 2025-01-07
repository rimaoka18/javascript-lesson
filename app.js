// Q1
let name = 'Ryo';
let age = 25;

console.log('私のニックネームは' + name + 'です。' + '年齢は' + age + 'です。');

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go']

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強をして見たいです。`)

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age)

//Q4
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

console.log(playerList[1].favorites[1])

//Q5
function calculateAverageAge(players) {
  let sum = 0

  for(let i = 0; i < players.length; i++) {
    sum += players[i].age;
  }

  let AverageAge = sum / players.length;

  return AverageAge;
}

console.log(calculateAverageAge(playerList));

//Q6
function sayHello() {
  console.log('Hello');
}

let sayWorld = function() {
  console.log('World')
}

sayHello();
sayWorld();

// Q7
user.birthday = '2000-09-07';
user.sayHello = function sayHello() {
  console.log("Hello!")
}

user.sayHello()

// Q8
let calc = {};

calc.add = function(x,y) {
  console.log(x + y)
}

calc.add(3,4)

calc.sub = function(x,y) {
  console.log(x - y)
}

calc.sub(20,10);

calc.multi = function(x,y) {
  console. log (x * y);
}

calc.multi(7,7);

calc.div = function(x,y){
  console.log(x / y);
}

calc.div(35,7)


// Q9
function remainder(x,y) {
  return(x % y )
}
console.log(`5 を 3 で割った余りは ${remainder(5,3)} です。`)

// Q10
// このコードでは、変数 x は関数fooの中だけで使えます。これは、x のスコープが関数の中に限定されているからです。
// 関数の外では x を参照できません。x を使いたいときは、関数の中に書いて使います。
// もしくは、関数外に書いてグローバルスコープにすることで、変数 x を参照できます。


// 応用編 問題

// Q1
let randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber)

// Q2
setTimeout(() => {
  console.log('Hello World!')
}, 3000);

//Q3
let num = 7
if (num >= 0) {
  console.log('num is greater than 0');
} else if (num <= 0) {
  console.log('number is less than 0')
} else if (num === 0) {
  console.log('num is 0');
}

//Q4
let numbers = [];
for(i = 0; i < 100; i++) {
  numbers.push(i)
}

console.log(numbers)

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
mixed.forEach(element => {
  if (typeof element === 'number') {
    if (element % 2 === 0 ) {
      console.log('even')
    } else {
      console.log('odd')
    }
  } else {
    console.log('not number')
  }
});
