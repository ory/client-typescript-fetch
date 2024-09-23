/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface KetoNamespace
 */
export interface KetoNamespace {
    /**
     * 
     * @type {number}
     * @memberof KetoNamespace
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof KetoNamespace
     */
    name?: string;
}

/**
 * Check if a given object implements the KetoNamespace interface.
 */
export function instanceOfKetoNamespace(value: object): value is KetoNamespace {
    return true;
}

export function KetoNamespaceFromJSON(json: any): KetoNamespace {
    return KetoNamespaceFromJSONTyped(json, false);
}

export function KetoNamespaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): KetoNamespace {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function KetoNamespaceToJSON(value?: KetoNamespace | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

