/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IdentityWithCredentialsOidcConfig } from './IdentityWithCredentialsOidcConfig';
import {
    IdentityWithCredentialsOidcConfigFromJSON,
    IdentityWithCredentialsOidcConfigFromJSONTyped,
    IdentityWithCredentialsOidcConfigToJSON,
} from './IdentityWithCredentialsOidcConfig';

/**
 * Create Identity and Import Social Sign In Credentials
 * @export
 * @interface IdentityWithCredentialsOidc
 */
export interface IdentityWithCredentialsOidc {
    /**
     * 
     * @type {IdentityWithCredentialsOidcConfig}
     * @memberof IdentityWithCredentialsOidc
     */
    config?: IdentityWithCredentialsOidcConfig;
}

/**
 * Check if a given object implements the IdentityWithCredentialsOidc interface.
 */
export function instanceOfIdentityWithCredentialsOidc(value: object): value is IdentityWithCredentialsOidc {
    return true;
}

export function IdentityWithCredentialsOidcFromJSON(json: any): IdentityWithCredentialsOidc {
    return IdentityWithCredentialsOidcFromJSONTyped(json, false);
}

export function IdentityWithCredentialsOidcFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityWithCredentialsOidc {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'] == null ? undefined : IdentityWithCredentialsOidcConfigFromJSON(json['config']),
    };
}

export function IdentityWithCredentialsOidcToJSON(value?: IdentityWithCredentialsOidc | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'config': IdentityWithCredentialsOidcConfigToJSON(value['config']),
    };
}

