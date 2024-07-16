/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.0
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Perform Native Logout Request Body
 * @export
 * @interface PerformNativeLogoutBody
 */
export interface PerformNativeLogoutBody {
    /**
     * The Session Token
     * 
     * Invalidate this session token.
     * @type {string}
     * @memberof PerformNativeLogoutBody
     */
    session_token: string;
}

/**
 * Check if a given object implements the PerformNativeLogoutBody interface.
 */
export function instanceOfPerformNativeLogoutBody(value: object): value is PerformNativeLogoutBody {
    if (!('session_token' in value) || value['session_token'] === undefined) return false;
    return true;
}

export function PerformNativeLogoutBodyFromJSON(json: any): PerformNativeLogoutBody {
    return PerformNativeLogoutBodyFromJSONTyped(json, false);
}

export function PerformNativeLogoutBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PerformNativeLogoutBody {
    if (json == null) {
        return json;
    }
    return {
        
        'session_token': json['session_token'],
    };
}

export function PerformNativeLogoutBodyToJSON(value?: PerformNativeLogoutBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'session_token': value['session_token'],
    };
}

