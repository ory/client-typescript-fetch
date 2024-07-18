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
/**
 * 
 * @export
 * @interface RFC6749ErrorJson
 */
export interface RFC6749ErrorJson {
    /**
     * 
     * @type {string}
     * @memberof RFC6749ErrorJson
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof RFC6749ErrorJson
     */
    error_debug?: string;
    /**
     * 
     * @type {string}
     * @memberof RFC6749ErrorJson
     */
    error_description?: string;
    /**
     * 
     * @type {string}
     * @memberof RFC6749ErrorJson
     */
    error_hint?: string;
    /**
     * 
     * @type {number}
     * @memberof RFC6749ErrorJson
     */
    status_code?: number;
}

/**
 * Check if a given object implements the RFC6749ErrorJson interface.
 */
export function instanceOfRFC6749ErrorJson(value: object): value is RFC6749ErrorJson {
    return true;
}

export function RFC6749ErrorJsonFromJSON(json: any): RFC6749ErrorJson {
    return RFC6749ErrorJsonFromJSONTyped(json, false);
}

export function RFC6749ErrorJsonFromJSONTyped(json: any, ignoreDiscriminator: boolean): RFC6749ErrorJson {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
        'error_debug': json['error_debug'] == null ? undefined : json['error_debug'],
        'error_description': json['error_description'] == null ? undefined : json['error_description'],
        'error_hint': json['error_hint'] == null ? undefined : json['error_hint'],
        'status_code': json['status_code'] == null ? undefined : json['status_code'],
    };
}

export function RFC6749ErrorJsonToJSON(value?: RFC6749ErrorJson | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
        'error_debug': value['error_debug'],
        'error_description': value['error_description'],
        'error_hint': value['error_hint'],
        'status_code': value['status_code'],
    };
}

