
/*  функция length для определения длинны объекта

let obj = {
    phone: 'iPhone',
    company: 'Apple',
    model:  10
};

let count = Object.keys( obj ).length;
console.log( count ); 

*/

let tests = [  
];

console.log(tests, typeof tests);

while (true) {
  let choice = prompt('1. Ввод условий теста; 2. Пройти тест; 3. Выход.'); 
  if (choice == '1') {
      writeTestArr();
  } else if (choice == '2') {
      passTest();
  } else if (choice == '3') {
      userExit();
      break;
  }
}


function writeTestArr() {
  while (true) {
     let enterAgain = confirm('Хотие ввести тесты?');
      if (!enterAgain) {
           break;
      }
      tests.push(letQuestion());
  }
}

function letQuestion() {
  let questionArr = [];
  questionArr.question = prompt('Вопрос:');
  questionArr.answer = confirm('Верно/Неверно');
  return questionArr;
}


function passTest() {
  let correctAnswerCount = 0;
  for (let i = 0; i < tests.length; i++ ) {
      let question = tests[i].question + ' ?';
      let answer = tests[i].answer;
  
      let userAnswer = confirm(question);
  
      if (answer == userAnswer) {
          console.log('Правильно');
          correctAnswerCount ++;
      } else {
          console.log('Неправильно');
      }
  }
  alert(`Результаты тестов: ${correctAnswerCount} / ${tests.length}`);
}

function userExit() {
  alert('Выход');
}



