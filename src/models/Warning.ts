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
/**
 * 
 * @export
 * @interface Warning
 */
export interface Warning {
    /**
     * 
     * @type {number}
     * @memberof Warning
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof Warning
     */
    message?: string;
}

/**
 * Check if a given object implements the Warning interface.
 */
export function instanceOfWarning(value: object): value is Warning {
    return true;
}

export function WarningFromJSON(json: any): Warning {
    return WarningFromJSONTyped(json, false);
}

export function WarningFromJSONTyped(json: any, ignoreDiscriminator: boolean): Warning {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function WarningToJSON(value?: Warning | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'code': value['code'],
        'message': value['message'],
    };
}

