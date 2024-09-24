/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * The content of the allowed field is mirrored in the HTTP status code.
 * @export
 * @interface CheckPermissionResult
 */
export interface CheckPermissionResult {
    /**
     * whether the relation tuple is allowed
     * @type {boolean}
     * @memberof CheckPermissionResult
     */
    allowed: boolean;
}

/**
 * Check if a given object implements the CheckPermissionResult interface.
 */
export function instanceOfCheckPermissionResult(value: object): value is CheckPermissionResult {
    if (!('allowed' in value) || value['allowed'] === undefined) return false;
    return true;
}

export function CheckPermissionResultFromJSON(json: any): CheckPermissionResult {
    return CheckPermissionResultFromJSONTyped(json, false);
}

export function CheckPermissionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckPermissionResult {
    if (json == null) {
        return json;
    }
    return {
        
        'allowed': json['allowed'],
    };
}

export function CheckPermissionResultToJSON(value?: CheckPermissionResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'allowed': value['allowed'],
    };
}

