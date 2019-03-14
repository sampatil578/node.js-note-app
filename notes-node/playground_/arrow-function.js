var square = (x) => x*x;

console.log(square(9));


var user = {
  name: 'sammy',
  sayhi: () => {
    console.log(`hi I am ${user.name}`);
  }
};

user.sayhi();
