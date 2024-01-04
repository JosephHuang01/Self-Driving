class GraphEditor {
    constructor(canvas, graph) {
        this.canvas = canvas;
        this.graph = graph;

        this.ctx = this.canvas.getContext("2d");

        this.selected = null;
        this.hovered = null;

        this.#addEventListeners();
    }

    #addEventListeners() {
        this.canvas.addEventListener("click", (evt) => {
            const mouse = new Point(evt.offsetX, evt.offsetY);
            this.selected = getNearestPoint(mouse, this.graph.points, 10)  || new Point(mouse.x, mouse.y);
        });
    }

    display() {
        this.graph.draw(this.ctx);
        if (this.hovered) {
            this.hovered.draw(this.ctx, { fill: true });
        }
        if (this.selected) {
            this.selected.draw(this.ctx, { outline: true });
        }
    }
}