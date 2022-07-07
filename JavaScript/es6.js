'use strict';

// 1. Shorthand property names
{
  const ellie1 = {
    name : 'Ellie',
    age : '18',
  };

  const name = 'Ellie';
  const age = '18';

  // Bad
  const ellie2 = {
    name : name,
    age : age,
  };

  // Good
  const ellie3 = {
    name,
    age,
  };
}

// 2. Destructuring Assignment
{
  // object
  const student =  {
    name : 'Anna',
    level : 1,
  };

  // Bad
  { 
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // Good
  {
    const { name, level } = student;
    console.log(name, level);

    const { name : studentName, level : studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array
  const animals = ['🐶', '😽'];

  // Bad
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // Good
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

// 3. Spread Syntax
{
  const obj1 = {key : 'key1'};
  const obj2 = {key : 'key2'};
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, {key : 'key3'}];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = {...obj1};
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🍑', '🍓'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog1 : '🐕' };
  const dog2 = { dog2 : '🐶'};
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

// 4. Default parameters
{
  // Bad
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('Hello');
    printMessage();
  }

  // Good 
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('Hello');
    printMessage();
  }
}

// 5. Ternary Operator
{
  const isCat = true;

  // Bad
  {
    let component;
    if (isCat) {
      component = '😸';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // Good
  {
    const component = isCat ? '😸' : '🐶';
    console.log(component);
    console.log(isCat ? '😸' : '🐶');
  }
}

// 6. Template Literals
{
  const weather = '🌤';
  const temperature = '16';

  // Bad
  console.log(
    'Today weather is ' + weather + ' and temperature is ' + temperature + '.'
  );

  // Good
  console.log(`Today weather is ${weather} and temperature is ${temperature}.`);
}