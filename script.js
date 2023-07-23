var computer = 0;
var you = 0;
let images = ['images/rock.svg', 'images/paper.svg', 'images/scissors.svg'];

function selectAction(action) {
  switch (action) {
    case 'rock':
      you = 0;
      break;
    case 'paper':
      you = 1;
      break;
    default:
      you = 2;
      break;
  }
  document.getElementById('you_img').src = images[you];
  selectcomputer();
  game();
}

function selectcomputer() {
  computer = Math.floor(Math.random() * 3);
  document.getElementById('computer_img').src = images[computer];
  document.getElementById('computer_img').style = 'background-color:red';
  document.getElementById('you_img').style = 'background-color:blue';
}

function game() {
  document.getElementById('you_img').style.transform = 'rotateY(0deg)';
  document.getElementById('computer_img').style.transform = 'rotateY(0deg)';
  document.querySelector (".you >h2").style.transform = "translateY(0px)";
  document.querySelector(".computer > h2").style.transform = "translateY(0px)";
  if (computer == you) {
    document.getElementById('result').innerHTML = 'DRAW !';
    document.getElementById('result').style = 'color:black';
  } else if (
    (you == 0 && computer == 2) ||
    (you == 1 && computer == 0) ||
    (you == 2 && computer == 1)
  ) {
    document.getElementById('result').innerHTML = 'You Win !';
    document.getElementById('result').style = 'color:green';
    document.getElementById('score_you').innerHTML++;
  } else if (
    (you == 2 && computer == 0) ||
    (you == 0 && computer == 1) ||
    (you == 1 && computer == 2)
  ) {
    document.getElementById('result').innerHTML = 'Computer Win !';
    document.getElementById('result').style = 'color:red';
    document.getElementById('score_computer').innerHTML++;
  }
}

function restart() {
  document.getElementById('you_img').style.transform = 'rotateY(90deg)';
  document.getElementById('computer_img').style.transform = 'rotateY(90deg)';
  document.querySelector (".you >h2").style.transform = "translateY(12vw)";
  document.querySelector(".computer > h2").style.transform = "translateY(12vw)";
  document.getElementById('score_you').innerHTML = 0;
  document.getElementById('score_computer').innerHTML = 0;
  document.getElementById('result').innerHTML = 'Try Again !';
}
