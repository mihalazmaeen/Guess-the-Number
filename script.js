'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !!!🎉';
document.querySelector('.number').textContent = '17';
document.querySelector('.score').textContent = '15';
document.querySelector('.guess').value = '25';
*/
let rightNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const dm = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //input

  if (!guess) {
    dm('👀 Input a Number !');
  }

  //right guess
  else if (guess === rightNumber) {
    dm('Bulls Eye !!!🎉');
    document.querySelector('body').style.backgroundColor = '#1fde5b';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = rightNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== rightNumber) {
    if (score > 1) {
      dm(guess > rightNumber ? 'Too Big !!' : 'Too Small !!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dm('You Lost !!!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#c01717';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  rightNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  dm('Whats the Number?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
