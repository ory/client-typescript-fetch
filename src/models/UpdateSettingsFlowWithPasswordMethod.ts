/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Settings Flow with Password Method
 * @export
 * @interface UpdateSettingsFlowWithPasswordMethod
 */
export interface UpdateSettingsFlowWithPasswordMethod {
    /**
     * CSRFToken is the anti-CSRF token
     * @type {string}
     * @memberof UpdateSettingsFlowWithPasswordMethod
     */
    csrf_token?: string;
    /**
     * Method
     * 
     * Should be set to password when trying to update a password.
     * @type {string}
     * @memberof UpdateSettingsFlowWithPasswordMethod
     */
    method: string;
    /**
     * Password is the updated password
     * @type {string}
     * @memberof UpdateSettingsFlowWithPasswordMethod
     */
    password: string;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateSettingsFlowWithPasswordMethod
     */
    transient_payload?: object;
}

/**
 * Check if a given object implements the UpdateSettingsFlowWithPasswordMethod interface.
 */
export function instanceOfUpdateSettingsFlowWithPasswordMethod(value: object): value is UpdateSettingsFlowWithPasswordMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    return true;
}

export function UpdateSettingsFlowWithPasswordMethodFromJSON(json: any): UpdateSettingsFlowWithPasswordMethod {
    return UpdateSettingsFlowWithPasswordMethodFromJSONTyped(json, false);
}

export function UpdateSettingsFlowWithPasswordMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSettingsFlowWithPasswordMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'method': json['method'],
        'password': json['password'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
    };
}

export function UpdateSettingsFlowWithPasswordMethodToJSON(value?: UpdateSettingsFlowWithPasswordMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'csrf_token': value['csrf_token'],
        'method': value['method'],
        'password': value['password'],
        'transient_payload': value['transient_payload'],
    };
}

