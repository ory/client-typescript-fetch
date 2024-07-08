/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Create JSON Web Key Set Request Body
 * @export
 * @interface CreateJsonWebKeySet
 */
export interface CreateJsonWebKeySet {
    /**
     * JSON Web Key Algorithm
     * 
     * The algorithm to be used for creating the key. Supports `RS256`, `ES256`, `ES512`, `HS512`, and `HS256`.
     * @type {string}
     * @memberof CreateJsonWebKeySet
     */
    alg: string;
    /**
     * JSON Web Key ID
     * 
     * The Key ID of the key to be created.
     * @type {string}
     * @memberof CreateJsonWebKeySet
     */
    kid: string;
    /**
     * JSON Web Key Use
     * 
     * The "use" (public key use) parameter identifies the intended use of
     * the public key. The "use" parameter is employed to indicate whether
     * a public key is used for encrypting data or verifying the signature
     * on data. Valid values are "enc" and "sig".
     * @type {string}
     * @memberof CreateJsonWebKeySet
     */
    use: string;
}

/**
 * Check if a given object implements the CreateJsonWebKeySet interface.
 */
export function instanceOfCreateJsonWebKeySet(value: object): value is CreateJsonWebKeySet {
    if (!('alg' in value) || value['alg'] === undefined) return false;
    if (!('kid' in value) || value['kid'] === undefined) return false;
    if (!('use' in value) || value['use'] === undefined) return false;
    return true;
}

export function CreateJsonWebKeySetFromJSON(json: any): CreateJsonWebKeySet {
    return CreateJsonWebKeySetFromJSONTyped(json, false);
}

export function CreateJsonWebKeySetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateJsonWebKeySet {
    if (json == null) {
        return json;
    }
    return {
        
        'alg': json['alg'],
        'kid': json['kid'],
        'use': json['use'],
    };
}

export function CreateJsonWebKeySetToJSON(value?: CreateJsonWebKeySet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'alg': value['alg'],
        'kid': value['kid'],
        'use': value['use'],
    };
}

