/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.5
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
 * @interface CloudAccount
 */
export interface CloudAccount {
    /**
     * 
     * @type {string}
     * @memberof CloudAccount
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof CloudAccount
     */
    email_verified: boolean;
    /**
     * 
     * @type {string}
     * @memberof CloudAccount
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CloudAccount
     */
    name: string;
}

/**
 * Check if a given object implements the CloudAccount interface.
 */
export function instanceOfCloudAccount(value: object): value is CloudAccount {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('email_verified' in value) || value['email_verified'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CloudAccountFromJSON(json: any): CloudAccount {
    return CloudAccountFromJSONTyped(json, false);
}

export function CloudAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'email_verified': json['email_verified'],
        'id': json['id'],
        'name': json['name'],
    };
}

export function CloudAccountToJSON(value?: CloudAccount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'email_verified': value['email_verified'],
        'id': value['id'],
        'name': value['name'],
    };
}

