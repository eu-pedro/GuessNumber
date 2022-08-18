const form = document.querySelector('#form')
form.addEventListener('submit', handleSubmit)
var btn = document.querySelector('#btnRestart')
btn.addEventListener('click', restart)



const Guess = {
  max: 10,
  attemptsNumber: 0,
  numberDrawn: function randomValue(){
    return Math.round(Math.random() * this.max)
  }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
  attempt.innerHTML = "Tentativa: " + value
}


function handleSubmit(e){
  let status = document.getElementById('status')
  let attempt = document.querySelector('#attempt')
  let result = document.querySelector('#result')

  e.preventDefault()

  let kick = document.querySelector("#kick").value
  if(!kick){
    alert('Digite algum valor!')
    return;
  }
    updateAttempt(attempt, ++Guess.attemptsNumber)
  

  if(numberDrawn == kick){
    playAgain();
    status.innerHTML = "Parabéns, você acertou!";
    result.style.transition = "0.4s";
    result.style.backgroundColor = '#37c978';
    result.style.color = "#fff";
    status.style.color = "#fff";
    clear();

  } else if(numberDrawn > kick ){
    status.innerHTML = "O número é maior"
    status.style.color = "#DE4251"
    clear()
  } else if(numberDrawn< kick){
    status.innerHTML = "O número é menor"
    status.style.color = "#DE4251"
    clear()
  }


}

function playAgain(){
  document.querySelector('#btnRestart').style.display = "flex";
}

function restart(){
  document.location.reload(true);
}
function clear(){
  document.getElementById('kick').value = ''
}

console.log(Math.round(Math.random() * 10) )