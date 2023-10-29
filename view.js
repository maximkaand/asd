export class View {
  constructor() {
    this.textElement = document.getElementById("draggableText");
  }

  updateTextPosition(x, y) {
    this.textElement.style.left = `${x}px`;
    this.textElement.style.top = `${y}px`;
  }
}
