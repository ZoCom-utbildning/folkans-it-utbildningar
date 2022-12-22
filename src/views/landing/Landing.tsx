import './landing.scss';


class Vector {
    x: number;
    y: number;
    constructor({ x = 0, y = 0 }) {
        this.x = x;
        this.y = y;
    }
    add(...vectors: Vector[]) {
        return vectors.reduce(
            (acc, curr) => ( new Vector({
                x: acc.x + curr.x,
                y: acc.y + curr.y,
            })),
            new Vector({
                x: this.x,
                y: this.y,
            })
        );
    }
  
    sub(p2: { x: number; y: number; }) {
        return new Vector({
            x: this.x - p2.x,
            y: this.y - p2.y,
        });
    }
  
    mul(n: number) {
        return new Vector ({
            x: this.x*n,
            y: this.y*n,
        });
    }
  
    dot(v2: this) {
        return this.x*v2.x + this.y*v2.y;
    }
  
    len() {
        return Math.sqrt(this.dot(this));
    }
    
    norm() {
      let len = this.len();
      return new Vector({
        x: this.x/len,
        y: this.y/len,
      });
    }
}

function Landing(this: any) {
    
    let mousePosition =  new Vector({ x: -10000, y: -10000 });
    function setMousePosition(position: Vector) {
        mousePosition = position;
    }
      
    // creates the blob
    function generateCircle(r = 100, cx = 150, cy = 150, iterations = 200) {
        const points = [];
        for (let i = 0; i < 2 * Math.PI; i+= 2 * Math.PI / iterations) {
            // Makes the blob more or less smooth
            points.push(new Vector({
                x: (5*Math.sin(i*10) + r) * Math.cos(i) + cx,
                y: (5*Math.sin(i*10) + r) * Math.sin(i) + cy,
            }));
        }
        return points;
    }
    
    const originalPoints = generateCircle();
    let points = generateCircle();
    let velocities = points.map(_ => new Vector({ x: 0, y: 0 }));
    

    function draw(points: string | any[]) {
        // var canvas = document.getElementById('canvas');
        const canvas: HTMLCanvasElement = document.getElementById('canvas')  as HTMLCanvasElement;
        if (canvas.getContext) {
          var blob = canvas.getContext('2d');
          if(blob) {
            blob.beginPath();
            blob.fillStyle = "#2573B5";
            if (points.length > 0) {
                blob.moveTo(points[0].x, points[0].y);
                for (let point of points) {
                    blob.lineTo(point.x, point.y);       
                }
                blob.lineTo(points[0].x, points[0].y);
            }
            blob.fill();
            // blob.imageSmoothingEnabled = false;
            }
        }
        drawPoint(mousePosition);
    }
      
    // Draws the point that follows the cursor
    function drawPoint(point: Vector) {
        // var canvas = document.getElementById('canvas');
        const canvas: HTMLCanvasElement = document.getElementById('canvas')  as HTMLCanvasElement;
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            if(ctx) {
                ctx.beginPath();
                ctx.fillStyle = "rgba(0, 0, 0, .5)";
                ctx.beginPath();
                ctx.arc(point.x, point.y, 25, 0, 2*Math.PI);
                ctx.stroke();
                ctx.fill();
                // ctx.imageSmoothingEnabled = false;
            } 
        }
    }
      
    function clear() {
        // var canvas = document.getElementById('canvas');
        const canvas: HTMLCanvasElement = document.getElementById('canvas')  as HTMLCanvasElement;
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            if(ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // ctx.imageSmoothingEnabled = false;
            }
        }
    }
      
    function wobble(t: number, point: { x: number; y: number; }) {
        return new Vector({
            x: 6*Math.sin((t/2 + point.x/4) / 10),
            y: 6*Math.sin((t/2 + point.y/4) / 10),
        });
    }
      
    const FPS = 60;
    let t = 0;
    
    function force(point: any) {
        return point;
    }
      
    function step(points: any[], originalPoints: string | any[]) {
        velocities = velocities.map(
          (v, i) => {
            let leftDist = originalPoints[i].sub(originalPoints[i <= 0 ? originalPoints.length - 1 : i - 1]).len();
            let rightDist = originalPoints[i].sub(originalPoints[i >= originalPoints.length - 1 ? 0 : i + 1]).len();
            let newLeftDistVec = points[i].sub(points[i <= 0 ? points.length - 1 : i - 1]);
            let newRightDistVec = points[i].sub(points[i >= points.length - 1 ? 0 : i + 1]);
      
            const a = new Vector({}).add(
                // keep original structure
                originalPoints[i].sub(points[i]).mul(.005),
                // wobble
                wobble(t, originalPoints[i]).mul(.01),
                // mouse antigravity
                points[i].sub(mousePosition)
                .norm()
                // .mul(Math.max(0, 100 - points[i].sub(mousePosition).len())).mul(.05),
                .mul(Math.min(20, 1/Math.pow(points[i].sub(mousePosition).len(), 2)*1000)),
                // friction
                v.mul(-.3),
                // spring between adjacents based on original structure
                // to be finished
                newLeftDistVec.norm().mul((leftDist - newLeftDistVec.len())/1.5),
                newRightDistVec.norm().mul((rightDist - newRightDistVec.len())/1.5),
            )
        
            return v.add(a);
        });
        return points.map((point, i) => point.add(velocities[i]));
    }
    
    // How often to redraw the canvas
    setInterval(() => {
        clear();
        points = step(points, originalPoints);
        draw(points);
        t++;
    }, Math.floor(1000 / FPS));
    
    window.addEventListener('mousemove', event => {
        const canvas: HTMLCanvasElement = document.getElementById('canvas')  as HTMLCanvasElement;
        const { clientX, clientY } = event;
        if(canvas) {
            // console.log(canvas);
            // console.log("canvas.getBoundingClientRect()",canvas.getBoundingClientRect());

            const { left, top } = canvas.getBoundingClientRect();
            setMousePosition(new Vector({
                // x: clientX - left,
                // y: clientY - top,
                x: clientX,
                y: clientY,
                // x: event.clientX - bounding.left,
                // y: event.clientY - bounding.top,
            }));
        }
    });
    // const wrapper = document.getElementsByClassName('landingPage');
    // console.log(wrapper);
    const ref = useRef(null);
    useEffect(() => {
        if(ref.current) {
            setCanvasWidth(ref.current.offsetWidth);
            setCanvasHeight(ref.current.offsetHeight);
        }
    });
    const [canvasWidth, setCanvasWidth] = useState(1000);
    const [canvasHeight, setCanvasHeight] = useState(1000);
    return (
        <div className="landingPage" ref={ref}>
            <h1 className="landingTitle">Så du är nyfiken på att bli utvecklare?</h1>
            <canvas id="canvas" width={canvasWidth} height={canvasHeight} > </canvas>
        </div>
    );
}

/*
The displayed size of the canvas can be changed using CSS, 
but if you do this the image is scaled during rendering to 
fit the styled size, which can make the final graphics 
rendering end up being distorted.

It is better to specify your canvas dimensions by setting 
the width and height attributes directly on the <canvas> 
elements, either directly in the HTML or by using JavaScript.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
*/

export default Landing;