/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { IdentityCredentialsOidcProvider } from './IdentityCredentialsOidcProvider';
import {
    IdentityCredentialsOidcProviderFromJSON,
    IdentityCredentialsOidcProviderFromJSONTyped,
    IdentityCredentialsOidcProviderToJSON,
} from './IdentityCredentialsOidcProvider';

/**
 * 
 * @export
 * @interface IdentityCredentialsOidc
 */
export interface IdentityCredentialsOidc {
    /**
     * 
     * @type {Array<IdentityCredentialsOidcProvider>}
     * @memberof IdentityCredentialsOidc
     */
    providers?: Array<IdentityCredentialsOidcProvider>;
}

/**
 * Check if a given object implements the IdentityCredentialsOidc interface.
 */
export function instanceOfIdentityCredentialsOidc(value: object): value is IdentityCredentialsOidc {
    return true;
}

export function IdentityCredentialsOidcFromJSON(json: any): IdentityCredentialsOidc {
    return IdentityCredentialsOidcFromJSONTyped(json, false);
}

export function IdentityCredentialsOidcFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityCredentialsOidc {
    if (json == null) {
        return json;
    }
    return {
        
        'providers': json['providers'] == null ? undefined : ((json['providers'] as Array<any>).map(IdentityCredentialsOidcProviderFromJSON)),
    };
}

export function IdentityCredentialsOidcToJSON(value?: IdentityCredentialsOidc | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'providers': value['providers'] == null ? undefined : ((value['providers'] as Array<any>).map(IdentityCredentialsOidcProviderToJSON)),
    };
}

