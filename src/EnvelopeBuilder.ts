import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xmin = Infinity;
    private ymin = Infinity;
    private xmax = -Infinity; 
    private ymax = -Infinity;

    public insert(coordinate: Coordinate): void {
        this.xmin = Math.min(this.xmin, coordinate[0]);
        this.ymin = Math.min(this.ymin, coordinate[1]);
        this.xmax = Math.max(this.xmax, coordinate[0]);
        this.ymax = Math.max(this.ymax, coordinate[1]);
    }

    public build(): Envelope {
        if (this.xmin != Infinity){
            const bottomLeft = [this.xmin, this.ymin];
            const topRight = [this.xmax, this.ymax];
            const envelope = new Envelope(bottomLeft, topRight);
            return envelope;

        }
        else {
            const envelope = new Envelope(); 
            return envelope;
        }
    }

};