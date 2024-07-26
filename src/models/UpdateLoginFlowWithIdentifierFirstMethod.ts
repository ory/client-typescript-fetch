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
 * Update Login Flow with Multi-Step Method
 * @export
 * @interface UpdateLoginFlowWithIdentifierFirstMethod
 */
export interface UpdateLoginFlowWithIdentifierFirstMethod {
    /**
     * Sending the anti-csrf token is only required for browser login flows.
     * @type {string}
     * @memberof UpdateLoginFlowWithIdentifierFirstMethod
     */
    csrf_token?: string;
    /**
     * Identifier is the email or username of the user trying to log in.
     * @type {string}
     * @memberof UpdateLoginFlowWithIdentifierFirstMethod
     */
    identifier: string;
    /**
     * Method should be set to "password" when logging in using the identifier and password strategy.
     * @type {string}
     * @memberof UpdateLoginFlowWithIdentifierFirstMethod
     */
    method: string;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateLoginFlowWithIdentifierFirstMethod
     */
    transient_payload?: object;
}

/**
 * Check if a given object implements the UpdateLoginFlowWithIdentifierFirstMethod interface.
 */
export function instanceOfUpdateLoginFlowWithIdentifierFirstMethod(value: object): value is UpdateLoginFlowWithIdentifierFirstMethod {
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function UpdateLoginFlowWithIdentifierFirstMethodFromJSON(json: any): UpdateLoginFlowWithIdentifierFirstMethod {
    return UpdateLoginFlowWithIdentifierFirstMethodFromJSONTyped(json, false);
}

export function UpdateLoginFlowWithIdentifierFirstMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLoginFlowWithIdentifierFirstMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'identifier': json['identifier'],
        'method': json['method'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
    };
}

export function UpdateLoginFlowWithIdentifierFirstMethodToJSON(value?: UpdateLoginFlowWithIdentifierFirstMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'csrf_token': value['csrf_token'],
        'identifier': value['identifier'],
        'method': value['method'],
        'transient_payload': value['transient_payload'],
    };
}

