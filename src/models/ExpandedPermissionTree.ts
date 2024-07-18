/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Relationship } from './Relationship';
import {
    RelationshipFromJSON,
    RelationshipFromJSONTyped,
    RelationshipToJSON,
} from './Relationship';

/**
 * 
 * @export
 * @interface ExpandedPermissionTree
 */
export interface ExpandedPermissionTree {
    /**
     * The children of the node, possibly none.
     * @type {Array<ExpandedPermissionTree>}
     * @memberof ExpandedPermissionTree
     */
    children?: Array<ExpandedPermissionTree>;
    /**
     * 
     * @type {Relationship}
     * @memberof ExpandedPermissionTree
     */
    tuple?: Relationship;
    /**
     * The type of the node.
     * union TreeNodeUnion
     * exclusion TreeNodeExclusion
     * intersection TreeNodeIntersection
     * leaf TreeNodeLeaf
     * tuple_to_subject_set TreeNodeTupleToSubjectSet
     * computed_subject_set TreeNodeComputedSubjectSet
     * not TreeNodeNot
     * unspecified TreeNodeUnspecified
     * @type {string}
     * @memberof ExpandedPermissionTree
     */
    type: ExpandedPermissionTreeTypeEnum;
}


/**
 * @export
 */
export const ExpandedPermissionTreeTypeEnum = {
    Union: 'union',
    Exclusion: 'exclusion',
    Intersection: 'intersection',
    Leaf: 'leaf',
    TupleToSubjectSet: 'tuple_to_subject_set',
    ComputedSubjectSet: 'computed_subject_set',
    Not: 'not',
    Unspecified: 'unspecified'
} as const;
export type ExpandedPermissionTreeTypeEnum = typeof ExpandedPermissionTreeTypeEnum[keyof typeof ExpandedPermissionTreeTypeEnum];


/**
 * Check if a given object implements the ExpandedPermissionTree interface.
 */
export function instanceOfExpandedPermissionTree(value: object): value is ExpandedPermissionTree {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ExpandedPermissionTreeFromJSON(json: any): ExpandedPermissionTree {
    return ExpandedPermissionTreeFromJSONTyped(json, false);
}

export function ExpandedPermissionTreeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpandedPermissionTree {
    if (json == null) {
        return json;
    }
    return {
        
        'children': json['children'] == null ? undefined : ((json['children'] as Array<any>).map(ExpandedPermissionTreeFromJSON)),
        'tuple': json['tuple'] == null ? undefined : RelationshipFromJSON(json['tuple']),
        'type': json['type'],
    };
}

export function ExpandedPermissionTreeToJSON(value?: ExpandedPermissionTree | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'children': value['children'] == null ? undefined : ((value['children'] as Array<any>).map(ExpandedPermissionTreeToJSON)),
        'tuple': RelationshipToJSON(value['tuple']),
        'type': value['type'],
    };
}

