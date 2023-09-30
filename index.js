let homeScore = 0;
let guestScore = 0;
function displayWinner() {
  let displayWinner = document.getElementById('displayWinner');
  if (homeScore === guestScore) {
    displayWinner.textContent = `Home and Guest with equal score of ${homeScore}`;
  }
  if (homeScore > guestScore) {
    displayWinner.textContent = `Home winning by ${
      homeScore - guestScore
    } points `;
  }
  if (homeScore < guestScore) {
    displayWinner.textContent = `Guest winning by ${
      guestScore - homeScore
    } points `;
  }
}

function inrHomeOne() {
  homeScore = homeScore + 1;
  document.getElementById('scorehome').innerText = homeScore;
  displayWinner();
}
function inrHomeTwo() {
  homeScore = homeScore + 2;
  document.getElementById('scorehome').innerText = homeScore;
  displayWinner();
}
function inrHomeThree() {
  homeScore = homeScore + 3;
  document.getElementById('scorehome').innerText = homeScore;
  displayWinner();
}

function inrGuestOne() {
  guestScore = guestScore + 1;
  document.getElementById('scoreguest').innerText = guestScore;
  displayWinner();
}
function inrGuestTwo() {
  guestScore = guestScore + 2;
  document.getElementById('scoreguest').innerText = guestScore;
  displayWinner();
}
function inrGuestThree() {
  guestScore = guestScore + 3;
  document.getElementById('scoreguest').innerText = guestScore;
  displayWinner();
}

function reset() {
  let displayWinner = document.getElementById('displayWinner');

  homeScore = 0;
  guestScore = 0;
  document.getElementById('scorehome').innerHTML = homeScore;
  document.getElementById('scoreguest').innerHTML = guestScore;
  displayWinner.innerHTML = 'Start Game';
}
