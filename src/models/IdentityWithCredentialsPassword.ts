/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IdentityWithCredentialsPasswordConfig } from './IdentityWithCredentialsPasswordConfig';
import {
    IdentityWithCredentialsPasswordConfigFromJSON,
    IdentityWithCredentialsPasswordConfigFromJSONTyped,
    IdentityWithCredentialsPasswordConfigToJSON,
} from './IdentityWithCredentialsPasswordConfig';

/**
 * Create Identity and Import Password Credentials
 * @export
 * @interface IdentityWithCredentialsPassword
 */
export interface IdentityWithCredentialsPassword {
    /**
     * 
     * @type {IdentityWithCredentialsPasswordConfig}
     * @memberof IdentityWithCredentialsPassword
     */
    config?: IdentityWithCredentialsPasswordConfig;
}

/**
 * Check if a given object implements the IdentityWithCredentialsPassword interface.
 */
export function instanceOfIdentityWithCredentialsPassword(value: object): value is IdentityWithCredentialsPassword {
    return true;
}

export function IdentityWithCredentialsPasswordFromJSON(json: any): IdentityWithCredentialsPassword {
    return IdentityWithCredentialsPasswordFromJSONTyped(json, false);
}

export function IdentityWithCredentialsPasswordFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityWithCredentialsPassword {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'] == null ? undefined : IdentityWithCredentialsPasswordConfigFromJSON(json['config']),
    };
}

export function IdentityWithCredentialsPasswordToJSON(value?: IdentityWithCredentialsPassword | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'config': IdentityWithCredentialsPasswordConfigToJSON(value['config']),
    };
}
