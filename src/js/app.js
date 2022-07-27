import GameController from './gameController';

const app = document.querySelector('#app');

const startBtn = document.createElement('button');
startBtn.classList.add('start_btn');
startBtn.textContent = 'start';
app.appendChild(startBtn);

const score = document.createElement('p');
score.classList.add('score');
score.textContent = 'attempts left: 5';
app.appendChild(score);

const winScore = document.createElement('p');
winScore.classList.add('win_score');
winScore.textContent = 'score: 0';
app.appendChild(winScore);

const board = document.createElement('div');
board.classList.add('board');
app.appendChild(board);

let cell = null;
/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < 16; i++) {
  cell = document.createElement('div');
  cell.classList.add('cell');
  cell.setAttribute('data-id', i);
  board.appendChild(cell);
}

const gameController = new GameController();
gameController.startGame();
