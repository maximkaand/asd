export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.isDragging = false;

    this.view.textElement.addEventListener(
      "mousedown",
      this.handleMouseDown.bind(this)
    );
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
    document.addEventListener("mouseup", this.handleMouseUp.bind(this));
    this.view.textElement.addEventListener("mousedown", (event) =>
      event.preventDefault()
    );
  }

  handleMouseDown(event) {
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX - this.model.textPosition.x;
    this.startY = event.clientY - this.model.textPosition.y;
  }

  handleMouseMove(event) {
    if (!this.isDragging) return;

    const newX = event.clientX - this.startX;
    const newY = event.clientY - this.startY;

    this.model.setTextPosition(newX, newY);
    this.view.updateTextPosition(newX, newY);
  }

  handleMouseUp() {
    this.isDragging = false;
  }
}
