import goblinImg from '../img/goblin.png';

export default class Randomize {
  constructor(board, cell) {
    this.board = document.querySelector(`.${board}`);
    this.cells = [...document.querySelectorAll(`.${cell}`)];
    this.activeCell = null;
  }

  getRandom() {
    const random = Math.floor(Math.random() * this.cells.length);
    if (random === this.activeCell) {
      this.getRandom();
    } else {
      this.activeCell = random;
    }
  }

  removeGoblin() {
    if (this.board.querySelector('#goblin')) {
      this.board.querySelector('#goblin').remove();
    }
  }

  showGoblin() {
    this.removeGoblin();
    this.getRandom();
    const goblin = new Image();
    goblin.src = goblinImg;
    goblin.id = 'goblin';
    goblin.classList.add('goblin');
    this.cells[this.activeCell].appendChild(goblin);
    return (+this.cells[this.activeCell].dataset.id);
  }
}
