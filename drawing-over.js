
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
class Shape {
    constructor() {
        this.points = []
    }
    draw(context) {
        context.beginPath()
        this.points.forEach((point,index)=>{
            if(index == 0) {
                context.moveTo(point.x,point.y)
            }
            else {
                context.lineTo(point.x,point.y)
            }
        })
        context.stroke()
    }
    addPoint(x,y) {
        this.points.push(new Point(x,y))
    }
}
class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
}
class MouseHandler {
    constructor(screen) {
        this.screen = screen
    }
    handleMouse() {
        this.down = false
        this.screen.canvas.onmousedown = (event) => {
            if(!this.down) {
                this.shape = new Shape()
                this.down = true
                this.shape.addPoint(event.offsetX,event.offsetY)
                this.screen.shapes.push(this.shape)
            }
        }
        this.screen.canvas.onmousemove = (event) => {
            if(this.down) {
                this.shape.addPoint(event.offsetX,event.offsetY)
            }
        }
        this.screen.canvas.onmouseup = (event) => {
            if(this.down) {
                this.down = false
            }
        }
    }
}
