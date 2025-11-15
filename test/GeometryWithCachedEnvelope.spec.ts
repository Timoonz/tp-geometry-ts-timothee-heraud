import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";


describe("test GeometryWitCachedEnvelope", () => {
    it("test empty geometry, should return an empty cached envelope", () => {
        const p = new Point();
        const dec = new GeometryWithCachedEnvelope(p);

        // La géométrie et l'enveloppe devraient être vide 
        expect(dec.isEmpty()).to.be.true;
        expect(dec.getEnvelope().isEmpty()).to.be.true;
        expect(dec.getType()).to.equal("Point");
        expect(dec.asText()).to.equal("POINT EMPTY");
    });

    it("single point with GeometryCachedEnvelope", () => {
        const p = new Point([3.0, 3.0]);
        const dec = new GeometryWithCachedEnvelope(p);

        // Cette fois-ci l'enveloppe et la géométrie ne devraient pas être vide
        expect(dec.isEmpty()).to.be.false;
        expect(dec.getEnvelope().isEmpty()).to.be.false;

        // a and b devraient avoir la même instance
        const a = dec.getEnvelope();
        const b = dec.getEnvelope();
        expect(a).to.deep.equal(b);
        expect(a.toString()).to.equal("[3.0, 3.0, 3.0, 3.0]");

        //On vérifie que la translation a bien fonctionné
        dec.translate(1.0, 1.0);
        expect(p.getCoordinate()).to.deep.equal([4.0, 4.0]);

    });

    it("LineString with GeometryCachedEnvelope", () => {
        const p1 = new Point([0.0, 0.0]);
        const p2 = new Point([1.0, 1.0]);
        const p3 = new Point([2.0, 2.0]);
        const l = new LineString([p1, p2, p3]);
        
        const dec = new GeometryWithCachedEnvelope(l);

        // L'enveloppe et la géométrie ne devraient pas être vide
        expect(dec.isEmpty()).to.be.false;
        expect(dec.getEnvelope().isEmpty()).to.be.false;

        // a and b devraient avoir la même instance
        const a = dec.getEnvelope();
        const b = dec.getEnvelope();
        expect(a).to.deep.equal(b);
        expect(a.toString()).to.equal("[0.0, 0.0, 2.0, 2.0]");

        //On vérifie que la translation a bien fonctionné
        dec.translate(1.0, 1.0);
        expect(l.asText()).to.equal("LINESTRING(1.0 1.0,2.0 2.0,3.0 3.0)")

    });

    it("test du clonage de GeometryWithCachedEnvelope", () => {
        const p = new Point([1.0, 1.0]);
        const dec = new GeometryWithCachedEnvelope(p);
        dec.getEnvelope();
        const dec_clone = dec.clone();

        expect(dec).to.not.equal(dec_clone);
        expect(dec.getEnvelope()).to.deep.equal(dec_clone.getEnvelope());

    });

    it("test du accept de GeometryWithCachedEnvelope (avec LogGeometryVisitor)", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        const p = new Point([3.0,4.0]);
        const dec = new GeometryWithCachedEnvelope(p);
        dec.accept(visitor);
        expect(result).to.equal("Je suis un point avec x=3.0 et y=4.0.");
    });
});