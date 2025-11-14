import Coordinate from "./Coordinate"

export default class Envelope {
    private bottomLeft ?: Coordinate;
    private topRight ?: Coordinate;

    public constructor(bottomLeft ?: Coordinate, topRight ?: Coordinate) {
        this.bottomLeft = bottomLeft || [];
        this.topRight = topRight || [];
    }

    public isEmpty(): boolean {
        return !isFinite(this.bottomLeft[0])
    }

    public getXmin(): number {
        return this.bottomLeft[0];
    }

    public getYmin(): number {
        return this.bottomLeft[1];
    }

    public getXmax(): number {
        return this.topRight[0];
    }

    public getYmax(): number {
        return this.topRight[1];
    }

    public toString(): string {
        return "["+this.bottomLeft[0].toFixed(1)+", "+this.bottomLeft[1].toFixed(1)+", "+this.topRight[0].toFixed(1)+", "+this.topRight[1].toFixed(1)+"]"
    }
};