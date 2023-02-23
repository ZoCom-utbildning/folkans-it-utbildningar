import { useEffect, useRef, useState } from 'react';
import './blob.scss';
import '../../scss/_variables.scss';
import { Vector } from './vector';

type Props = {
    xPos: number;
    yPos: number;
    radius: number;
    opacity: number;
}

function Blob(this: any, { xPos, yPos, radius, opacity }: Props) {
    // === Defining data ===
    const [canvasWidth, setCanvasWidth] = useState<number>(1000);
    const [canvasHeight, setCanvasHeight] = useState<number>(1000);
    // const [bodyStyle, setBodyStyle] = useState<string>("fixed");
    const wrapper: React.MutableRefObject<any> = useRef<any>(null);
    const wrapperHeight: number = wrapper.current?.offsetHeight;
    const wrapperWidth: number = wrapper.current?.offsetWidth;

    let t: number = 0;
    const originalPoints: Vector[] = generateCircle();
    let points: Vector[] = generateCircle();
    let velocities: Vector[] = points.map(_ => new Vector({ x: 0, y: 0 }));

    // TODO: Figure out a way to update this.
    useEffect(() => {
        setTimeout(() => {
            if (wrapper.current) {
                setCanvasWidth(wrapperWidth);
                setCanvasHeight(wrapperHeight);
            }
        })
    });

    // === Defines canvas ===
    // Note: not using useRef(); because I haven't figured out how to get it as the correct type; HTMLCanvasElement.
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null;
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    // === get mouse position ===
    let mousePosition = new Vector({ x: -10000, y: -10000 });
    function setMousePosition(position: Vector) {
        mousePosition = position;
    }

    // === Draws everything & adds style ===
    function draw(points: string | any[], ctx: any) {
        if (ctx) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
            // ctx.shadowColor = "black";
            // ctx.shadowBlur = 15;
            if (points.length > 0) {
                ctx.moveTo(points[0].x, points[0].y);
                for (let point of points) {
                    ctx.lineTo(point.x, point.y);
                }
                ctx.lineTo(points[0].x, points[0].y);
            }
            ctx.fill();
        }
        drawPoint(mousePosition, ctx);
    }

    // === Creates the point that follows the cursor ===
    function drawPoint(point: Vector, ctx: any) {
        if (ctx) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 25, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    }

    // === clear the canvas ===
    function clear(ctx: any) {
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

    }

    // === creates the blob ===
    // size, x position, y position, how many points the blob has
    function generateCircle(r = wrapperHeight / radius, cx = wrapperWidth / xPos, cy = wrapperHeight / yPos, iterations = 200) {
        const points: Vector[] = [];
        for (let i = 0; i < 2 * Math.PI; i += 2 * Math.PI / iterations) {
            // Makes the blob more or less wobbly
            points.push(new Vector({
                x: (5 * Math.sin(i * 10) + r) * Math.cos(i) + cx,
                y: (5 * Math.sin(i * 10) + r) * Math.sin(i) + cy,
            }));
        }
        return points;
    }

    // === Wobble the blob ===
    function wobble(t: number, point: { x: number; y: number; }) {
        return new Vector({
            x: 6 * Math.sin((t / 2 + point.x / 4) / 10),
            y: 6 * Math.sin((t / 2 + point.y / 4) / 10),
        });
    }

    // function force(point: any) {
    //     return point;
    // }

    // === Shapes the blob ===
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
                        .mul(Math.min(20, 1 / Math.pow(points[i].sub(mousePosition).len(), 2) * 1000)),
                    // friction
                    v.mul(-.3),
                    // spring between adjacents based on original structure
                    // to be finished
                    newLeftDistVec.norm().mul((leftDist - newLeftDistVec.len()) / 1.5),
                    newRightDistVec.norm().mul((rightDist - newRightDistVec.len()) / 1.5),
                )

                return v.add(a);
            });
        return points.map((point, i) => point.add(velocities[i]));
    }

    // === animate canvas ===
    function animateIt() {
        clear(ctx);
        points = step(points, originalPoints);
        draw(points, ctx);
        t++;
        window.requestAnimationFrame(animateIt);
    }
    window.requestAnimationFrame(animateIt);

    // === update mouse position ===
    window.addEventListener('mousemove', event => {
        const { clientX, clientY } = event;
        setMousePosition(new Vector({
            x: clientX,
            y: clientY,
        }));
    });

    window.addEventListener('touchmove', event => {
        let touchX = event.touches[0].clientX;
        let touchY = event.touches[0].clientY;
        setMousePosition(new Vector({
            x: touchX,
            y: touchY,
        }));
    });

    return (
        <div className="canvasWrapper" ref={wrapper}>
            <canvas id="canvas" width={canvasWidth} height={canvasHeight} > </canvas>
        </div>
    );
}

export default Blob;