export class Vector {
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
