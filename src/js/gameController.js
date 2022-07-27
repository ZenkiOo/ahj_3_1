import Randomize from './randomize';

export default class GameController {
  constructor() {
    this.startBtn = document.querySelector('.start_btn');
    this.score = document.querySelector('.score');
    this.winScore = document.querySelector('.win_score');
    this.randomize = new Randomize('board', 'cell');
    this.idx = 0;
    this.scoreCount = 0;
    this.runTimer = null;
    this.isRunning = false;
    this.goblinIdx = null;
    this.step = false;
  }

  addListeners() {
    this.startBtn.addEventListener('click', () => {
      this.start();
    });
    [...document.querySelectorAll('.cell')].forEach((item) => {
      item.addEventListener('click', (e) => this.onMouseClick(e));
    });
  }

  startGame() {
    this.addListeners();
  }

  onMouseClick(e) {
    if (this.step) return;
    if (+e.target.closest('.cell').dataset.id === this.goblinIdx) {
      this.idx -= 1;
      this.scoreCount += 1;
      document.getElementById('goblin').remove();
      this.step = true;
    }
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.runTimer = setInterval(() => {
        this.goblinIdx = this.randomize.showGoblin();
        this.idx += 1;
        this.score.textContent = `attempts left: ${6 - this.idx}`;
        this.winScore.textContent = `score: ${this.scoreCount}`;
        this.step = false;
        if (this.idx > 5) this.stop();
      }, 1000);
    } else this.stop();
  }

  stop() {
    if (this.isRunning) {
      clearInterval(this.runTimer);
      this.isRunning = false;
      this.idx = 0;
      this.scoreCount = 0;
    }
  }
}
