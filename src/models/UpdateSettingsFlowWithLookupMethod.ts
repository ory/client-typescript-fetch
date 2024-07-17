/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.1
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Update Settings Flow with Lookup Method
 * @export
 * @interface UpdateSettingsFlowWithLookupMethod
 */
export interface UpdateSettingsFlowWithLookupMethod {
    /**
     * CSRFToken is the anti-CSRF token
     * @type {string}
     * @memberof UpdateSettingsFlowWithLookupMethod
     */
    csrf_token?: string;
    /**
     * If set to true will save the regenerated lookup secrets
     * @type {boolean}
     * @memberof UpdateSettingsFlowWithLookupMethod
     */
    lookup_secret_confirm?: boolean;
    /**
     * Disables this method if true.
     * @type {boolean}
     * @memberof UpdateSettingsFlowWithLookupMethod
     */
    lookup_secret_disable?: boolean;
    /**
     * If set to true will regenerate the lookup secrets
     * @type {boolean}
     * @memberof UpdateSettingsFlowWithLookupMethod
     */
    lookup_secret_regenerate?: boolean;
    /**
     * If set to true will reveal the lookup secrets
     * @type {boolean}
     * @memberof UpdateSettingsFlowWithLookupMethod
     */
    lookup_secret_reveal?: boolean;
    /**
     * Method
     * 
     * Should be set to "lookup" when trying to add, update, or remove a lookup pairing.
     * @type {string}
     * @memberof UpdateSettingsFlowWithLookupMethod
     */
    method: string;
    /**
     * Transient data to pass along to any webhooks
     * @type {object}
     * @memberof UpdateSettingsFlowWithLookupMethod
     */
    transient_payload?: object;
}

/**
 * Check if a given object implements the UpdateSettingsFlowWithLookupMethod interface.
 */
export function instanceOfUpdateSettingsFlowWithLookupMethod(value: object): value is UpdateSettingsFlowWithLookupMethod {
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function UpdateSettingsFlowWithLookupMethodFromJSON(json: any): UpdateSettingsFlowWithLookupMethod {
    return UpdateSettingsFlowWithLookupMethodFromJSONTyped(json, false);
}

export function UpdateSettingsFlowWithLookupMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSettingsFlowWithLookupMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'lookup_secret_confirm': json['lookup_secret_confirm'] == null ? undefined : json['lookup_secret_confirm'],
        'lookup_secret_disable': json['lookup_secret_disable'] == null ? undefined : json['lookup_secret_disable'],
        'lookup_secret_regenerate': json['lookup_secret_regenerate'] == null ? undefined : json['lookup_secret_regenerate'],
        'lookup_secret_reveal': json['lookup_secret_reveal'] == null ? undefined : json['lookup_secret_reveal'],
        'method': json['method'],
        'transient_payload': json['transient_payload'] == null ? undefined : json['transient_payload'],
    };
}

export function UpdateSettingsFlowWithLookupMethodToJSON(value?: UpdateSettingsFlowWithLookupMethod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'csrf_token': value['csrf_token'],
        'lookup_secret_confirm': value['lookup_secret_confirm'],
        'lookup_secret_disable': value['lookup_secret_disable'],
        'lookup_secret_regenerate': value['lookup_secret_regenerate'],
        'lookup_secret_reveal': value['lookup_secret_reveal'],
        'method': value['method'],
        'transient_payload': value['transient_payload'],
    };
}

