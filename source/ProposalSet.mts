// @ts-expect-error no types
import difference from "set.prototype.difference/implementation";
// @ts-expect-error no types
import intersection from "set.prototype.intersection/implementation";
// @ts-expect-error no types
import union from "set.prototype.union/implementation";
// @ts-expect-error no types
import isSubsetOf from "set.prototype.isSubsetOf/implementation";
// @ts-expect-error no types
import isSupersetOf from "set.prototype.isSupersetOf/implementation";
// @ts-expect-error no types
import isDisjointFrom from "set.prototype.isdisjointfrom/implementation";
// @ts-expect-error no types
import symmetricDifference from "set.prototype.symmetricdifference/implementation";


export default class ProposalSet<T = any> extends Set<T> {
    /**
     * Everything in A that's not in B:
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference | MDN Web Docs: Set.prototype.difference}
     */
    difference: (otherSet: Set<T>) => Set<T> = difference;

    /**
     * Items that are common between A and B.
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection | MDN Web Docs: Set.prototype.intersection}
     */
    intersection: (otherSet: Set<T>) => Set<T> = intersection;

    /**
     * Are there no common elements between the two sets?
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom | MDN Web Docs: Set.prototype.isDisjointFrom}
     */
    isDisjointFrom: (otherSet: Set<T>) => boolean = isDisjointFrom;
    /**
     * Is everything in A also in B?
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf | MDN Web Docs: Set.prototype.isSubsetOf}
     */
    isSubsetOf: (otherSet: Set<T>) => boolean = isSubsetOf;
    /**
     * Does A contain everything in B?
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf | MDN Web Docs: Set.prototype.isSupersetOf}
     */
    isSupersetOf: (otherSet: Set<T>) => boolean = isSupersetOf;
    /**
     * The opposite of an intersection. A new set containing everything unique to A and B in 
     * one set.
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference | MDN Web Docs: Set.prototype.symmetricDifference}
     */
    symmetricDifference: (otherSet: Set<T>) => Set<T> = symmetricDifference;
    /**
     * Combination of A and B
     * 
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union | MDN Web Docs: Set.prototype.union}
     */
    union: (otherSet: Set<T>) => Set<T> = union;
}
