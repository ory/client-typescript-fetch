/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IdentityWithCredentialsOidc } from './IdentityWithCredentialsOidc';
import {
    IdentityWithCredentialsOidcFromJSON,
    IdentityWithCredentialsOidcFromJSONTyped,
    IdentityWithCredentialsOidcToJSON,
} from './IdentityWithCredentialsOidc';
import type { IdentityWithCredentialsPassword } from './IdentityWithCredentialsPassword';
import {
    IdentityWithCredentialsPasswordFromJSON,
    IdentityWithCredentialsPasswordFromJSONTyped,
    IdentityWithCredentialsPasswordToJSON,
} from './IdentityWithCredentialsPassword';

/**
 * Create Identity and Import Credentials
 * @export
 * @interface IdentityWithCredentials
 */
export interface IdentityWithCredentials {
    /**
     * 
     * @type {IdentityWithCredentialsOidc}
     * @memberof IdentityWithCredentials
     */
    oidc?: IdentityWithCredentialsOidc;
    /**
     * 
     * @type {IdentityWithCredentialsPassword}
     * @memberof IdentityWithCredentials
     */
    password?: IdentityWithCredentialsPassword;
}

/**
 * Check if a given object implements the IdentityWithCredentials interface.
 */
export function instanceOfIdentityWithCredentials(value: object): value is IdentityWithCredentials {
    return true;
}

export function IdentityWithCredentialsFromJSON(json: any): IdentityWithCredentials {
    return IdentityWithCredentialsFromJSONTyped(json, false);
}

export function IdentityWithCredentialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityWithCredentials {
    if (json == null) {
        return json;
    }
    return {
        
        'oidc': json['oidc'] == null ? undefined : IdentityWithCredentialsOidcFromJSON(json['oidc']),
        'password': json['password'] == null ? undefined : IdentityWithCredentialsPasswordFromJSON(json['password']),
    };
}

export function IdentityWithCredentialsToJSON(value?: IdentityWithCredentials | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'oidc': IdentityWithCredentialsOidcToJSON(value['oidc']),
        'password': IdentityWithCredentialsPasswordToJSON(value['password']),
    };
}

