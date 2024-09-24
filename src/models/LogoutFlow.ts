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
 * Logout Flow
 * @export
 * @interface LogoutFlow
 */
export interface LogoutFlow {
    /**
     * LogoutToken can be used to perform logout using AJAX.
     * @type {string}
     * @memberof LogoutFlow
     */
    logout_token: string;
    /**
     * LogoutURL can be opened in a browser to sign the user out.
     * 
     * format: uri
     * @type {string}
     * @memberof LogoutFlow
     */
    logout_url: string;
}

/**
 * Check if a given object implements the LogoutFlow interface.
 */
export function instanceOfLogoutFlow(value: object): value is LogoutFlow {
    if (!('logout_token' in value) || value['logout_token'] === undefined) return false;
    if (!('logout_url' in value) || value['logout_url'] === undefined) return false;
    return true;
}

export function LogoutFlowFromJSON(json: any): LogoutFlow {
    return LogoutFlowFromJSONTyped(json, false);
}

export function LogoutFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogoutFlow {
    if (json == null) {
        return json;
    }
    return {
        
        'logout_token': json['logout_token'],
        'logout_url': json['logout_url'],
    };
}

export function LogoutFlowToJSON(value?: LogoutFlow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'logout_token': value['logout_token'],
        'logout_url': value['logout_url'],
    };
}

