import Coordinate from "./Coordinate"

export default class Envelope {
    private bottomLeft ?: Coordinate;
    private topRight ?: Coordinate;

    public constructor(bottomLeft ?: Coordinate, topRight ?: Coordinate) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }

    public isEmpty(): boolean {
        return 
    }
    
    public getXmin(): number {
        return this.bottomLeft ? this.bottomLeft[0] : Number.NaN
    }

    public getYmin(): number {
        return this.bottomLeft ? this.bottomLeft[1] : Number.NaN
    }

    public getXmax(): number {
        return this.topRight ? this.topRight[0] : Number.NaN 
    }

    public getYmax(): number {
        return this.topRight ? this.topRight[1] : Number.NaN
    }

    public toString(): string {
        return 
    }
};