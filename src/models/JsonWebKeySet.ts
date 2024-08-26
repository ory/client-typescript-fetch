/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { JsonWebKey } from './JsonWebKey';
import {
    JsonWebKeyFromJSON,
    JsonWebKeyFromJSONTyped,
    JsonWebKeyToJSON,
} from './JsonWebKey';

/**
 * JSON Web Key Set
 * @export
 * @interface JsonWebKeySet
 */
export interface JsonWebKeySet {
    /**
     * List of JSON Web Keys
     * 
     * The value of the "keys" parameter is an array of JSON Web Key (JWK)
     * values. By default, the order of the JWK values within the array does
     * not imply an order of preference among them, although applications
     * of JWK Sets can choose to assign a meaning to the order for their
     * purposes, if desired.
     * @type {Array<JsonWebKey>}
     * @memberof JsonWebKeySet
     */
    keys?: Array<JsonWebKey>;
}

/**
 * Check if a given object implements the JsonWebKeySet interface.
 */
export function instanceOfJsonWebKeySet(value: object): value is JsonWebKeySet {
    return true;
}

export function JsonWebKeySetFromJSON(json: any): JsonWebKeySet {
    return JsonWebKeySetFromJSONTyped(json, false);
}

export function JsonWebKeySetFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonWebKeySet {
    if (json == null) {
        return json;
    }
    return {
        
        'keys': json['keys'] == null ? undefined : ((json['keys'] as Array<any>).map(JsonWebKeyFromJSON)),
    };
}

export function JsonWebKeySetToJSON(value?: JsonWebKeySet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'keys': value['keys'] == null ? undefined : ((value['keys'] as Array<any>).map(JsonWebKeyToJSON)),
    };
}

