// @ts-expect-error no types
import differenceShim from "set.prototype.difference/shim";
// @ts-expect-error no types
import intersectionShim from "set.prototype.intersection/shim";
// @ts-expect-error no types
import unionShim from "set.prototype.union/shim";
// @ts-expect-error no types
import isSubsetOfShim from "set.prototype.isSubsetOf/shim";
// @ts-expect-error no types
import isSupersetOfShim from "set.prototype.isSupersetOf/shim";
// @ts-expect-error no types
import isDisjointFromShim from "set.prototype.isdisjointfrom/shim";
// @ts-expect-error no types
import symmetricdifference from "set.prototype.symmetricdifference/shim";


interface ProposalSet<T> extends Set<T> {
    /**
     * Everything in A that's not in B:
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference | MDN Web Docs: Set.prototype.difference}
     */
    difference(otherSet: Set<T>): Set<T>;
    /**
     * Items that are common between A and B.
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection | MDN Web Docs: Set.prototype.intersection}
     */
    intersection(otherSet: Set<T>): Set<T>;
    /**
     * Combination of A and B
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union | MDN Web Docs: Set.prototype.union}
     */
    union(otherSet: Set<T>): Set<T>;
    /**
     * Is everything in A also in B?
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf | MDN Web Docs: Set.prototype.isSubsetOf}
     */
    isSubsetOf(otherSet: Set<T>): boolean;
    /**
     * Does A contain everything in B?
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf | MDN Web Docs: Set.prototype.isSupersetOf}
     */
    isSupersetOf(otherSet: Set<T>): boolean;
    /**
     * Are there no common elements between the two sets?
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom | MDN Web Docs: Set.prototype.isDisjointFrom}
     */
    isDisjointFrom(otherSet: Set<T>): boolean;
    /**
     * The opposite of an intersection. A new set containing everything unique to A and B in 
     * one set.
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference | MDN Web Docs: Set.prototype.symmetricDifference}
     */
    symmetricDifference(otherSet: Set<T>): Set<T>;
}


differenceShim();
intersectionShim();
unionShim();
isSubsetOfShim();
isSupersetOfShim();
isDisjointFromShim();
symmetricdifference();

interface pSetConstructor {
    new <T = any>(values?: readonly T[] | null): ProposalSet<T>;
}

export const pSet = Set as unknown as pSetConstructor;
