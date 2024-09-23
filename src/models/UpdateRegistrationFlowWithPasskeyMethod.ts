/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Registration Flow with Passkey Method
 * @export
 * @interface UpdateRegistrationFlowWithPasskeyMethod
 */
export interface UpdateRegistrationFlowWithPasskeyMethod {
    /**
     * CSRFToken is the anti-CSRF token
     * @type {string}
     * @memberof UpdateRegistrationFlowWithPasskeyMethod
     */
    csrf_token?: string;
    /**
     * Method
     * 
     * Should be set to "passkey" when trying to add, update, or remove a Passkey.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithPasskeyMethod
     */
    method: string;
    /**
     * Register a WebAuthn Security Key
     * 
     * It is expected that the JSON returned by the WebAuthn registration process
     * is included here.
     * @type {string}
     * @memberof UpdateRegistrationFlowWithPasskeyMethod
     */
    passkey_register?: string;
    /**
     * The identity's traits
     * @type {object}
     * @memberof UpdateRegistrationFlowWithPasskeyMethod
     */
    traits: object;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateRegistrationFlowWithPasskeyMethod
     */
    transient_payload?: object;
}

/**
 * Check if a given object implements the UpdateRegistrationFlowWithPasskeyMethod interface.
 */
export function instanceOfUpdateRegistrationFlowWithPasskeyMethod(value: object): value is UpdateRegistrationFlowWithPasskeyMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('traits' in value) || value['traits'] === undefined) return false;
    return true;
}

export function UpdateRegistrationFlowWithPasskeyMethodFromJSON(json: any): UpdateRegistrationFlowWithPasskeyMethod {
    return UpdateRegistrationFlowWithPasskeyMethodFromJSONTyped(json, false);
}

export function UpdateRegistrationFlowWithPasskeyMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRegistrationFlowWithPasskeyMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'method': json['method'],
        'passkey_register': json['passkey_register'] == null ? undefined : json['passkey_register'],
        'traits': json['traits'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
    };
}

export function UpdateRegistrationFlowWithPasskeyMethodToJSON(value?: UpdateRegistrationFlowWithPasskeyMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'csrf_token': value['csrf_token'],
        'method': value['method'],
        'passkey_register': value['passkey_register'],
        'traits': value['traits'],
        'transient_payload': value['transient_payload'],
    };
}

