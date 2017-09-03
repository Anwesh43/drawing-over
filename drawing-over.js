
document.onreadystatechange = () =>{
    var screen = new DrawingOverScreen(document.body.offsetWidth,document.body.offsetHeight)
    screen.handleShapeCreation()
}
class DrawingOverScreen {
    constructor(w,h) {
        this.init(w,h)
    }
    init(w,h) {
        this.canvas = document.createElement('canvas')
        this.canvas.width = w
        this.canvas.height = h
        this.canvas.style.position = 'absolute'
        this.canvas.style.left = 0
        this.canvas.style.top = 0
        document.body.appendChild(this.canvas)
        this.shapes = []
        this.context = this.canavs.getContext('2d')
    }
    handleShapeCreation() {

    }
    drawShapes(context) {
        context.globalAlpha = 0
        context.fillRect(0,0,canvas.width,canvas.height)
    }
}
