/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Namespace } from './Namespace';
import {
    NamespaceFromJSON,
    NamespaceFromJSONTyped,
    NamespaceToJSON,
} from './Namespace';

/**
 * Relationship Namespace List
 * @export
 * @interface RelationshipNamespaces
 */
export interface RelationshipNamespaces {
    /**
     * 
     * @type {Array<Namespace>}
     * @memberof RelationshipNamespaces
     */
    namespaces?: Array<Namespace>;
}

/**
 * Check if a given object implements the RelationshipNamespaces interface.
 */
export function instanceOfRelationshipNamespaces(value: object): value is RelationshipNamespaces {
    return true;
}

export function RelationshipNamespacesFromJSON(json: any): RelationshipNamespaces {
    return RelationshipNamespacesFromJSONTyped(json, false);
}

export function RelationshipNamespacesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipNamespaces {
    if (json == null) {
        return json;
    }
    return {
        
        'namespaces': json['namespaces'] == null ? undefined : ((json['namespaces'] as Array<any>).map(NamespaceFromJSON)),
    };
}

export function RelationshipNamespacesToJSON(value?: RelationshipNamespaces | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'namespaces': value['namespaces'] == null ? undefined : ((value['namespaces'] as Array<any>).map(NamespaceToJSON)),
    };
}

